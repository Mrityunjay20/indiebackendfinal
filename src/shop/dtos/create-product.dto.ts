import { IsArray, IsDecimal, IsEmail, IsNumber, IsString, IsUrl } from "class-validator";


export class createProductDto{
    @IsString()
    name:string;

    @IsString()
    description:string;

    @IsString()
    category:string;

    @IsString()
    sku:string;

    @IsString()
    origin:string;
  
    @IsString()
    benefits:string;
  
    @IsString()
    uses:string;
  
    @IsString()
    ingredients:string;
  
    @IsString()
    safetyInformation:string;
  
    @IsString()
    video1:string;
  
    @IsString()
    video2:string;

    @IsNumber()
    price:number;

    @IsNumber()
    discountprice:number;

    @IsArray()
    @IsString({ each: true })
    @IsUrl({}, { each: true })  // Optional: To validate each string as a valid URL
    imageUrl: string[];

    @IsString()
    bannerUrl:string;
}