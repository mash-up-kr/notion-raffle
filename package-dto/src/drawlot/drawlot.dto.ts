import { ListResponse } from '@notion-raffle/util';

export class CreateDrawlotReqDto {
    title: string;
    luckCnt: number;
    maxLotsCnt: number;
}

export class FindDrawlotsResDto implements ListResponse<FindDrawlotResDto> {
    list: FindDrawlotResDto[];
    count: number;
}

export class FindDrawlotResDto {
    id: string;
    title: string;
    maxLotsCnt: number;
    luckCnt: number;
    luckIdxs: number[];
    triedUsers: string[];
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
