import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'appBook'
})
export class BookDirective {

  constructor() { }

  @Input() bookId: string;
  @Input() bookName: string;
}
