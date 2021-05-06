import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioPage } from './portfolio.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PortfolioPage,
      },
      {
        path: 'holdingdetail/:id',
        loadChildren: () => import('../holding-detail/holding-detail.module').then(m => m.HoldingDetailPageModule)
      }
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioPageRoutingModule {}
