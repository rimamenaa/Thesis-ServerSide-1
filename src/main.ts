import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  const PORT = process.env.PORT || 3000
  console.log(`Hey server is running on ${PORT} , deployment succeeded`)
  await app.listen(PORT);
}
bootstrap();
