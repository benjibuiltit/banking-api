import { Controller, Post, Body } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AccountsService } from './accounts.service';
import { CreateAccountRequestDto } from './dto/create-account.dto';

@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @ApiCreatedResponse({ type: CreateAccountRequestDto })
  @ApiBadRequestResponse()
  @ApiInternalServerErrorResponse()
  @Post()
  create(@Body() createAccountDto: CreateAccountRequestDto) {
    return this.accountsService.create(createAccountDto);
  }
}
