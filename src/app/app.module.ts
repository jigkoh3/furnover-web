import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './pages/home/home.component';
import { routes } from './app.routing';
import { DataService } from './providers/data-service/data.service';
import { RestApiService } from './providers/rest-api-service/rest-api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankAccountComponent } from './pages/bank-account/bank-account.component';
import { LogisticComponent } from './pages/logistic/logistic.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { MessageComponent } from './components/message/message';
import { SideMenuSettingShopComponent } from './components/side-menu-setting-shop/side-menu-setting-shop.component';
import { MyProductComponent } from './pages/my-product/my-product.component';
import { ModalCreateBankAccountComponent } from './pages/modals/modal-create-bank-account/modal-create-bank-account.component';
import { AddressComponent } from './pages/address/address.component';
import { InfoAddressComponent } from './pages/modals/info-address/info-address.component';
import { ModalPrepareShippingComponent } from './pages/modals/modal-prepare-shipping/modal-prepare-shipping.component';
import { ProfileSettingComponent } from './components/profile/profile.component';
import { ModalCompleteComponent } from './pages/modals/modal-complete/modal-complete.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { ModalInfoBankAccountComponent } from './pages/modals/modal-info-bank-account/modal-info-bank-account.component';
import { SettingHeaderComponent } from './components/setting-header/setting-header.component';
import { ModalUploadYoutubeComponent } from './pages/modals/modal-upload-youtube/modal-upload-youtube.component';
import { ModalDeleteBankAccountComponent } from './pages/modals/modal-delete-bank-account/modal-delete-bank-account.component';
import { InfoProductComponent } from './pages/info-product/info-product.component';
import { SettingPasswordComponent } from './pages/setting-password/setting-password.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    SidenavComponent,
    ToolbarComponent,
    HomeComponent,
    BankAccountComponent,
    LogisticComponent,
    RegisterComponent,
    ProfileComponent,
    ProfileSettingComponent,
    LoginComponent,
    SideMenuSettingShopComponent,
    MyProductComponent,
    ModalCreateBankAccountComponent,
    AddressComponent,
    InfoAddressComponent,
    ModalPrepareShippingComponent,
    ModalCompleteComponent,
    CreateProductComponent,
    ModalInfoBankAccountComponent,
    SettingHeaderComponent,
    ModalUploadYoutubeComponent,
    ModalDeleteBankAccountComponent,
    InfoProductComponent,
    SettingPasswordComponent
  ],
  entryComponents: [
    ModalCreateBankAccountComponent,
    AddressComponent,
    InfoAddressComponent,
    ModalPrepareShippingComponent,
    ModalInfoBankAccountComponent,
    ModalUploadYoutubeComponent,
    ModalCompleteComponent,
    ModalDeleteBankAccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AppMaterialModule,
    NgxSpinnerModule
  ],
  providers: [DataService, RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
