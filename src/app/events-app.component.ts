import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'events-app',
  template: `
      <img src="/assets/images/basic-shield.png"/>
      <events-list></events-list>
  `
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
