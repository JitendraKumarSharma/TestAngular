import { Component, OnInit, ContentChild, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { BookDirective } from '../book.directive';

@Component({
  selector: 'app-writer',
  // templateUrl: './writer.component.html',
  template: ` Name: {{writerName}}	<br/>Latest Book: {{book?.bookId}} - {{book?.bookName}} `,
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ContentChildren(BookDirective) books: QueryList<BookDirective>

  ngAfterContentInit() {
    this.books.forEach(booksInstance => console.log(booksInstance))
  }


  @ContentChild(BookDirective) book: BookDirective;
  writerName = 'Mahesh';

}
