import {Component, OnInit} from '@angular/core';
import {IBookModel} from "../../shared/model/book.model";
import {BookService} from "../../shared/http-service/book.service";
import {HttpResponse} from "@angular/common/http";
import {ICreateBookModel} from "../../shared/model/create-book.model";
import {ActivatedRoute, Router} from '@angular/router';
import {IMemberModel} from "../../shared/model/member.model";

@Component({
  selector: 'app-books',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books: IBookModel[] = [];
  newBook: ICreateBookModel = {title: '', author: '', bookType: ''};
  memberId: number | undefined;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['memberId']) {
        this.memberId = +params['memberId'];
      }
    });

    this.bookService.getBooks().subscribe((res: HttpResponse<IBookModel[]>) => {
      if (res.body) {
        this.books = res.body;
      }
    });
  }

  rentBook(selectedBook: IBookModel) {
    this.router.navigate(['/rent'], {
      queryParams: {
        memberId: this.memberId,
        bookId: selectedBook.id
      }
    });
  }

  deliverBook(selectedBook: IBookModel) {
    this.router.navigate(['/deliver'],{
      queryParams: {
        memberId: this.memberId,
        bookId: selectedBook.id
      }
    });
  }

  addBook(): void {
    if (this.newBook?.title && this.newBook?.author && this.newBook?.bookType) {
      this.bookService.addBook(this.newBook).subscribe((res) => {
        if (res.ok) {
          alert('Kitap başarıyla eklendi..');
        }
      });
    } else {
      alert('Lütfen kitap bilgilerini tam giriniz.');
    }
  }

  deleteBook(bookId: number): void {
    if (confirm('Bu kitabı silmek istediğinizden emin misiniz?')) {
      this.bookService.deleteBook(bookId).subscribe(res => {
          if (res.ok) {
            this.books = this.books.filter(book => book.id !== bookId);
            alert('Kitap başarıyla silindi');
          }
        }, error => {
          if (error){
            alert('Kitap silinemedi.');
          }
      });
    }
  }

  updateBook(bookId: number): void {
    this.router.navigate(['/books/' + bookId + '/update']);
  }
}

