import { ListResponse } from '../types/http';
import { Queried } from '../types/mongo';
import { Drawlot } from './drawlot.schema';

export class CreateDrawlotReqDto {
    title: string;
    luckCnt: number;
    maxLotsCnt: number;
}

export class FindDrawlotsResDto implements ListResponse<FindDrawlotResDto> {
    list: FindDrawlotResDto[];
    count: number;

    static from(drawlots: Queried<Drawlot>[]): FindDrawlotsResDto {
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

    static from(drawlot: Queried<Drawlot>): FindDrawlotResDto {
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
