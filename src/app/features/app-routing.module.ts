import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookComponent} from "./book/book.component";
import {MemberComponent} from "./member/member.component";
import {RentComponent} from "./rent/rent.component";
import {DeliverComponent} from "./deliver/deliver.component";
import {BookUpdateComponent} from "./book/book-update/book-update.component";

const routes: Routes = [
  {path: 'books', component: BookComponent},
  {path: 'members', component: MemberComponent},
  {path: 'rent', component: RentComponent},
  {path: 'deliver', component: DeliverComponent},
  {path: 'books/:id/update', component: BookUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
