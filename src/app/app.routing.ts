import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BankAccountComponent } from './pages/bank-account/bank-account.component';
import { LogisticComponent } from './pages/logistic/logistic.component';
<<<<<<< HEAD
import { DeliveryTimeComponent } from './pages/modals/delivery-time/delivery-time.component';
=======
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
>>>>>>> 3f329aa48b45da0bb9e2612666dab97a1f372e84

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'auth/register',
        component: RegisterComponent
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
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path:'profile',
        component: ProfileComponent
    }
    ,
    {
        path: 'delivery-time',
        component: DeliveryTimeComponent
    }
];
