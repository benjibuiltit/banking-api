import { Controller, Post, Body } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { CreateCustomerRequest } from './dto/create-customer.dto';
import { Customer } from './entities/customer.entity';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @ApiCreatedResponse({ type: Customer })
  @ApiBadRequestResponse()
  @ApiInternalServerErrorResponse()
  @ApiTags('customers')
  @Post()
  create(@Body() createCustomerDto: CreateCustomerRequest) {
    return this.customersService.create(createCustomerDto);
  }
}
