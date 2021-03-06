import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'prepayment-entry',
        loadChildren: () => import('./prepayment-entry/prepayment-entry.module').then(m => m.PrepaymentsPrepaymentEntryModule),
      },
      {
        path: 'amortization-entry',
        loadChildren: () => import('./amortization-entry/amortization-entry.module').then(m => m.PrepaymentsAmortizationEntryModule),
      },
      {
        path: 'prepayment-data',
        loadChildren: () => import('./prepayment-data/prepayment-data.module').then(m => m.PrepaymentsPrepaymentDataModule),
      },
      {
        path: 'preps-file-type',
        loadChildren: () => import('./preps/preps-file-type/preps-file-type.module').then(m => m.PrepaymentsPrepsFileTypeModule),
      },
      {
        path: 'preps-file-upload',
        loadChildren: () => import('./preps/preps-file-upload/preps-file-upload.module').then(m => m.PrepaymentsPrepsFileUploadModule),
      },
      {
        path: 'preps-message-token',
        loadChildren: () =>
          import('./preps/preps-message-token/preps-message-token.module').then(m => m.PrepaymentsPrepsMessageTokenModule),
      },
      {
        path: 'currency-table',
        loadChildren: () => import('./preps/currency-table/currency-table.module').then(m => m.PrepaymentsCurrencyTableModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class PrepaymentsEntityModule {}
