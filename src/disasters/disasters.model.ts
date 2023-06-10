import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Disasters extends Document {
@Prop()
Year:number;
@Prop()
Seq: number;
@Prop()
DisasterGroup: string;
@Prop()
DisasterSubGroup:string;
@Prop()
DisasterType:string;
@Prop()
DisasterSubType:string;
@Prop()
Country:string;
@Prop()
ISO:string;
@Prop()
Region:string;
@Prop()
Continent:string;
@Prop()
Location:string;
@Prop()
AssociatedDis:string;
@Prop()
Appel:string;
@Prop()
Declaration:string;
@Prop()
DisMagScale:string;
@Prop()
StartYear:number;
@Prop()
EndYear:number;
@Prop()
TotalDeaths:number;
@Prop()
CPI:number;
}

export const DisastersSchema = SchemaFactory.createForClass(Disasters);