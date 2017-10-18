import {Component, ErrorHandler, Injector} from '@angular/core';
import * as Rollbar from 'rollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private injector: Injector) { }
  title = 'Angular 4 with Rollbar';
  errorMessage = 'Hello World, Error Message';

  sendError() {
    if ( 1 === 1 ) {
      throw new Error(this.errorMessage);
    }
  }
  manualHandle() {
    const rollbar = this.injector.get(Rollbar);
      rollbar.error(this.errorMessage);
  }
}
