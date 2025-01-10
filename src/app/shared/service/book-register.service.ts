import { Injectable } from '@angular/core';
import{IBookModel} from "../model/book.model";
import {IMemberModel} from "../model/member.model";

@Injectable({
    providedIn: 'root'
})
export class BookRegisterService {

    registeredBook: IBookModel | undefined;

    constructor() { }

    register(selectedBook: IBookModel)  {
        this.registeredBook = selectedBook
    }
  getRegisteredBook(): IBookModel{
    return <IBookModel>this.registeredBook;
  }

}
