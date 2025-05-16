import { Component } from '@angular/core';
import { CardComponent } from '../components/card/card.component';

@Component({
    selector: 'app-testing',
    imports: [
        CardComponent,
    ],
    templateUrl: './testing.component.html',
    styleUrl: './testing.component.scss',
})
export class TestingComponent {

}
