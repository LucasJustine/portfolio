import { Component, input, output } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.html',
    styles: ':host { display: block; min-width: 0; }',
})
export class CardComponent {
    readonly clickable = input(false);
    readonly selected = output<void>();

    protected onClick(): void {
        if (this.clickable()) this.selected.emit();
    }

    protected onKeydown(event: KeyboardEvent): void {
        if (!this.clickable() || event.target !== event.currentTarget) return;
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.selected.emit();
        }
    }
}