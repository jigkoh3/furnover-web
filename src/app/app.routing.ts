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
import { AccountComponent } from './pages/account/account.component';
import { MenuMarketingComponent } from './pages/menu-marketing/menu-marketing.component';
import { InfoShopCategoryComponent } from './pages/info-shop-category/info-shop-category.component';
import { MyPromotionComponent } from './pages/my-promotion/my-promotion.component';
import { InfoMyPromotionComponent } from './pages/info-my-promotion/info-my-promotion.component';
import { MyPromotionListComponent } from './components/my-promotion-list/my-promotion-list.component';
import { MyPromotionHeaderComponent } from './components/my-promotion-header/my-promotion-header.component';
import { MyCodeComponent } from './pages/my-code/my-code.component';
import { InfoMyCodeComponent } from './pages/info-my-code/info-my-code.component';

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
    },
    {
        path: 'shop-category',
        component: ShopCategoryComponent
    },
    {
        path: 'account',
        component: AccountComponent

    },
    {
        path: 'info-shop-category',
        component: InfoShopCategoryComponent
    },
    {
        path: 'menu-marketing',
        component: MenuMarketingComponent
    },
    {
        path: 'info-shop-category',
        component: InfoShopCategoryComponent
    },
    {
        path: 'my-promotion',
        component: MyPromotionComponent
    },
    {
        path: 'info-my-promotion',
        component: InfoMyPromotionComponent
    },
    {
        path: 'my-promotion-list',
        component: MyPromotionListComponent
    }, {
        path: 'my-promotion-header',
        component: MyPromotionHeaderComponent
    },
    {
        path: 'my-code',
        component: MyCodeComponent
    },
    {
        path: 'info-my-code',
        component: InfoMyCodeComponent
    }
    
];
