import { PrismaClient } from '@prisma/client';

export class PrismaClientManager {
    private static instance: PrismaClient;

    static getClient(): PrismaClient {
        if (!PrismaClientManager.instance) {
            PrismaClientManager.instance = new PrismaClient();
        }
        return PrismaClientManager.instance;
    }

    static async shutdown() {
        if (PrismaClientManager.instance) {
            await PrismaClientManager.instance.$disconnect();
            PrismaClientManager.instance = null!;
        }
    }
}
