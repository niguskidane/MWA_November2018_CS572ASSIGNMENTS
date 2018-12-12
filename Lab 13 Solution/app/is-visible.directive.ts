import {  Directive, ElementRef, Input, SimpleChanges, HostListener } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective  {
@Input() showMe : boolean;

  constructor(private element: ElementRef) { }
  
  OnInit(){
    this.displayElement(this.showMe);
  }

  displayElement(show: boolean){
    if(show){
      this.element.nativeElement.style.displayElement='block';
    }else{
      this.element.nativeElement.style.displayElement='none';
    }
  }

  OnChanges(changes: SimpleChanges){
    this.displayElement(changes.showMe.currentValue);
  }

}
