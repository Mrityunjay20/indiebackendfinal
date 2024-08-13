import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { createProductDto } from './dtos/create-product.dto';
import { deleteProductDto } from './dtos/delete-product.dto';
import { updateProductDto } from './dtos/update-product.dto';
import { Product } from './entities/product.entity';
import { ShopService } from './services/shop.service';

@Controller('shop')
export class ShopController {
    constructor(private shopService:ShopService){}

    @Get()
    async allItems(){
        return await this.shopService.fetchproducts();
    }

    @Get(':id')
    async oneItem(@Param('id') id:string){
        return await this.shopService.fetchOneProduct(parseInt(id));
    }

    @Post('/createproduct')
    async createProduct(@Body() body: createProductDto){
        this.shopService.createProduct(
            body.name,
            body.description,
            body.category,
            body.sku,
            body.origin,
            body.benefits,
            body.uses, 
            body.ingredients, 
            body.safetyInformation, 
            body.video1, 
            body.video2 ,
            body.price,
            body.discountprice,
            body.imageUrl,
            body.bannerUrl);
    }

    @Patch('updateproduct')
    async updateProduct(@Body() body: Partial<Product> ) {
        const id = body.id;
        return await this.shopService.updateProduct(id,body);
    }

    @Delete('deleteproduct')
    async deleteProduct(@Body() body:deleteProductDto){
         return await this.shopService.deleteProduct(body.id);
    }
}
