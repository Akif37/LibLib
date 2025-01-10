import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'liblib-ui';

  constructor(private router: Router) {}

  goToMemberPage() {
    this.router.navigate(['/members']);
  }

  goToBookPage() {
    this.router.navigate(['/books']);
  }

  goToRentPage() {
    this.router.navigate(['/rent']);
  }

  goToDeliverPage() {
    this.router.navigate(['/deliver']);
  }
}
