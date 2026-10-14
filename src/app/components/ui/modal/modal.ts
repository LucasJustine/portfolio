import { NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, TemplateRef, effect, input, model, viewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-modal',
    imports: [NgTemplateOutlet, TranslatePipe],
    templateUrl: './modal.html',
    styles: `
    dialog {
      opacity: 0;
      transform: translateY(8px) scale(0.98);
      transition:
        opacity 200ms ease,
        transform 250ms cubic-bezier(0.22, 1, 0.36, 1),
        overlay 250ms allow-discrete,
        display 250ms allow-discrete;
    }
    dialog[open] {
      opacity: 1;
      transform: none;
      @starting-style {
        opacity: 0;
        transform: translateY(8px) scale(0.98);
      }
    }
    dialog::backdrop {
      background: rgb(0 0 0 / 0);
      transition: background-color 200ms ease, overlay 200ms allow-discrete, display 200ms allow-discrete;
    }
    dialog[open]::backdrop {
      background: rgb(0 0 0 / 0.5);
      @starting-style {
        background: rgb(0 0 0 / 0);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      dialog { transform: none; }
    }
  `,
})
export class ModalComponent<C = unknown> {

    readonly open = model(false);
    readonly title = input('');

    readonly template = input<TemplateRef<C> | null>(null);

    readonly context = input<C | null>(null);

    private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

    constructor() {
        effect(() => {
            const el = this.dialog().nativeElement;
            const open = this.open();
            if (open && !el.open) el.showModal();
            else if (!open && el.open) el.close();
        });
    }

    /** Fermeture native (touche Échap comprise) */
    protected onClose(): void {
        this.open.set(false);
    }

    /** Clic sur le fond : la cible est le <dialog> lui-même */
    protected onBackdropClick(event: MouseEvent): void {
        if (event.target === this.dialog().nativeElement) {
            this.open.set(false);
        }
    }
}