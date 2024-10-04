import { Component } from '@angular/core';
import {People} from "../../types/swapi-types";
import {SwapiServiceService} from "../../services/swapi-service.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent {
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
