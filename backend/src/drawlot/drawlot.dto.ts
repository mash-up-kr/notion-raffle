import { ListResponse } from '../types/http';
import { Queried } from '../types/mongo';
import { Drawlot } from './drawlot.schema';

export class CreateDrawlotReqDto {
    title: string;
    luckCnt: number;
    maxLotsCnt: number;
}

export class FindDrawlotsRes implements ListResponse<FindDrawlotRes> {
    list: FindDrawlotRes[];
    count: number;

    static from(drawlots: Queried<Drawlot>[]): FindDrawlotsRes {
        return Object.assign(new FindDrawlotRes(), {
            list: drawlots.map((drawlot) => FindDrawlotRes.from(drawlot)),
            count: drawlots.length,
        });
    }
}

export class FindDrawlotRes {
    id: string;
    title: string;
    maxLotsCnt: number;
    luckCnt: number;
    luckIdxs: number[];
    triedUsers: string[];

    static from(drawlot: Queried<Drawlot>): FindDrawlotRes {
        return Object.assign(new FindDrawlotRes(), {
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
