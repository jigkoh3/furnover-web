import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BankAccountComponent } from './pages/bank-account/bank-account.component';
import { LogisticComponent } from './pages/logistic/logistic.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'bank-account',
        component: BankAccountComponent
    },
    {
        path: 'logistic',
        component: LogisticComponent
    }
];
