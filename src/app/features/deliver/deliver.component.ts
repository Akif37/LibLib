import { Component, OnInit } from '@angular/core';
import {IMemberModel} from "../../shared/model/member.model";
import {IBookModel} from "../../shared/model/book.model";
import {DeliverService} from "../../shared/http-service/deliver.service";
import {HttpResponse} from "@angular/common/http";
import {RentService} from "../../shared/http-service/rent.service";
import {ActivatedRoute} from "@angular/router";
import {MemberService} from "../../shared/http-service/member.service";
import {BookService} from "../../shared/http-service/book.service";

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
    private deliverService : DeliverService,
  private route: ActivatedRoute,
  private memberService: MemberService,
  private bookService: BookService
  ) { }

  ngOnInit(): void {
    // let const var
    // any undefined
    // ! | || ?
    this.route.queryParams.subscribe((params) => {
      if (params['memberId']) {
        this.memberService.getMember(+params['memberId'])
          .subscribe((res: HttpResponse<IMemberModel>) => {
            if (res.body) {
              this.loggedMember = res.body;
            }
          });
      }
      if (params['bookId']) {
        this.bookService.getBook(+params['bookId'])
          .subscribe((res: HttpResponse<IBookModel>) => {
            if (res.body) {
              this.registeredBook = res.body;
            }
          });
      }
    });
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
