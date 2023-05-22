export interface CreateLotDto {
  luckCnt: number;
  maxLotsCnt: number;
  uuid: string;
  title: string;
}

export interface TryLot {
  uuid: string;
  id: string;
  user: string;
}
