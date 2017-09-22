import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 with Rollbar';
  errorMessage = 'Hello World, Error Message';

  sendError() {
    if ( 1 === 1 ) {
      throw new Error(this.errorMessage);
    }
  }
}
