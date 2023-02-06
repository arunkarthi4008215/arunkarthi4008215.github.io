import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'splittexttransform'})
export class SplitText implements PipeTransform {
  transform(value: string): string {
    const splitBy = '/'
    const splittedText = value.split( splitBy );
    // return `${ splittedText[6] }/${ splittedText[7] }/${ splittedText[8] }`;
    return `${ splittedText[3] }/${ splittedText[4] }/${ splittedText[5] }`;
  }
}