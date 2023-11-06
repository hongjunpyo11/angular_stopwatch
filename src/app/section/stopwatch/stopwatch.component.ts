import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  providers: [
    // PageToggleService
  ],
})
export class StopwatchComponent {

  present?: string = 'welcome';

  commandText?: string;

  constructor(
    private router: Router,
    public pageToggleService: PageToggleService
  ) { }

  goClock() {
    this.pageToggleService.goPage('/clock')
  }

  ngAfterContentInit() {
    console.log('ng after content init');
  }

  ngAfterContentChecked() {
    console.log('ng after content checked');
  }

  ngAfterViewInit() {
    console.log('ng after view init');
  }

  ngAfterViewChecked() {
    console.log('ng after view checked');
  }

  startTime($event: string) {

    this.present = $event;



  }

}
