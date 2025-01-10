import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookComponent} from './book/book.component';
import {MemberComponent} from './member/member.component';
import {RentComponent} from './rent/rent.component';
import {DeliverComponent} from "./deliver/deliver.component";

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    MemberComponent,
    RentComponent,
    DeliverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
