
// Generated by https://quicktype.io

export interface Region {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies:   Currencies;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       RegionElement;
    subregion:    Subregion;
    languages:    { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   RegionElement[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum RegionElement {
    Asia = "Asia",
    Europe = "Europe",
}

export interface Currencies {
    EUR?: TartuGecko;
    RSD?: TartuGecko;
    MKD?: TartuGecko;
    ALL?: TartuGecko;
    CHF?: TartuGecko;
    DKK?: TartuGecko;
    MDL?: TartuGecko;
    UAH?: TartuGecko;
    GBP?: TartuGecko;
    RUB?: TartuGecko;
    PLN?: TartuGecko;
    BAM?: BAM;
    JEP?: TartuGecko;
    BYN?: TartuGecko;
    CZK?: TartuGecko;
    ISK?: TartuGecko;
    IMP?: TartuGecko;
    RON?: TartuGecko;
    GIP?: TartuGecko;
    HUF?: TartuGecko;
    BGN?: TartuGecko;
    SEK?: TartuGecko;
    FOK?: TartuGecko;
    NOK?: TartuGecko;
    GGP?: TartuGecko;
}

export interface TartuGecko {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex:  string;
}

export enum StartOfWeek {
    Monday = "monday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

export enum Subregion {
    CentralEurope = "Central Europe",
    EasternEurope = "Eastern Europe",
    NorthernEurope = "Northern Europe",
    SoutheastEurope = "Southeast Europe",
    SouthernEurope = "Southern Europe",
    WesternEurope = "Western Europe",
}
