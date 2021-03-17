import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { ModalLogoutComponent } from './shared/modal-logout/modal-logout.component';


@NgModule({
  declarations: [
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ModalLogoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }