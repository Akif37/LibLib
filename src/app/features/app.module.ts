import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookComponent} from './book/book.component';
import {MemberComponent} from './member/member.component';
import {RentComponent} from './rent/rent.component';
import {DeliverComponent} from "./deliver/deliver.component";
import {FormsModule} from "@angular/forms";
import { BookUpdateComponent } from './book/book-update/book-update.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    MemberComponent,
    RentComponent,
    DeliverComponent,
    BookUpdateComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
