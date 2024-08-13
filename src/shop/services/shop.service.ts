import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { updateProductDto } from '../dtos/update-product.dto';
import { Product } from '../entities/product.entity';

@Injectable()
export class ShopService {
  private readonly logger = new Logger(ShopService.name);
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async fetchproducts() {
    return await this.productRepository.find();
  }

  async fetchOneProduct(id: number) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product not found with id ${id}`);
    }
    return product;
  }

  async createProduct(
    name: string,
    description: string,
    category:string,
    sku: string,
    origin: string,
    benefits: string,
    uses: string,
    ingredients: string,
    safetyInformation: string,
    video1: string,
    video2: string,
    price: number,
    discountprice:number,
    imageUrl: string[],
    bannerUrl: string,
  ): Promise<Product> {
    const product = this.productRepository.create({
      name,
      description,
      category,
      sku,
      origin,
      benefits,
      uses,
      ingredients,
      safetyInformation,
      video1,
      video2,
      price,
      discountprice,
      imageUrl,
      bannerUrl,
    });

    return await this.productRepository.save(product);
  }

  async updateProduct(id: number, updateData: Partial<Product>) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    Object.assign(product, updateData);
    this.logger.log(`Updating product: ${JSON.stringify(product)}`);
    return this.productRepository.save(product);
  }

  async deleteProduct(id: number) {
    // Find the product to ensure it exists
    const product = await this.fetchOneProduct(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    // Perform the deletion by specifying the exact ID
    const deleteResult = await this.productRepository.delete(id);

    // Check if the deletion was successful
    if (deleteResult.affected === 0) {
      throw new NotFoundException('Product not found in db');
    }

    return { message: 'Product deleted successfully' };
  }
}
