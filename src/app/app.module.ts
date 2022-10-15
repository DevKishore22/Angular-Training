import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './Compounds/display/display.component';
import { AdminComponent } from './Compounds/admin/admin.component';
import { UserComponent } from './Compounds/user/user.component';
import { FormsModule } from '@angular/forms';
import { TrimNumbersDirective } from './Directives/trim-numbers.directive';
import { LongDatePipe } from './pipes/long-date.pipe';
import { ShortOutPipe } from './pipes/short-out.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    AdminComponent,
    UserComponent,
    TrimNumbersDirective,
    LongDatePipe,
    ShortOutPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
