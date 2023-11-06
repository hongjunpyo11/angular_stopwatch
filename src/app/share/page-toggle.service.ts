import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SectionModule } from '../section/section.module';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class PageToggleService {

  routingCount = 0;

  constructor(
    private router: Router
  ) { }

  plusCount() {
    this.routingCount++;
  }

  goPage(target: any) {
    this.routingCount++;
    this.router.navigateByUrl(target)
  }
}
