import { Component, OnInit } from '@angular/core';
import {IMemberModel} from "../../shared/model/member.model";
import {IBookModel} from "../../shared/model/book.model";
import {MemberLoginService} from "../../shared/service/member-login.service";
import {BookRegisterService} from "../../shared/service/book-register.service";
import {DeliverService} from "../../shared/http-service/deliver.service";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-rent',
  templateUrl: './deliver.component.html',
  styleUrls: ['./deliver.component.scss']
})
export class DeliverComponent implements OnInit {
  loggedMember: IMemberModel | undefined;
  registeredBook: IBookModel | undefined;
  deliveryDate: Date = new Date();

  constructor(
    private memberLoginService: MemberLoginService,
    private bookRegisterService: BookRegisterService,
    private deliverService : DeliverService
  ) { }

  ngOnInit(): void {
    this.loggedMember = this.memberLoginService.getLoggedMember();
    this.registeredBook = this.bookRegisterService.getRegisteredBook();
  }

  deliver() {
    if (this.loggedMember?.id && this.registeredBook?.id){
      this.deliverService.deliver(this.loggedMember.id, this.registeredBook.id)
        .subscribe((res: HttpResponse<number>) => {
          if (res.body) {
            if (res.body === 0){
              alert("Başarıyla Teslim Edildi");
            } else {
              alert(res.body + " gün cezalısınız.");
            }
          }
        });
    }

  }
}
