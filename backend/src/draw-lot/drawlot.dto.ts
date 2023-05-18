export class CreateDrawlotReqDto {
    luckCnt: number;
    maxLotsCnt: number;
}

export class CreateDrawlotDto {
    uuid: string;
    maxLotsCnt: number;
    luckCnt: number;
    luckIdxs: number[];
    triedUsers: string[];
}
