import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  endpoint: string;

  constructor(private http: HttpClient) { }

  public addToCart(data): Observable<any> {
    const type = 'note';
    let full_model = { ...data, type };
    this.endpoint = 'ShoppingCart/add';
    return this.http
      .post(
        `${environment.apiUrl}/${this.endpoint}`,
        full_model
      )
  }

  public getCartItems(): Observable<any> {
    this.endpoint = 'ShoppingCart/list';
    return this.http.get(`${environment.apiUrl}/${this.endpoint}`)
  }
}
