
import {Component, OnInit, Input} from '@angular/core';


@Component({
    selector: 'dump',
    template: `
    <h1>{{title}}</h1>
    <smart [names]="arr"></smart>
   `
})
export class DumpComponent implements OnInit {
    title = "List of names";
    arr: string[] = ["Nigus", "Seli", "Bob"];
    showElement: boolean =false;
    constructor() { }
    ngOnInit() { }
}
