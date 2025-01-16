import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {IBookModel} from "../model/book.model";
import {INewBookModel} from "../model/newbook.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private resourceUri = 'api/v1/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<HttpResponse<IBookModel[]>> {
    return this.http.get<IBookModel[]>(`${this.resourceUri}`, { observe: 'response' });
  }

  addBook(book: INewBookModel): Observable<HttpResponse<IBookModel>> {
    return this.http.post<IBookModel>(`${this.resourceUri}`, book, { observe: 'response' });
  }

  deleteBook(bookId: number): Observable<HttpResponse<void>> {
    return this.http.delete<void>(`${this.resourceUri}/${bookId}`, { observe: 'response' });
  }
}
