import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb';
import { FooterComponent } from './components/footer/footer';
import { LocalService } from './services/local.service';
import { BreadcrumbService } from './services/breadcrumb.service';

@Component({
    imports: [HeaderComponent, BreadcrumbComponent, FooterComponent, RouterOutlet],
    selector: 'app-root',
    templateUrl: './app.html'
})
export class App {
    protected readonly localService = inject(LocalService);
    protected readonly breadcrumb = inject(BreadcrumbService);
}