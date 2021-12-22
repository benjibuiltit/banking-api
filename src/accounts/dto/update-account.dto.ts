import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountRequestDto } from './create-account.dto';

export class UpdateAccountDto extends PartialType(CreateAccountRequestDto) {}
