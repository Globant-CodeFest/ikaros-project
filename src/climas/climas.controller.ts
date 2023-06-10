import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Controller('climas')
export class ClimasController {

constructor(@InjectModel('Climas') private readonly climasModel: Model<any>) {}

    @Get()
    async findAll(): Promise<any[]> {
      return this.climasModel.find().exec();
    }

}
