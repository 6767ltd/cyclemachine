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
}