import { Router } from '@angular/router';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class BreadcrumbsComponent implements OnInit {
  @Input() public segments: string[];
  @Input() public bg: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void { }
}
