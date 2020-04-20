import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , rountingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './admin/addemployee/addemployee.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { HeaderComponent } from './admin/header/header.component';
import { FooterComponent } from './admin/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    rountingComponent,
    AddemployeeComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
