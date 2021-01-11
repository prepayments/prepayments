import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'prepayment-entry',
        loadChildren: () => import('./prepayment-entry/prepayment-entry.module').then(m => m.PrepaymentsPrepaymentEntryModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class PrepaymentsEntityModule {}
