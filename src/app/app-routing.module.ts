import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {ListComponent} from './dashboard/polls/list/list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {VoteComponent} from './vote/vote.component';
import {PollComponent} from './dashboard/polls/poll/poll.component';
import {CreateComponent} from './dashboard/polls/create/create.component';
import {LoginGuard} from './guards/login.guard';

const routes: Routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: AuthComponent
}, {
    path: 'list',
    component: ListComponent
}, {
  path: 'dashboard',
  component: DashboardComponent,
  canActivate: [LoginGuard],
  children: [{
    path: 'list',
    component: ListComponent
  }, {
    path: 'poll',
    component: PollComponent
  }, {
    path: 'create',
    component: CreateComponent
  }]
}, {
  path: ':id',
  component: VoteComponent
}, {
  path: 'p/:id',
  component: PollComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
