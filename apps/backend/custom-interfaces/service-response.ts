import { ApiProperty } from '@nestjs/swagger';

export class ServiceResponse<T> {
  @ApiProperty()
  ok: boolean;

  @ApiProperty({ required: false })
  error?: string;

  data?: T;
}
