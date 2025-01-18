import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {IBookModel} from "../model/book.model";
import {ICreateBookModel} from "../model/create-book.model";
import {IUpdateBookModel} from "../model/update-book.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private resourceUri = 'api/v1/books';

  constructor(private http: HttpClient) { }

  getBook(id: number): Observable<HttpResponse<IBookModel>> {
    return this.http.get<IBookModel>(`${this.resourceUri}/${id}`, { observe: 'response' });
  }

  getBooks(): Observable<HttpResponse<IBookModel[]>> {
    return this.http.get<IBookModel[]>(`${this.resourceUri}`, { observe: 'response' });
  }

  addBook(book: ICreateBookModel): Observable<HttpResponse<IBookModel>> {
    return this.http.post<IBookModel>(`${this.resourceUri}`, book, { observe: 'response' });
  }

  deleteBook(bookId: number): Observable<HttpResponse<void>> {
    return this.http.delete<void>(`${this.resourceUri}/${bookId}`, { observe: 'response' });
  }

  updateBook(bookId: number, updatedBook: IUpdateBookModel): Observable<HttpResponse<IUpdateBookModel>> {
    return this.http.put<IUpdateBookModel>(`${this.resourceUri}/${bookId}`, updatedBook, { observe: 'response' });
  }

}
