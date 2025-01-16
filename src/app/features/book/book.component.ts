import {Component, OnInit} from '@angular/core';
import {IBookModel} from "../../shared/model/book.model";
import {Router} from "@angular/router";
import {BookService} from "../../shared/http-service/book.service";
import {HttpResponse} from "@angular/common/http";
import {BookRegisterService} from "../../shared/service/book-register.service";
import {IMemberModel} from "../../shared/model/member.model";
import {MemberLoginService} from "../../shared/service/member-login.service";
import {INewBookModel} from "../../shared/model/newbook.model";

@Component({
  selector: 'app-books',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books: IBookModel[] = [];
  loggedMember: IMemberModel | undefined;
  newBook: INewBookModel = {title: '', author: '', bookType: ''};

  constructor(
    private bookService: BookService,
    private bookRegisterService: BookRegisterService,
    private memberLoginService: MemberLoginService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loggedMember = this.memberLoginService.getLoggedMember();
    this.bookService.getBooks().subscribe((res: HttpResponse<IBookModel[]>) => {
      if (res.body) {
        this.books = res.body;
      }
    });
  }

  rentBook(selectedBook: IBookModel) {
    this.bookRegisterService.register(selectedBook);
    this.router.navigate(['/rent'],);
  }

  deliverBook(selectedBook: IBookModel) {
    this.bookRegisterService.register(selectedBook);
    this.router.navigate(['/deliver'],);
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
}

