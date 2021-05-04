import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.scss']
})
export class UserAddressComponent implements OnInit {

  constructor(private readonly router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  public addNewAddress(): void {
    this.router.navigate(['add'], { relativeTo: this.route });
  }
}
