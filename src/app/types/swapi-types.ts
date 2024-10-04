export type People = {
    count: number;
    next: string;
    previous: string;
    results: Person[];
}

export type Person = {
    birth_year: string;
    eye_color: string;
    films: string[];
    gender: string;
    hair_color: string;
    height: string;
    created: string;
    edited: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    species: string[];
    starships: string[];
    url: string;
    vehicles: string[];
}

export enum SwapiUrls {
    films = 'films/',
    people = 'people/',
    planets = 'planets/',
    species = 'species/',
    starships = 'starships/',
    vehicles = 'vehicles/',
}