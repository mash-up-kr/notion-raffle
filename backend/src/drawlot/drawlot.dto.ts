import { ListResponse } from '../types/http';
import { DrawlotDocument } from './drawlot.schema';

export class CreateDrawlotReqDto {
    title: string;
    luckCnt: number;
    maxLotsCnt: number;
}

export class FindDrawlotsResDto implements ListResponse<FindDrawlotResDto> {
    list: FindDrawlotResDto[];
    count: number;

    static from(drawlots: DrawlotDocument[]): FindDrawlotsResDto {
        return Object.assign(new FindDrawlotResDto(), {
            list: drawlots.map((drawlot) => FindDrawlotResDto.from(drawlot)),
            count: drawlots.length,
        });
    }
}

export class FindDrawlotResDto {
    id: string;
    title: string;
    maxLotsCnt: number;
    luckCnt: number;
    luckIdxs: number[];
    triedUsers: string[];

    static from(drawlot: DrawlotDocument): FindDrawlotResDto {
        return Object.assign(new FindDrawlotResDto(), {
            id: String(drawlot._id),
            title: drawlot.title,
            maxLotsCnt: drawlot.maxLotsCnt,
            luckCnt: drawlot.luckCnt,
            luckIdxs: drawlot.luckIdxs,
            triedUsers: drawlot.triedUsers,
        });
    }
}

export class CreateDrawlotDto {
    title: string;
    uuid: string;
    maxLotsCnt: number;
    luckCnt: number;
    luckIdxs: number[];
    triedUsers: string[];
}

export class TryDrawlotReqDto {
    user: string;
}

export class TryDrawlotResDto {
    isLucky: boolean;
}
