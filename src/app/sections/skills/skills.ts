import { Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SKILL_CATEGORIES } from '../../data/skills.data';
import { categoryText } from '../../models/skill.model';
import { TechIconComponent } from '../../components/ui/tech-icon/tech-icon';

@Component({
    selector: 'app-skills',
    imports: [TranslatePipe, TechIconComponent],
    templateUrl: './skills.html',
    styles: ':host { display: block; }',
})
export class SkillsComponent {
    protected readonly categoryText = categoryText;

    protected readonly searchQuery = signal('');

    protected readonly displayedCategories = computed(() => {
        const query = this.searchQuery().trim().toLowerCase();
        if (!query) return SKILL_CATEGORIES;

        return SKILL_CATEGORIES
            .map((cat) => ({
                ...cat,
                skills: cat.skills.filter(
                    (skill) =>
                        skill.name.toLowerCase().includes(query) ||
                        skill.tag?.toLowerCase().includes(query),
                ),
            }))
            .filter((cat) => cat.skills.length > 0);
    });

    protected onSearchInput(event: Event): void {
        this.searchQuery.set((event.target as HTMLInputElement).value);
    }

    protected resetFilters(): void {
        this.searchQuery.set('');
    }
}
