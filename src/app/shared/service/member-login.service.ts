import { Injectable } from '@angular/core';
import {IMemberModel} from "../model/member.model";

@Injectable({
  providedIn: 'root'
})
export class MemberLoginService {

  loggedMember: IMemberModel | undefined;

  constructor() { }

  login(selectedMember: IMemberModel)  {
    this.loggedMember = selectedMember
  }

  getLoggedMember(): IMemberModel{
    return <IMemberModel>this.loggedMember;
  }
}
