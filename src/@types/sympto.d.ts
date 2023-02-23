// Type definitions for sympto by Bloody Health
// Partly reverse engineered from source
// see https://gitlab.com/bloodyhealth/sympto/-/blob/master/README.md

declare module 'sympto' {
    export type SymptoCycle = SymptoCycleDay[];

    export interface SymptoCycleDay {
        date: string; // Enforced, see format https://js-joda.github.io/js-joda/manual/LocalDate.html
        temperature: number; // Temperature after waking up
        mucus: number; // Between 0 and 4
        cervix: {
            opening: number; // between 0 and 2
            firmness: number; // between 0 and 1
        };
        bleeding: number; // between 0 and 3
    }

    export interface SymptoCycleStatus {
        phases : { },
        mucusShift?: { },
        temperatureShift?: { },
    }

    export default function getSymptoThermalStatus(cycleInfo: {
        cycle: SymptoCycle;
        previousCycle?: SymptoCycle;
        earlierCycles?: SymptoCycle[]; // Default: []
        // Default: "mucus". If "cervix", the cervix opening and firmness will be used to determine the phase.
        secondarySymptom?: "mucus" | "cervix"; 
        // Pass in true if you don't want the pre-ovulatory phase to be included in the status.
        excludePreOvu?: boolean;
    }): SymptoCycleStatus;
}