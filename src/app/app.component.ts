import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animate, query, style, transition, trigger } from '@angular/animations';
import { HeaderComponent } from './header/header.component';
import { SocialsComponent } from './socials/socials.component';

export const fadeAnimation = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                width: '100%',
                opacity: 0,
            }),
        ], {optional: true}),
        query(':enter', [
            animate('500ms ease', style({opacity: 1})),
        ], {optional: true}),
    ]),
]);

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, SocialsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    animations: [fadeAnimation]
})
export class AppComponent {
    public prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
}
