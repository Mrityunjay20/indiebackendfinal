import { IsArray, IsDecimal, IsNumber, IsOptional, isString, IsString } from 'class-validator';

export class updateProductDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsNumber()
  id:number;

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

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDecimal()
  price?: number;

  @IsOptional()
  @IsDecimal()
  discountprice?: number;

  @IsOptional()
  @IsArray()
  imageUrl?: string[];

  @IsOptional()
  @IsString()
  bannerUrl?: string;
}
