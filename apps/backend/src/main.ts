import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}

bootstrap()
  .then(() => {
    console.log('Bootstrap completed');
  })
  .catch((error) => {
    console.error('Error during bootstrap:', error);
  });
