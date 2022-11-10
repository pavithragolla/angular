import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;

  isInCart: boolean = false;
  // @Output() bookEmitter = new EventEmitter<Book>();

  // myInterval: any = null;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // this.myInterval = setInterva l(() => {
    //   console.log('hi');
    // }, 1000);
  }
  // ngOnDestroy(): void {
  //   clearInterval(this.myInterval);
  //   console.log({ onDeatroy: 'xfy8' });
  // }
  addToCart() {
    // this.bookEmitter.emit(this.book);
    this.cartService.add(this.book);
    this.isInCart = true;
  }
  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}
