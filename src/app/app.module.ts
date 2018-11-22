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
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { UploadImageMultiComponent } from './components/upload-image/upload-image-multi.component';
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
import { ModalDeleteBankAccountComponent } from './pages/modals/modal-delete-bank-account/modal-delete-bank-account.component';
import { InfoProductComponent } from './pages/info-product/info-product.component';
import { SettingPasswordComponent } from './pages/setting-password/setting-password.component';
import { ShopCategoryComponent } from './pages/shop-category/shop-category.component';
import { AccountComponent } from './pages/account/account.component';
import { InfoShopCategoryComponent } from './pages/info-shop-category/info-shop-category.component';
import { MenuMarketingComponent } from './pages/menu-marketing/menu-marketing.component';
import { ModalDeleteProductComponent } from './pages/modals/modal-delete-product/modal-delete-product.component';
import { MyPromotionComponent } from './pages/my-promotion/my-promotion.component';
import { MyPromotionHeaderComponent } from './components/my-promotion-header/my-promotion-header.component';
import { MyPromotionListComponent } from './components/my-promotion-list/my-promotion-list.component';
import { ModalSelectProductComponent } from './pages/modals/modal-select-product/modal-select-product.component';
import { SelectProductComponent } from './components/select-product/select-product.component';
import { InfoMyPromotionComponent } from './pages/info-my-promotion/info-my-promotion.component';
import { ModalDeleteMyPromotionComponent } from './pages/modals/modal-delete-my-promotion/modal-delete-my-promotion.component';
import { InfoMyCodeComponent } from './pages/info-my-code/info-my-code.component';
import { MyCodeComponent } from './pages/my-code/my-code.component';
import { ModalMessageComponent } from './pages/modals/modal-message/modal-message.component';
import { NgChatComponent } from './components/ng-chat/ng-chat.component';
import { ChatService } from './providers/chat-service/chat.service';
import { ParamsService } from './providers/params/params.service';
import { MomentPipe } from './pipes/moment/moment.pipe';
import { ModalConfirmComponent } from './pages/modals/modal-confirm/modal-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    UploadImageComponent,
    UploadImageMultiComponent,
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
    InfoProductComponent,
    ShopCategoryComponent,
    ModalDeleteBankAccountComponent,
    InfoProductComponent,
    SettingPasswordComponent,
    AccountComponent,
    InfoShopCategoryComponent,
    MenuMarketingComponent,
    ModalDeleteProductComponent,
    MyPromotionComponent,
    MyPromotionHeaderComponent,
    MyPromotionListComponent,
    ModalSelectProductComponent,
    SelectProductComponent,
    InfoMyPromotionComponent,
    ModalDeleteMyPromotionComponent,
    InfoMyCodeComponent,
    MyCodeComponent,
    ModalMessageComponent,
    NgChatComponent,
    MomentPipe,
    ModalConfirmComponent
  ],
  entryComponents: [
    ModalCreateBankAccountComponent,
    InfoAddressComponent,
    ModalPrepareShippingComponent,
    ModalInfoBankAccountComponent,
    ModalCompleteComponent,
    ModalDeleteBankAccountComponent,
    ModalDeleteProductComponent,
    ModalSelectProductComponent,
    ModalDeleteMyPromotionComponent,
    ModalMessageComponent,
    ModalConfirmComponent
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
  providers: [DataService, RestApiService, ChatService, ParamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

