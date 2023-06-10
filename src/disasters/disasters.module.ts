import { Module } from '@nestjs/common';
import { DisastersController } from './disasters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Disasters, DisastersSchema } from './disasters.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Disasters.name, schema: DisastersSchema }]),
  ],
  controllers: [DisastersController],
})
export class DisastersModule {}
