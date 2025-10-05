import { ApiProperty } from '@nestjs/swagger';

export class BaseResponse {
  @ApiProperty()
  ok: boolean;

  @ApiProperty({ required: false })
  error?: string;
}
