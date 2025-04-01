import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaModule } from '../lib/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {

}