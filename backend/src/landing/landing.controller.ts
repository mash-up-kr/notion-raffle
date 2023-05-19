import { Controller, Get } from '@nestjs/common';
import { getUUId } from '../util/uuid';

@Controller('api')
export class LandingController {
    @Get('uuid')
    getUUid(): string {
        return getUUId();
    }

    @Get('embed-url')
    getEmbedUrl(): string {
        return `https://notion-raffle-fe.vercel.app/embed/${getUUId()}`;
    }
}
