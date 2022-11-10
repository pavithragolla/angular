import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'Clean Code',
        author: 'Robert C Martin',
        image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg',
        amount: 700,
      },
      {
        name: 'Pragmatic Programmer',
        author: 'David Thomas',
        image:
          'https://m.media-amazon.com/images/I/51yaxPX4BFL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount: 1000,
      },
      {
        name: 'Clean Code',
        author: 'Robert C Martin',
        image: 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg',
        amount: 700,
      },
      {
        name: 'Pragmatic Programmer',
        author: 'David Thomas',
        image:
          'https://m.media-amazon.com/images/I/51yaxPX4BFL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount: 1000,
      },
    ];
  }
}
