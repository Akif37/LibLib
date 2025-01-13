import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RentService {
    private apiUrl = 'api/v1/rent';

    constructor(private http: HttpClient) {}

    rent(memberId: number, bookId: number, deliveryDate: Date): Observable<HttpResponse<void>> {
        const requestBody = { memberId, bookId, deliveryDate };
        return this.http.post<void>(this.apiUrl, requestBody, { observe: 'response' });
    }
}
