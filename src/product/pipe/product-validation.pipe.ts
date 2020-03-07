import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ProductValidationPipe implements PipeTransform {
  transform(val: any, metadata: ArgumentMetadata) {
    console.log('val:', val);
    console.log('metadata:', metadata);
    return val;
  }

  isValidate(val: any) {
    return val;
  }
}
