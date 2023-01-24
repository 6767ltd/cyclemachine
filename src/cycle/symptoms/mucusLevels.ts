/*
Fertility tracking through cervical mucus levels
https://www.familienplanung.de/verhuetung/verhuetungsmethoden/natuerliche-methoden/die-symptothermale-methode/
*/

// Q: What does your vaginal entrance feel like?
export enum V_ENTRANCE_FEEL {
    DRY = "DRY",
    NORMAL = "NORMAL",
    WET = "WET",
    SLIPPY = "SLIPPY"
}

// Q: Looking at and touching your cervical mucus, which describes it best?
export enum C_MUCUS_FEEL {
    NONE = "NONE",
    CREAMY = "CREAMY",
    EGGWHITE = "EGGWHITE",
}