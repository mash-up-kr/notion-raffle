export class CreateDrawlotReqDto {
    luckCnt: number;
    maxLotsCnt: number;
}

export class FindDrawlotsRes {
    drawlots: FindDrawlotRes[];
}

export class FindDrawlotRes {
    id: string;
    maxLotsCnt: number;
    luckCnt: number;
    luckIdxs: number[];
    triedUsers: string[];
}

export class CreateDrawlotDto {
    uuid: string;
    maxLotsCnt: number;
    luckCnt: number;
    luckIdxs: number[];
    triedUsers: string[];
}
