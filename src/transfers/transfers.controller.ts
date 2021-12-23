import { Controller, Post, Body } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { CreateTransferRequest } from './dto/create-transfer.dto';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Transfer } from './entities/transfer.entity';

@ApiTags('transfers')
@Controller('transfers')
export class TransfersController {
  constructor(private readonly transfersService: TransfersService) {}

  @ApiCreatedResponse({ type: Transfer })
  @ApiConflictResponse()
  @ApiNotFoundResponse()
  @Post()
  create(@Body() createTransferDto: CreateTransferRequest) {
    return this.transfersService.create(createTransferDto);
  }
}
