import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthModel } from '../../models/auth.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MainResponse } from '../../models/mainResponse.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../../../shared/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  endpoint: string;
  private currentUserSubject: BehaviorSubject<MainResponse<AuthModel>>;
  public currentUser: Observable<MainResponse<AuthModel>>;

  constructor(protected http: HttpClient,
    private router: Router,
    private toaster: ToastrService,
    private notificationService: NotificationService) {
    this.currentUserSubject = new BehaviorSubject<MainResponse<AuthModel>>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): MainResponse<AuthModel> {
    return this.currentUserSubject.value;
  }
  public login(model: MainResponse<AuthModel>): Observable<MainResponse<AuthModel>> {

    let headers = new HttpHeaders({
      'lang': 'en'
    });
    let options = { headers: headers };

    const body = {
      app_version: '1.0.0',
      os: 'android',
      model: 'android',
      device_type: 'huawei',
      hms: 'yu5'
    };

    let full_model = { ...model, ...body }
    this.endpoint = 'Customer/login';

    return this.http.post<MainResponse<AuthModel>>(`${environment.apiUrl}/${this.endpoint}`, full_model, options)
      .pipe(map((user: MainResponse<AuthModel>) => {
        if (user.status == 'success') {
          this.notificationService.showSuccess("Welcome");
          localStorage.setItem('token', user.data.jwt);
          localStorage.setItem('currentUser', JSON.stringify(user.data));
          this.currentUserSubject.next(user.data);
          return user;
        }
        else {
          this.toaster.error(user.status)
        }
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    this.router.navigate(['/login']);
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
