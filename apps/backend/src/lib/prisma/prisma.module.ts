import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()  // 전역 모듈 선언
@Module({
    providers: [PrismaService],
    exports: [PrismaService]
})
export class PrismaModule {}
