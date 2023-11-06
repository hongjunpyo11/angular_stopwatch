import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {

  present?: string = 'welcome';

  commandText?: string;

  constructor() { }

  startTime($event: string) {

    this.present = $event;



  }

}
