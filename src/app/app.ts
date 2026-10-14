import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb';
import { LocalService } from './services/local.service';
import { BreadcrumbService } from './services/breadcrumb.service';

@Component({
    imports: [HeaderComponent, BreadcrumbComponent, RouterOutlet],
    selector: 'app-root',
    templateUrl: './app.html'
})
export class App {
    protected readonly localService = inject(LocalService);
    protected readonly breadcrumb = inject(BreadcrumbService);
}