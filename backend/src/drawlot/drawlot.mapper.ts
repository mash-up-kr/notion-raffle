import { DrawlotDocument } from './drawlot.schema';
import { FindDrawlotResDto, FindDrawlotsResDto } from '@notion-raffle/dto';

export class DrawlotDtoMapper {
    static toFindDrawlotsResDto(drawlots: DrawlotDocument[]): FindDrawlotsResDto {
        return Object.assign(new FindDrawlotResDto(), {
            list: drawlots.map((drawlot) => this.toFindDrawlotResDto(drawlot)),
            count: drawlots.length,
        });
    }

    static toFindDrawlotResDto(drawlot: DrawlotDocument): FindDrawlotResDto {
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
