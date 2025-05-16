import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestingComponent } from './testing/testing.component';

export const routes: Routes = [
    {
        path: 'home',
        component: LandingPageComponent,
        data: {animation: 'landing'},
    },
    {
        path: 'testing',
        component: TestingComponent,
        data: {animation: 'testing'},
    },
    {
        path: '**',
        redirectTo: 'home',
        data: {animation: '404'},
    },
];
