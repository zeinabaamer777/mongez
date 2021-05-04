import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  endpoint: string;
  constructor(private http: HttpClient) { }
  //

  public checkout(data): Observable<any> {
    const estimation_id = 1;
    let full_model = { ...data, estimation_id };
    this.endpoint = 'Recipt/checkout';
    return this.http
      .post(
        `${environment.apiUrl}/${this.endpoint}`,
        full_model
      )
  }
}


