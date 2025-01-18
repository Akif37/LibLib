import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from "../../../shared/http-service/book.service";
import { HttpResponse } from "@angular/common/http";
import {IBookModel} from "../../../shared/model/book.model";

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss']
})
export class BookUpdateComponent implements OnInit {
  bookId!: number; // Güncellenmek istenen kitabın ID'si
  book: IBookModel = {id:0, title: '', author: '', bookType: '' };

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // URL'den kitabın ID'sini al
    this.bookId = +this.route.snapshot.params['id'];

    // Kitap bilgilerini al ve formu doldur
    this.bookService.getBook(this.bookId).subscribe((res: HttpResponse<IBookModel>) => {
      if(res.body){
        this.book = res.body;
      }
    });
  }

  updateBook(): void {
    if (this.book.title && this.book.author && this.book.bookType) {
      this.bookService.updateBook(this.bookId, this.book).subscribe(
        (res) => {
          if (res.ok) {
            alert('Kitap başarıyla güncellendi.');
            this.router.navigate(['/books']);
          }
        },
        () => {
          alert('Kitap güncellenemedi.');
        }
      );
    } else {
      alert('Lütfen kitap bilgilerini eksiksiz doldurunuz.');
    }
  }
}
