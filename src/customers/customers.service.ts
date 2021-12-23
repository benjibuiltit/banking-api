import { Injectable } from '@nestjs/common';
import { CustomersRepository } from './customers.repo';
import { CreateCustomerRequest } from './dto/create-customer.dto';

@Injectable()
export class CustomersService {
  constructor(private customersRepo: CustomersRepository) {}

  create(createCustomerRequest: CreateCustomerRequest) {
    return this.customersRepo.create(createCustomerRequest);
  }
}
