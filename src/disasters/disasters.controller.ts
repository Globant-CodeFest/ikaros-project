import { Controller,Get,Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Disasters } from './disasters.model';

@Controller('disasters')
export class DisastersController {

    constructor(@InjectModel('Disasters') private readonly disastersModel: Model<any>) {}

    @Get("/findAll")
    async findAll(): Promise<any[]> {
      return this.disastersModel.find().exec();
    }

    @Get('country/:country')
    async findByCountry(@Param('country') country: string): Promise<Disasters[]> {

        console.log(country);
        return this.disastersModel.find({ Country: country }).exec();
    }


    @Get('typeDisaster/:typeDisaster')
    async findByTypeDisaster(
        @Param('typeDisaster') typeDisaster: string,
    ): Promise<Disasters[]> {
        console.log(typeDisaster);
        return this.disastersModel.find({ "Disaster Type":typeDisaster }).exec();
    }

    @Get('year/:year')
    async findByYear(
        @Param('year') year: number
    ): Promise<Disasters[]> {
        console.log(year)
        return this.disastersModel.find({ "Year": year }).exec();
    }


    @Get('country/:country/year/:year')
    async findByCountryAndYear(
        @Param('country') country: string,
        @Param('year') year: number
    ): Promise<Disasters[]> {

        console.log(country);
        console.log(year)
        return this.disastersModel.find({ "Country": country , 
                                          "Year": year
                                        }).exec();
    }


    @Get('country/:country/typeDisaster/:typeDisaster')
    async findByCountryAndTypeDisaster(
        @Param('country') country: string,
        @Param('typeDisaster') typeDisaster: string,
    ): Promise<Disasters[]> {

        console.log(country);
        console.log(typeDisaster);
        return this.disastersModel.find({ "Country": country , 
                                          "Disaster Type":typeDisaster,
                                        }).exec();
    }


    @Get('country/:country/typeDisaster/:typeDisaster/year/:year')
    async findByCountryAndTypeDisasterAndYear(
        @Param('country') country: string,
        @Param('typeDisaster') typeDisaster: string,
        @Param('year') year: number
    ): Promise<Disasters[]> {

        console.log(country);
        console.log(typeDisaster);
        console.log(year)
        return this.disastersModel.find({ "Country": country , 
                                          "Disaster Type":typeDisaster,
                                          "Year": year
                                        }).exec();
    }

}

