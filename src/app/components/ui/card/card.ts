import { Component } from '@angular/core';

@Component({
    selector: 'app-card',
    template: '<ng-content />',
    host: {
        class: 'relative block h-full min-w-0 border border-border bg-background-alt p-6',
    },
    styles: ':host {}',
})
export class CardComponent {}
