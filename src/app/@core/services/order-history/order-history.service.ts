import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MainResponse } from '../../models/mainResponse.model';
import { OrderHistoryModel } from '../../models/order-history.model';
import { AuthenticationService } from '../auth-service/authentication.service';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  endpoint: string;
  constructor(protected http: HttpClient) {
  }

  public ordersHistory$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  getOrdersHistory(): Observable<OrderHistoryModel[]> {
    this.endpoint = 'Recipt/customer/list';

    return this.http.get<MainResponse<OrderHistoryModel[]>>(`${environment.apiUrl}/${this.endpoint}`)
      .pipe(map((data: MainResponse<OrderHistoryModel[]>) => {
        return data.data;
      }))
  }
}
