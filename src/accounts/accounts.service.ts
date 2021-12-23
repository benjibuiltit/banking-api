import { Injectable } from '@nestjs/common';
import { AccountsRepository } from './accounts.repo';
import { CreateAccountRequest } from './dto/create-account.dto';
import { GetAccountParams } from './dto/get-account.dto';

@Injectable()
export class AccountsService {
  constructor(private accountsRepo: AccountsRepository) {}

  create(createAccountDto: CreateAccountRequest) {
    return this.accountsRepo.create(createAccountDto);
  }

  getAccountById({ accountId }: GetAccountParams) {
    return this.accountsRepo.getById({ accountId });
  }
}
