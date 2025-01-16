import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class DeliverService {
    private apiUrl = 'api/v1/deliver';

    constructor(private http: HttpClient) {}

    deliver(memberId: number, bookId: number): Observable<HttpResponse<number>> {
        const requestBody = { memberId, bookId };
        return this.http.post<number>(this.apiUrl, requestBody, { observe: 'response' });
    }
}
