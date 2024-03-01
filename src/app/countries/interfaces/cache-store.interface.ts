import { Country } from "./country";
import { Name } from "./region";
import { RegionsWordlC } from "./regions.type";

export interface cacheStore {
    byCapital: TermCountries;
    byCountries: NamesCountries;
    byRegion: RegionCountries;
}

export interface TermCountries {
    term: string;
    countries: Country[];
}

export interface RegionCountries {
    reginon: RegionsWordlC;
    countries: Country[];
}

export interface NamesCountries {
    term: string;
    countries: Country[];
}