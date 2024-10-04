import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SwapiServiceService} from "./services/swapi-service.service";
import {People} from "./types/swapi-types";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    people?: People;

    constructor(private swapiService: SwapiServiceService) { }

    ngOnInit() {
        this.swapiService.getAllPeople()
            .then((response) => {
                this.people = response;
                console.log(this.people);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}
