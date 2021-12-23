import { Controller, Post, Body } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AccountsService } from './accounts.service';
import { CreateAccountRequest } from './dto/create-account.dto';
import { Account } from './entities/account.entity';

@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @ApiCreatedResponse({ type: Account })
  @ApiBadRequestResponse()
  @ApiInternalServerErrorResponse()
  @Post()
  create(@Body() createAccountDto: CreateAccountRequest): Promise<Account> {
    return this.accountsService.create(createAccountDto);
  }
}
