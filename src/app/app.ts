import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {Mainpage} from './mainpage/mainpage';

@Component({
  selector: 'app-root',
  imports: [
    Mainpage
  ],
  template: `<app-mainpage></app-mainpage>`
})
export class App {
  protected readonly title = signal('ArtPortfolio');
   page = new Mainpage()
}
