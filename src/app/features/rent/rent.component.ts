import { Component, OnInit } from '@angular/core';
import {IMemberModel} from "../../shared/model/member.model";
import {IBookModel} from "../../shared/model/book.model";
import {MemberLoginService} from "../../shared/service/member-login.service";
import {BookRegisterService} from "../../shared/service/book-register.service";
import {RentService} from "../../shared/http-service/rent.service";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {
  loggedMember?: IMemberModel;
  registeredBook?: IBookModel;
  deliveryDate?: Date;

  constructor(
    private memberLoginService: MemberLoginService,
    private bookRegisterService: BookRegisterService,
    private rentService: RentService
  ) { }

  ngOnInit(): void {
    this.loggedMember = this.memberLoginService.getLoggedMember();
    this.registeredBook = this.bookRegisterService.getRegisteredBook();
  }

  rent() {
    if (this.loggedMember?.id && this.registeredBook?.id && this.deliveryDate){
      this.rentService.rent(this.loggedMember.id, this.registeredBook.id, this.deliveryDate)
        .subscribe((res: HttpResponse<void>) => {
          if (res.ok) {
            alert("kiralama yapıldı.");
          }
      });
    }
  }
}
