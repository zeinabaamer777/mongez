import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AddressModel } from '../../models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  endpoint: string;

  constructor(private http: HttpClient) { }

  public addAddress(data: AddressModel): Observable<AddressModel> {
    this.endpoint = 'CustomerAddress/add';
    return this.http.post<AddressModel>(
      `${environment.apiUrl}/${this.endpoint}`,
      data
    );
  }
}
