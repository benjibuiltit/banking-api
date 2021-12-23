import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AccountsService } from './accounts.service';
import { CreateAccountRequest } from './dto/create-account.dto';
import { Account } from './entities/account.entity';
import { TransfersService } from 'src/transfers/transfers.service';
import { Transfer } from 'src/transfers/entities/transfer.entity';
@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
  constructor(
    private readonly accountsService: AccountsService,
    private readonly transfersService: TransfersService,
  ) {}

  @ApiCreatedResponse({ type: Account })
  @ApiBadRequestResponse()
  @ApiInternalServerErrorResponse()
  @Post()
  create(@Body() createAccountDto: CreateAccountRequest): Promise<Account> {
    return this.accountsService.create(createAccountDto);
  }

  @ApiOkResponse({ type: Account })
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  @ApiInternalServerErrorResponse()
  @Get(':id')
  findById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.accountsService.getAccountById({ accountId: id });
  }

  @ApiOkResponse()
  @Get(':id/transfers')
  getAccountTransfers(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<Transfer[]> {
    return this.transfersService.getByAccountId(id);
  }
}
