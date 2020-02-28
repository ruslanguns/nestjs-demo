import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata) {
    console.log('[validationPipe] - memetadata.datatadata:', metadata.data);
    console.log('[validationPipe] - metadata.metatype:', metadata.metatype);
    console.log('[validationPipe] - metadata.type:', metadata.type);
    console.log('[validationPipe] - typeof(type):', typeof(metadata.type));
    if (!metadata.metatype || !this.toValidate(metadata.metatype)) {
      console.log('[validationPipe] - value:', value);
      return value;
    }
    const obj = plainToClass(metadata.metatype, value);
    console.log('[validationPipe] - obj:', obj);

    const errs = await validate(obj);
    if (errs.length > 0) {
      console.log('[validationPipe] - errs:', errs);
      if (process.env.NODE_ENV === 'production') {
        throw new BadRequestException('Validation failed!');
      } else {
        throw new Error(`Error: ${errs}`);
      }
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
