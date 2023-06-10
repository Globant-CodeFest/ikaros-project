import { Module } from '@nestjs/common';
import { ClimasController } from './climas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Climas, ClimasSchema } from './climas.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Climas.name, schema: ClimasSchema }]),
  ],
  controllers: [ClimasController],
})
export class ClimasModule {}
