import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { softDeleteExtension } from './prisma.extension';

@Injectable()
export class PrismaService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {

    constructor() {
        super({
            log: ['query', 'info', 'warn', 'error']
        });
        this.$extends(softDeleteExtension);  // 소프트 딜리트 확장
    }

    async onModuleInit() {
        await this.$connect();  // 모듈 초기화 시 연결
    }

    async onModuleDestroy() {
        await this.$disconnect();  // 모듈 종료 시 연결 해제
    }
}
