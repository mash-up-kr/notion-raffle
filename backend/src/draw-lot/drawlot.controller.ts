import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('api')
export class DrawLotController {
    // constructor() {}

    @Post(':uuid/drawlot')
    createDrawlot(@Param('uid') uid: string, @Body() createDrawlotDto: any) {
        // TODO: createDrawlotDto 만들기
        // TODO: 제비뽑기 생성
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
