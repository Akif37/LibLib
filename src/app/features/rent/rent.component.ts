import { Component, OnInit } from '@angular/core';
import {IMemberModel} from "../../shared/model/member.model";
import {IBookModel} from "../../shared/model/book.model";
import {MemberLoginService} from "../../shared/service/member-login.service";
import {BookRegisterService} from "../../shared/service/book-register.service";

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {
  loggedMember: IMemberModel | undefined;
  registeredBook: IBookModel | undefined;

  constructor(
    private memberLoginService: MemberLoginService,
    private bookRegisterService: BookRegisterService
  ) { }

  ngOnInit(): void {
    this.loggedMember = this.memberLoginService.getLoggedMember();
    this.registeredBook = this.bookRegisterService.getRegisteredBook();
  }

}
