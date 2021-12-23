import { ApiProperty } from '@nestjs/swagger';

export class Account {
  @ApiProperty({
    description: 'The unique account ID.',
  })
  id: string;

  @ApiProperty({
    description: 'Customer defined name for the account.',
  })
  name: string | null;

  @ApiProperty({
    description: 'The account balance.',
  })
  balance: number;

  @ApiProperty({
    description: 'The customer ID of the account holder.',
  })
  customerId: string;

  @ApiProperty({
    description: 'ISO 8601 formatted account creation date.',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'ISO 8601 formatted account updated date.',
  })
  updatedAt: Date;
}
