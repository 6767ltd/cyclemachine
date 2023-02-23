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
import * as sympto from "sympto";

interface CycleMachineProps {
    // Cycles
    cycles: Cycle[];
}



export default class CycleMachine {
    private cycles: Cycle[];
    constructor(props: CycleMachineProps) {
        this.cycles = props.cycles;
    }

    public runSympto() {
        // Convert cycles to sympto format
        const symptoCycles: sympto.SymptoCycle[] = [];
        const { cycles } = this;

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
                    }
                });
            });
        });
    }
}