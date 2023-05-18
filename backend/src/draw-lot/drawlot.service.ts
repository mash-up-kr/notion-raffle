import { Injectable } from '@nestjs/common';
import { CreateDrawlotDto, CreateDrawlotReqDto } from './drawlot.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Drawlot, DrawlotDocument } from './drawlot.schema';
import { shuffleArray } from '../util/suffle';

@Injectable()
export class DrawlotService {
    constructor(@InjectModel(Drawlot.name) private readonly drawlotModel: Model<DrawlotDocument>) {}
    async createDrawlot(uuid: string, createDrawlotReqDto: CreateDrawlotReqDto): Promise<string> {
        const createDrawlotDto: CreateDrawlotDto = {
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

    private makeLuckIdxs(maxLotCnt, luckCnt) {
        const candidates = Array(maxLotCnt)
            .fill(undefined)
            .map((_, idx) => idx);
        const luckIdxs = shuffleArray(candidates).slice(0, luckCnt);
        return luckIdxs.sort();
    }
}
