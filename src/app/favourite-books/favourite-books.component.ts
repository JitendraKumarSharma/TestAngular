import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { BookDirective } from '../book.directive';

@Component({
  selector: 'app-favourite-books',
  //templateUrl: './favourite-books.component.html',
  template: `
        <b>Top Favourite Books</b>
	<ng-template ngFor let-book [ngForOf]= "topBooks">
	   <br/>{{book.bookId}} - {{book.bookName}}
	</ng-template>
		
	<br/><b>All Favorite Books</b>
	<ng-template ngFor let-book [ngForOf]= "allBooks">
	   <br/>{{book.bookId}} - {{book.bookName}}
	</ng-template>	
  `,
  styleUrls: ['./favourite-books.component.css']
})
export class FavouriteBooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ContentChildren(BookDirective) topBooks: QueryList<BookDirective>

  // descendants : This is Boolean value. When it is true then direct children and other 
  // descendants will also be included. If the value is false then only direct 
  // children will be included. descendants is used as follows.
  @ContentChildren(BookDirective, { descendants: true }) allBooks: QueryList<BookDirective>
}
