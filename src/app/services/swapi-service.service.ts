import {Injectable} from '@angular/core';
import {People} from "../types/swapi-types";
import axiosInstance from "./axios-instance";

@Injectable({
    providedIn: 'root'
})
export class SwapiServiceService {
    private peopleUrl: string = 'people/';

    constructor() { }

    async getAllPeople() {
        try {
            const response = await axiosInstance.get<People>(this.peopleUrl);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
