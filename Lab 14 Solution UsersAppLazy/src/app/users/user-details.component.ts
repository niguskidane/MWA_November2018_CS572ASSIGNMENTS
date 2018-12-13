import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-details',
    template: `
    <h3>User Details</h3>
    {{details}}
    `,
    styles: []
})
export class UserDetailComponent implements OnInit {
    private id;
    private details: any;
    private subscription: Subscription;

    constructor(private route: ActivatedRoute, private dataService: DataService) {
        this.subscription = route.params.subscribe(params => {
            this.id = params['userId'];
        });
    }

    ngOnInit() {
        this.details = JSON.stringify(this.dataService.getUser(this.id));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}