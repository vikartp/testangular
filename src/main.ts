import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterModule
  ],
  templateUrl: 'app.html',
  styles: `
     nav {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 10px;
    }
  `
})
export class App {

}
bootstrapApplication(App, appConfig);
