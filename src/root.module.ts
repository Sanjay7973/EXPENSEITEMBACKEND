import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExpenseModule } from './expense/expense.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({
        isGlobal:true,
        envFilePath:'.local.env'
        // envFilePath:'.prod.env'
      })],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize:configService.get<boolean>('DB_SYNC'),
      }),
      inject: [ConfigService],
    }),
    ExpenseModule,
    
    
  ],
  controllers: [],
  providers: [],
})
export class RootModule {}
  

