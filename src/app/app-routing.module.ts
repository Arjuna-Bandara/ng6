import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PowerMeterComponent } from './power-meter/power-meter.component';

const routes: Routes = [
  {
    path:'',
    component: UsersComponent
  },
  {
    path:'details/:id',
    component: DetailsComponent
  },
  {
    path:'posts',
    component: PostsComponent
  },
  {
    path:'calculator',
    component: CalculatorComponent
  },
  {
    path:'power-meter',
    component: PowerMeterComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
