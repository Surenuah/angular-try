import {Injectable} from '@angular/core';
import {People, SwapiUrls} from "../types/swapi-types";
import axiosInstance from "./axios-instance";

@Injectable({
    providedIn: 'root'
})
export class SwapiServiceService {
    constructor() { }

    async getAllPeople() {
        try {
            const response = await axiosInstance.get<People>(SwapiUrls.people);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
