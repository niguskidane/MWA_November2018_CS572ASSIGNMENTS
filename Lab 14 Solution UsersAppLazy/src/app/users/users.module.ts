import { RouterModule } from '@angular/router';
import { DetailsGuard } from './details.guards';
import { UserDetailComponent } from './user-details.component';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const USER_ROUTES = [

  {path:'', component: UsersComponent},
  {path:'user/:id', component: UserDetailComponent, canActivate: [ DetailsGuard ]}
];

@NgModule({
  declarations: [
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(USER_ROUTES)
  ],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
