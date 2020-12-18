import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';

//services
import { LoginService } from './public/login/login.service';
import { AuthGuard } from './services/auth-guard.service';
import { AntiAuthGuardService } from './services/anti-auth-guard.service';
import { SecureService } from './secure/secure.service';
import { UserService } from './secure/user/user.service';
import { SettingsService } from './secure/settings/settings.service';
import { DeletedUserService } from './secure/deleted-user/deleted-user.service';
import {TimeAgoPipe} from 'time-ago-pipe';



//component
import { AppComponent } from './app.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { LoginComponent } from './public/login/login.component';
import { LoadingComponent } from './common/loading/loading.component';
import { ForgotPasswordComponent } from './public/forgot-password/forgot-password.component';
import { SetNewPasswordComponent } from './public/set-new-password/set-new-password.component';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';
import { UserComponent } from './secure/user/user.component';
import { SettingsComponent } from './secure/settings/settings.component';
import { DeletedUserComponent } from './secure/deleted-user/deleted-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    LoadingComponent,
    ForgotPasswordComponent,
    SetNewPasswordComponent,
    PublicComponent,
    SecureComponent,
    UserComponent,
    SettingsComponent,
    DeletedUserComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgxDatatableModule,
    NgbModule
  ],
  providers: [
    AuthGuard,
    AntiAuthGuardService,
    LoginService,
    SecureService,
    UserService,
    SettingsService,
    DeletedUserService
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
