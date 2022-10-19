import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'search/:search',
    component : HomeComponent
  },
  {
    path: 'demo',
    component: DemoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
