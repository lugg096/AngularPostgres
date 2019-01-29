import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductoListComponent}from './componets/producto-list/producto-list.component'
import {ProductoFormComponent} from './componets/producto-form/producto-form.component'
const routes: Routes = [
  {
    path:'productos',
    component: ProductoListComponent
  },
  {
    path:'productos/add',
    component: ProductoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
