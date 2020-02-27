import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, ChartsModule, WavesModule, ButtonsModule, CardsModule, ModalModule,  TooltipModule, PopoverModule } from 'angular-bootstrap-md';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientComponent } from './components/client/client.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { ApplyComponent } from './components/apply/apply.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserService } from './services/user.service';
import { HttpInterceptorService } from './services/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    DepositComponent,
    WithdrawComponent,
    ApplyComponent,
    TransferComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    CardsModule,
    ModalModule
  ],
  providers: [
    UserService,
    {provide: HTTP_INTERCEPTORS,useClass: HttpInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
