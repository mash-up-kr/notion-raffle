import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DrawlotDocument = HydratedDocument<Drawlot>;
@Schema()
export class Drawlot {
    @Prop()
    title: string;

    @Prop()
    uuid: string;

    @Prop()
    maxLotsCnt: number;

    @Prop()
    luckCnt: number;

    @Prop([Number])
    luckIdxs: number[];

    @Prop([String])
    triedUsers: string[];
}
export const DrawlotSchema = SchemaFactory.createForClass(Drawlot);
