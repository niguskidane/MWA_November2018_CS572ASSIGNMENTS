import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'smart',
    template: `
    <ul>
        <li *ngFor="let name of names">{{name}}</li>
    </ul>
    `,
    styles:[]
})
export class SmartComponent implements OnInit{
    title="List of names";
    @Input() names: string[];
   
 constructor(){}
 ngOnInit(){}
}