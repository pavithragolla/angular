import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService) {
    // console.log({ constructor: 'const' });
    // this.booksService = new BooksService();
  }
  // cart: Book[] = [];

  // isDisabled: boolean = false;
  isShowing: boolean = true;

  ngOnInit(): void {
    // console.log({ onInIt: 'sdfjk' });
    this.books = this.booksService.getBooks();
  }

  // handleClick() {
  //   this.isDisabled = true;
  //   // alert('hi');
  // }
  // myName: string = '';
  // handleInput(event: any) {
  //   // alert('hi');
  //   // console.log(event);
  //   this.myName = event.target.value;
  // }
  // toggleBooks() {
  //   this.isShowing = !this.isShowing;
  // }
}
