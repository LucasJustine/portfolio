import { Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SKILL_CATEGORIES } from '../../data/skills.data';
import { Skill, SkillCategory, categoryText } from '../../models/skill.model';
import { TechIconComponent } from '../../components/ui/tech-icon/tech-icon';
import { TechHomeLinkComponent } from '../../components/ui/tech-home-link/tech-home-link';
import { ShowMoreComponent } from '../../components/ui/show-more/show-more';

@Component({
    selector: 'app-skills',
    imports: [TranslatePipe, TechIconComponent, TechHomeLinkComponent],
    templateUrl: './skills.html',
    styles: `
    :host {
      display: block;
    }
  `,
})
export class SkillsComponent {
    protected readonly categoryText = categoryText;

    protected readonly categories = signal<SkillCategory[]>(SKILL_CATEGORIES);

    protected readonly selectedCategoryId = signal<string>('all');

    protected readonly searchQuery = signal<string>('');

    protected readonly totalSkillsCount = computed(() =>
        this.categories().reduce((sum, cat) => sum + cat.skills.length, 0)
    );

    protected readonly displayedCategories = computed(() => {
        const activeCategory = this.selectedCategoryId();
        const query = this.searchQuery().trim().toLowerCase();

        let list = this.categories();
        if (activeCategory !== 'all') {
            list = list.filter((cat) => cat.id === activeCategory);
        }

        if (query) {
            list = list
                .map((cat) => ({
                    ...cat,
                    skills: cat.skills.filter(
                        (skill) =>
                            skill.name.toLowerCase().includes(query) ||
                            skill.tag?.toLowerCase().includes(query)
                    ),
                }))
                .filter((cat) => cat.skills.length > 0);
        }

        return list;
    });

    protected selectCategory(categoryId: string): void {
        this.selectedCategoryId.set(categoryId);
    }

    protected onSearchInput(event: Event): void {
        const target = event.target as HTMLInputElement;
        this.searchQuery.set(target.value);
    }
    protected resetFilters(): void {
        this.selectedCategoryId.set('all');
        this.searchQuery.set('');
    }

    protected getTagBadgeClass(tag?: Skill['tag']): string {
        switch (tag) {
            case 'daily':
                return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
            case 'cours':
                return 'bg-primary/10 text-primary border-primary/20';
            case 'appris':
                return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
            case 'pro':
                return 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20';
            default:
                return 'bg-panel text-muted border-border';
        }
    }
}
