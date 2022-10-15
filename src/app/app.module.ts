import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './Components/admin/admin.component';
import { UserComponent } from './Components/user/user.component';
import { ShortOutPipe } from './pipes/short-out.pipe';
import { LongDatePipe } from './pipes/long-date.pipe';
import { FormsModule } from '@angular/forms';
import { CommonMethodService } from './service/common-method-service.service';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent },
  // {path:'not-found', component:ErrorNotfoundComponent},
  // {path:'**',redirectTo:'not-found'}
];
@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    ShortOutPipe,
    LongDatePipe,
    AppComponent,
    LandingPageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [CommonMethodService],
  bootstrap: [AppComponent],
})
export class AppModule {}
