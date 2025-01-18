import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IMemberModel} from "../shared/model/member.model";
import {IBookModel} from "../shared/model/book.model";
import {MemberService} from "../shared/http-service/member.service";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'liblib-ui';

  constructor(private router: Router) {}

  ngOnInit() {

  }

  goToMemberPage() {
    this.router.navigate(['/members']);
  }

  goToBookPage() {
    this.router.navigate(['/books']);
  }

  goToRentPage() {
    this.router.navigate(['/rent']);
  }

  goToDeliverPage() {
    this.router.navigate(['/deliver']);
  }
}
