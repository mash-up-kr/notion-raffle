import { Module } from '@nestjs/common';
import { DrawlotController } from './drawlot.controller';
import { Drawlot, DrawlotSchema } from './drawlot.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { DrawlotService } from './drawlot.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Drawlot.name, schema: DrawlotSchema }])],
    controllers: [DrawlotController],
    providers: [DrawlotService],
})
export class DrawlotModule {}
