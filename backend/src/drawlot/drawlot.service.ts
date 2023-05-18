import { Injectable } from '@nestjs/common';
import { CreateDrawlotDto, CreateDrawlotReqDto, TryDrawlotResultDto } from './drawlot.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Drawlot, DrawlotDocument } from './drawlot.schema';
import { shuffleArray } from '../util/suffle';
import { Queried } from '../types/mongo';

@Injectable()
export class DrawlotService {
    constructor(@InjectModel(Drawlot.name) private readonly drawlotModel: Model<DrawlotDocument>) {}
    async createDrawlot(uuid: string, createDrawlotReqDto: CreateDrawlotReqDto): Promise<string> {
        const createDrawlotDto: CreateDrawlotDto = {
            title: createDrawlotReqDto.title,
            uuid: uuid,
            maxLotsCnt: createDrawlotReqDto.maxLotsCnt,
            luckCnt: createDrawlotReqDto.luckCnt,
            luckIdxs: this.makeLuckIdxs(
                createDrawlotReqDto.maxLotsCnt,
                createDrawlotReqDto.luckCnt,
            ),
            triedUsers: [],
        };
        const drawLot = new this.drawlotModel(createDrawlotDto);
        await drawLot.save();
        return drawLot.id;
    }

    private makeLuckIdxs(maxLotCnt, luckCnt): number[] {
        const candidates = Array(maxLotCnt)
            .fill(undefined)
            .map((_, idx) => idx);
        const luckIdxs = shuffleArray(candidates).slice(0, luckCnt);
        return luckIdxs.sort();
    }

    async findDrawlotsByUuid(uuid: string): Promise<Queried<Drawlot>[]> {
        return await this.drawlotModel.find({ uuid: uuid }).exec();
    }

    async findDrawlotByUuid(id: string): Promise<Queried<Drawlot>> {
        return await this.drawlotModel.findById(id).exec();
    }

    async tryDrawlot(id: string, user: string): Promise<TryDrawlotResultDto> {
        const tryDrawlotResult: TryDrawlotResultDto = {
            isLucky: false,
        };
        const session = await this.drawlotModel.startSession();
        await session.startTransaction();
        try {
            const drawlot = await this.drawlotModel
                .findByIdAndUpdate(
                    id,
                    {
                        $push: { triedUsers: user },
                    },
                    { returnDocument: 'after' },
                )
                .session(session);

            if (drawlot.triedUsers.length > drawlot.maxLotsCnt) throw Error();
            const curTryIdx = drawlot.triedUsers.length - 1;
            if (drawlot.luckIdxs.includes(curTryIdx)) tryDrawlotResult.isLucky = true;

            await session.commitTransaction();
        } catch (e) {
            await session.abortTransaction();
        } finally {
            await session.endSession();
        }
        return tryDrawlotResult;
    }
}
