import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesPage } from './detalles.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesPage
  },
  {
    path: 'tab1',
    loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesPageRoutingModule {}
