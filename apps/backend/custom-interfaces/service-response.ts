import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { Type } from '@nestjs/common';

export class ServiceResponse<T> {
  @ApiProperty()
  ok: boolean;

  @ApiProperty({ required: false })
  error?: string;

  data?: T;
}

export const ApiServiceResponse = <TModel extends Type<any>>(
  model: TModel,
  isArray = false,
) => {
  return {
    schema: {
      allOf: [
        { $ref: getSchemaPath(ServiceResponse) },
        {
          properties: {
            data: isArray
              ? { type: 'array', items: { $ref: getSchemaPath(model) } }
              : { $ref: getSchemaPath(model) },
          },
        },
      ],
    },
  };
};
