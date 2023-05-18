import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateDrawlotReqDto } from './drawlot.dto';
import { DrawlotService } from './drawlot.service';

@Controller('api')
export class DrawlotController {
    constructor(readonly drawlotService: DrawlotService) {}

    @Post(':uuid/drawlot')
    async createDrawlot(
        @Param('uuid') uuid: string,
        @Body() createDrawlotReqDto: CreateDrawlotReqDto,
    ) {
        return await this.drawlotService.createDrawlot(uuid, createDrawlotReqDto);
    }

    @Get(':uuid/drawlot/:id')
    getDrawlot(@Param('uid') uid: string, @Param('id') id: string) {
        // TODO: 제비뽑기 하나의 정보 가져오기
    }

    @Get(':uuid/drawlot')
    get(@Param('uid') uid: string, @Param('id') id: string) {
        // TODO: 제비뽑기 리스트 가져오기
    }

    @Post(':uuid/drawlot/:id/draw')
    drawDrawlot(@Param('uid') uid: string, @Param('id') id: string) {
        // TODO: 제비뽑기 하나 뽑기
    }
}
