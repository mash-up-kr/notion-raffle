import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import {
    CreateDrawlotReqDto,
    FindDrawlotResDto,
    FindDrawlotsResDto,
    TryDrawlotReqDto,
    TryDrawlotResultDto,
} from './drawlot.dto';
import { DrawlotService } from './drawlot.service';
import { ExposeOption, FLimit, FSort } from '../types/find-options';

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
    ): Promise<FindDrawlotResDto> {
        const drawlot = await this.drawlotService.findDrawlotByUuid(id);
        return FindDrawlotResDto.from(drawlot);
    }

    @Get(':uuid/drawlot')
    async get(
        @Param('uuid') uuid: string,
        @Query('sort') sort: ExposeOption<FSort> = 'dsc',
        @Query('limit') limit: ExposeOption<FLimit> = 10,
    ): Promise<FindDrawlotsResDto> {
        const options = { sort, limit };
        const drawlots = await this.drawlotService.findDrawlotsByUuid(uuid, options);
        return FindDrawlotsResDto.from(drawlots);
    }

    @Post(':uuid/drawlot/:id/try')
    async tryDrawlot(
        @Param('uuid') uuid: string,
        @Param('id') id: string,
        @Body() tryDrawlotReqDto: TryDrawlotReqDto,
    ): Promise<TryDrawlotResultDto> {
        return await this.drawlotService.tryDrawlot(id, tryDrawlotReqDto.user);
    }
}
