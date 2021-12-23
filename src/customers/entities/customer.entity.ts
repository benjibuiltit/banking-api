import { ApiProperty } from '@nestjs/swagger';

export class Customer {
  @ApiProperty({
    description: 'The unique customer ID.',
  })
  id: string;

  @ApiProperty({
    description: "The customer's name.",
  })
  name: string;

  @ApiProperty({
    description: 'ISO 8601 formatted customer creation date.',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'ISO 8601 formatted customer updated date.',
  })
  updatedAt: Date;
}
