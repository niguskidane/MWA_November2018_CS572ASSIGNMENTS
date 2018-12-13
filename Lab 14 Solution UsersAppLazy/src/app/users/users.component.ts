import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-users',
    template: `
    <ul>
    <li *ngFor="let user of users"><a [routerLink]="['user', user.userId]">{{user.name.first + ' ' + user.name.last}}</a></li>
    </ul>
    `,
    styles: []
})
export class UsersComponent implements OnInit {
    private users = [];
    constructor(private dataService: DataService) { }
    ngOnInit() {
        this.users = this.dataService.getData();
    }
}