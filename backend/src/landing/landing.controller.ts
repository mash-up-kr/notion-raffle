import { Controller, Get } from '@nestjs/common';
import { getUUId } from '../util/uuid';

@Controller()
export class LandingController {
    // constructor() {}

    @Get('landing-page')
    routeToLandingPage(): string {
        // TODO: 리액트 랜딩 페이지 반환하도록
        return 'some react build file';
    }

    @Get('uid')
    getUid(): string {
        return getUUId();
    }

    @Get('embed-url')
    getEmbedUrl(): string {
        // TODO: 임베딩 URL + uid로 반환하도록 구현
        return `https://notion-raffle-embeded/${getUUId()}`;
    }
}
