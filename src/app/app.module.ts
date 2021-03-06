import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "./material/material.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './clients/client/client.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { MainclientsubComponent } from './mainclientsub/mainclientsub.component';
import { ClientdetalisComponent } from './clientdetalis/clientdetalis.component';
import { UpdateclientComponent } from './clients/updateclient/updateclient.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ClientsComponent,
    ClientComponent,
    ClientListComponent,
    SubscriptionComponent,
    MainclientsubComponent,
    ClientdetalisComponent,
    UpdateclientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
