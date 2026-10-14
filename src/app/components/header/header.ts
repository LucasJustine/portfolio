import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Locale, LocalService, Theme } from '../../services/local.service';
import { SegmentedViewComponent, SegmentOption } from '../ui/segmented-view/segmented-view';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  imports: [TranslatePipe, SegmentedViewComponent, RouterLink],
})
export class HeaderComponent {
  public readonly localService = inject(LocalService);
  readonly localeOptions: readonly SegmentOption<Locale>[] = [
    { value: 'fr', label: 'FR' },
    { value: 'en', label: 'EN' },
  ];
  readonly themeOptions: readonly SegmentOption<Theme>[] = [
    { value: 'light', label: 'header.lightTheme' },
    { value: 'dark', label: 'header.darkTheme' },
  ];

  changeLocale(value: string): void {
    if (value === 'fr' || value === 'en') {
      this.localService.changeLocale(value);
    }
  }

  changeTheme(value: string): void {
    if (value === 'light' || value === 'dark') {
      this.localService.changeTheme(value);
    }
  }
}