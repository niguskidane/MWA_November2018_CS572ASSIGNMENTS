import { Directive, HostListener, ElementRef} from '@angular/core';


@Directive({
  selector: '[appLoggable]'
})
export class LoggableDirective {
  
  constructor(private el: ElementRef) { }
  @HostListener('click') onClick() {
    console.log("Div Element has been clicked.");
  }
}
