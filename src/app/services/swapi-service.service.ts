import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import axios from "axios";
import {People} from "../types/swapi-types";

@Injectable({
    providedIn: 'root'
})
export class SwapiServiceService {

    constructor(private http: HttpClient) {
    }

    async getAllPeople() {
        try {
            const response = await axios.get<People>('https://swapi.dev/api/people/');
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
