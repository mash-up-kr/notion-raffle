import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateDrawlotReqDto, FindDrawlotRes, FindDrawlotsRes } from './drawlot.dto';
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
    async getDrawlot(
        @Param('uuid') uuid: string,
        @Param('id') id: string,
    ): Promise<FindDrawlotRes> {
        const drawlot = await this.drawlotService.findDrawlotByUuid(id);
        return FindDrawlotRes.from(drawlot);
    }

    @Get(':uuid/drawlot')
    async get(@Param('uuid') uuid: string): Promise<FindDrawlotsRes> {
        const drawlots = await this.drawlotService.findDrawlotsByUuid(uuid);
        return FindDrawlotsRes.from(drawlots);
    }

    @Post(':uuid/drawlot/:id/draw')
    drawDrawlot(@Param('uid') uid: string, @Param('id') id: string) {
        // TODO: 제비뽑기 하나 뽑기
    }
}
