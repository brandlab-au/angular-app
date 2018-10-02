import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeadComponent }  from './head/head.component';
import { NapoComponent }  from './napo/napo.component';
const routes: Routes = [
//  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '', component: HeadComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
    { path: 'napo', component: NapoComponent }
];
    

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}