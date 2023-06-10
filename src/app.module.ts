import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClimasModule } from './climas/climas.module';
import { DisastersModule} from './disasters/disasters.module';
import { DisastersController } from './disasters/disasters.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/Ikaros-clima', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    DisastersModule,
  ],
})
export class AppModule {}
