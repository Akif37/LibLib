import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {IMemberModel} from "../model/member.model";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private resourceUri = 'api/v1/members';

  constructor(private http: HttpClient) { }

  getMembers(): Observable<HttpResponse<IMemberModel[]>> {
    return this.http.get<IMemberModel[]>(`${this.resourceUri}`, { observe: 'response' });
  }

  getMember(memberId: number): Observable<HttpResponse<IMemberModel>> {
    return this.http.get<IMemberModel>(`${this.resourceUri}/${memberId}`, { observe: 'response' });
  }

}
