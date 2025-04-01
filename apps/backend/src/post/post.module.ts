import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PrismaModule } from '../lib/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {

}