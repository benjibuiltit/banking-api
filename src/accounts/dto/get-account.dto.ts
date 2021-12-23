import { IsNotEmpty, IsUUID } from 'class-validator';

export class GetAccountParams {
  @IsUUID()
  @IsNotEmpty()
  accountId: string;
}
