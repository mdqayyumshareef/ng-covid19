import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'intlNum'})
export class InternationalNumberPipe implements PipeTransform {
    transform(value: number): string {
        return String(value).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }
}