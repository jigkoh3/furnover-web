import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BankAccountComponent } from './pages/bank-account/bank-account.component';
import { LogisticComponent } from './pages/logistic/logistic.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { MyProductComponent } from './pages/my-product/my-product.component';
import { AddressComponent } from './pages/address/address.component';
import { InfoAddressComponent } from './pages/modals/info-address/info-address.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { InfoProductComponent } from './pages/info-product/info-product.component';
import { SettingPasswordComponent } from 'src/app/pages/setting-password/setting-password.component';
import { ShopCategoryComponent } from './pages/shop-category/shop-category.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
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
        path: 'bank-account',
        component: BankAccountComponent
    },
    {
        path: 'logistic',
        component: LogisticComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'my-product',
        component: MyProductComponent
    },
    {
        path: 'address',
        component: AddressComponent
    },
    {
        path: 'info-address',
        component: InfoAddressComponent
    }
    ,
    {
        path: 'create-product',
        component: CreateProductComponent
    },
    {
        path: 'info-product',
        component: InfoProductComponent
    },
    {
        path: 'setting-password',
        component: SettingPasswordComponent
    }
    ,
    {
        path: 'shop-category',
        component: ShopCategoryComponent
    }
];
