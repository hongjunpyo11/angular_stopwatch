import { Component, Input, SimpleChanges } from '@angular/core';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
  providers: [
    // PageToggleService
  ]
})
export class TimeDisplayComponent {

  @Input() inputData?: string;

  min: number = 0
  sec: number = 0
  ms: number = 0

  timeInterval: any;

  constructor(
    public pageToggleService: PageToggleService
  ) {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ng on changes');
    for (let propName in changes) {
      console.log(changes);
    }
  }

  ngOnInit() {
    console.log('ng on init');
  }

  ngDoCheck() {
    console.log('ng do Check');
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

  ngOnDestroy() {
    console.log('destroy!');
  }

  timeStart() {
    this.timeStop();
    this.timeInterval = setInterval(() => {
      if (this.ms >= 100) {
        this.ms = 0;
        this.sec++;
      }

      if (this.sec >= 60) {
        this.sec = 0;
        this.min++;
      }
      this.ms++
    }, 10)
  }

  timeStop() {
    clearInterval(this.timeInterval)
  }

  timeReset() {
    this.timeStop();
    this.ms = 0;
    this.sec = 0;
    this.min = 0;
  }

  // ngOnChanges(changes: SimpleChanges) {

  //   console.log(changes);
  //   for (let propName in changes) {
  //     console.log(propName);
  //     if (propName == 'inputData') {

  //       switch (changes[propName].currentValue) {
  //         case 'start':
  //           this.timeStart();
  //           break;
  //         case 'stop':
  //           this.timeStop();
  //           break;
  //         case 'reset':
  //           this.timeReset();
  //           break;
  //       }
  //     }
  //   }
  // }


}
