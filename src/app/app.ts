import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header';

import { LocalService } from './services/local.service';

@Component({
  imports: [HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.html'
})
export class App {
  protected readonly localService = inject(LocalService);
}