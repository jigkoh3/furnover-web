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
import { AuthGuard } from './guards/auth/auth.guard';
import { DetailMySaleComponent } from './pages/detail-my-sale/detail-my-sale.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
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
        component: BankAccountComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'logistic',
        component: LogisticComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'my-product',
        component: MyProductComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'address',
        component: AddressComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'info-address',
        component: InfoAddressComponent,
        canActivate: [AuthGuard]
    }
    ,
    {
        path: 'create-product',
        component: CreateProductComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'info-product',
        component: InfoProductComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'setting-password',
        component: SettingPasswordComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'shop-category',
        component: ShopCategoryComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'account',
        component: AccountComponent,
        canActivate: [AuthGuard]

    },
    {
        path: 'info-shop-category',
        component: InfoShopCategoryComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'menu-marketing',
        component: MenuMarketingComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'info-shop-category',
        component: InfoShopCategoryComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'my-promotion',
        component: MyPromotionComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'info-my-promotion',
        component: InfoMyPromotionComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'my-promotion-list',
        component: MyPromotionListComponent,
        canActivate: [AuthGuard]
    }, {
        path: 'my-promotion-header',
        component: MyPromotionHeaderComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'my-code',
        component: MyCodeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'info-my-code',
        component: InfoMyCodeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'detail-my-sale',
        component: DetailMySaleComponent,
        canActivate: [AuthGuard]
    }

];
