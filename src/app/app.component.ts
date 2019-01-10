import { Component } from '@angular/core';

// Decorator of the component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Logic of the component
export class AppComponent {
  title = 'angular101';
}
