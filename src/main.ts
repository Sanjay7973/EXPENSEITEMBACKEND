import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.enableCors({
    origin:"http://localhost:3001",
    methods:['GET','POST','DELETE']
  })
  await app.listen(3000);
}
bootstrap();
