import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
  <input [value]="counter" (keyup)="counter=$event.target.value"/>
  <app-counter [counter]="counter" (counterChange)=onCounter($event)></app-counter>
  Component counter value = {{counter}}
</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prob';
  counter: number = 4;

  onCounter(event) {
    this.counter = event;
  }
}
