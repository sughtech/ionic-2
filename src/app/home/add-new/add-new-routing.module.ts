import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewPage } from './add-new.page';
import { HomePage } from '../home.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewPage
  },
  {
    path: 'home',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewPageRoutingModule {}
