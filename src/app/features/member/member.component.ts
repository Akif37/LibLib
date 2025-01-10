import { Component, OnInit,EventEmitter, Output  } from '@angular/core';
import {MemberService} from "../../shared/http-service/member.service";
import {HttpResponse} from "@angular/common/http";
import {IMemberModel} from "../../shared/model/member.model";
import {Router} from "@angular/router";
import {MemberLoginService} from "../../shared/service/member-login.service";

@Component({
  selector: 'app-members',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  members: IMemberModel[] = [];

  constructor(
    private memberService: MemberService,
    private memberLoginService: MemberLoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.memberService.getMembers().subscribe((res: HttpResponse<IMemberModel[]>) => {
      if (res.body) {
        this.members = res.body;
      }
    });

  }
  selectMember(selectedMember: IMemberModel) {
    this.memberLoginService.login(selectedMember);
    this.router.navigate(['/books'],  );
  }
}
