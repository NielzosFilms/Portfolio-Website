import { Component, HostBinding } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

export const slideInAnimation = trigger('slideIn', [
    transition(':enter', [
        style({transform: 'translateY(100%)', opacity: 0}),
        animate('1s 500ms cubic-bezier(0,.78,.3,.98)', style({transform: 'translateY(0)', opacity: 1})),
    ]),
]);

@Component({
    selector: 'app-socials',
    imports: [],
    templateUrl: './socials.component.html',
    styleUrl: './socials.component.scss',
    animations: [slideInAnimation],
})
export class SocialsComponent {
    @HostBinding('@slideIn') get slideIn() {
        return 'slideIn';
    }
}
