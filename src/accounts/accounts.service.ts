import { Injectable } from '@nestjs/common';
import { CreateAccountRequestDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountsService {
  create(createAccountDto: CreateAccountRequestDto) {
    // Execute nested write to create an account, and
    // a deposit.
    return createAccountDto;
  }

  findAll() {
    return `This action returns all accounts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
