import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <span>
      <button (click)="decrease()">-</button>
      {{counterValue}}
      <button (click)="increase()">+</button>
    </span>
  `,
  styles: ['span {float: right; border: 2px solid red; padding: 20px;}']
  
})
export class CounterComponent implements OnInit {
   @Input('counter') counterValue=0;
   @Output() counterChange=new EventEmitter();
  constructor() { 
    this.counterValue=0;
  }

  increase(){
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
    return false;
  }

  decrease(){
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
    return false;
  }

  ngOnInit() {
  }

}
