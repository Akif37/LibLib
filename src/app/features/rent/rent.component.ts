import { Component, OnInit } from '@angular/core';
import {RentService} from "../../shared/http-service/rent.service";
import {HttpResponse} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {IMemberModel} from "../../shared/model/member.model";
import {MemberService} from "../../shared/http-service/member.service";
import {IBookModel} from "../../shared/model/book.model";
import {BookService} from "../../shared/http-service/book.service";

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {
  loggedMember: IMemberModel | undefined;
  registeredBook: IBookModel | undefined;
  deliveryDate: Date | undefined;

  constructor(
    private rentService: RentService,
    private route: ActivatedRoute,
    private memberService: MemberService,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
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

  rent() {
    if (this.loggedMember?.id && this.registeredBook?.id && this.deliveryDate){
      this.rentService.rent(this.loggedMember?.id, this.registeredBook?.id, this.deliveryDate)
        .subscribe((res: HttpResponse<void>) => {
          if (res.ok) {
            alert("kiralama yapıldı.");
          }
        });
    }
  }
}
