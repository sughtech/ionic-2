import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AddNewPage } from './add-new/add-new.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'add-new',
    component: AddNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
