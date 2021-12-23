import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountRequest } from './create-account.dto';

export class UpdateAccountDto extends PartialType(CreateAccountRequest) {}
