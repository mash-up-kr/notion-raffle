import { Module } from '@nestjs/common';
import { DrawLotController } from './drawlot.controller';

@Module({
    imports: [],
    controllers: [DrawLotController],
    providers: [],
})
export class DrawLotModule {}
