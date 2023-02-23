/*

CycleMachine

NPM package for tracking menstrual cycles and fertility.

Copyright: (c) 2023 6767 Ltd.
License: GPL-3.0

Some source is derived from the following projects by Bloody Health and contributors:
https://gitlab.com/bloodyhealth/sympto (GPL-3.0)
https://gitlab.com/bloodyhealth/drip (GPL-3.0)

*/

import { Cycle } from "./cycle/cycleDay";
import getSymptoThermalStatus, * as sympto from "sympto";

interface CycleMachineProps {
    // Cycles - IN ORDER FROM NEWEST TO OLDEST
    cycles: Cycle[];
}



export default class CycleMachine {
    private cycles: Cycle[];
    constructor(props: CycleMachineProps) {
        this.cycles = props.cycles;
    }

    public runSympto(useCervixAsSecondarySymptom = false, excludePreOvu = false) {
        // Convert cycles to sympto format
        const symptoCycles: sympto.SymptoCycle[] = [];
        const { cycles } = this;

        if (cycles.length < 2) {
            throw new Error("At least two cycles are required to run sympto");
        }

        cycles.forEach((cycleDays) => {
            const symptoCycle: sympto.SymptoCycle = [];
            cycleDays.forEach((cycleDay) => {
                symptoCycle.push({
                    date: cycleDay.dayStamp,
                    temperature: cycleDay.temperature || 0,
                    mucus: ({
                        NONE: 0,
                        CREAMY: 1,
                        EGGWHITE: 2,
                        SLIPPERY: 3,
                    })[cycleDay.cervicalMucus || "NONE"],
                    cervix: {
                        opening: ({
                            CLOSED: 0,
                            MEDIUM: 1,
                            OPEN: 2,
                        })[cycleDay.cervixOpenLevel || "CLOSED"],
                        firmness: ({
                            SOFT: 0,
                            HARD: 1,
                        })[cycleDay.cervixHardness || "SOFT"],
                    },
                    bleeding: ({
                        NONE: 0,
                        SPOTTING: 1,
                        LIGHT: 2,
                        MEDIUM: 3,
                        HEAVY: 4,
                    })[cycleDay.bleedingIntensity || "NONE"],
                });
            });
        });

        // Run sympto
        const symptoStatus = getSymptoThermalStatus({
            // The cycle to be analyzed is always the latest one (i.e. the first one in the array)
            cycle: symptoCycles[0],
            // The previous cycle is the second one in the array
            previousCycle: symptoCycles[1],
            // The earlier cycles are the rest of the array
            earlierCycles: symptoCycles.slice(2),
            secondarySymptom: useCervixAsSecondarySymptom ? "cervix" : "mucus",
            excludePreOvu,
        });

        return symptoStatus;
    }
}