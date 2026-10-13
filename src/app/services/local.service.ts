import { Service, computed, inject, signal } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

export type Theme = 'light' | 'dark';
export type Locale = 'fr' | 'en';

@Service()
export class LocalService {
    private readonly translateService = inject(TranslateService);
    private readonly selectedTheme = signal<Theme>(this.getInitialTheme());
    public readonly currentLocale = computed<Locale>(() => {
        const lang = this.translateService.currentLang();
        return lang === 'en' ? 'en' : 'fr';
    });
    public readonly currentTheme = this.selectedTheme.asReadonly();

    changeLocale(locale: Locale) {
        this.translateService.use(locale);
    }

    changeTheme(theme: Theme) {
        this.selectedTheme.set(theme);
        localStorage.setItem('portfolio-theme', theme);
    }

    private getInitialTheme(): Theme {
        try {
            const savedTheme = typeof localStorage !== 'undefined' ? localStorage.getItem('portfolio-theme') : null;
            if (savedTheme === 'light' || savedTheme === 'dark') {
                return savedTheme;
            }

            if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
        } catch {
            return 'light';
        }

        return 'light';
    }

}