import CycleMachine from ".";
import { it, describe, expect } from "vitest";
import { CycleDay } from "./cycle/cycleDay";
import { BLEEDING_LEVEL } from "./cycle/symptoms/bleeding";
import { C_MUCUS_FEEL } from "./cycle/symptoms/mucusLevels";

describe("CycleMachine", () => {

    /*
        Sympto algorithm tests - requires at least two cycles
    */

    it("should throw an error if less than two cycles are provided and sympto is used", () => {
        expect(() => {
            const cycleMachine = new CycleMachine({
                cycles: [],
            });
            cycleMachine.runSympto();
        }).toThrowError("At least two cycles are required to run sympto");
    });
    it("should return a correct result based on sample data for mucus", () => {
        const sampleCurrentCycle: CycleDay[] = [
            {
                dayStamp: "2021-01-01",
                temperature: 36.7,
                bleeding: true,
                bleedingIntensity: BLEEDING_LEVEL.LIGHT,
            },
            {
                dayStamp: "2021-01-02",
                temperature: 37.75,
                bleeding: false,
            },
            {
                dayStamp: "2021-01-04",
                temperature: 36.7,
                bleeding: false,
            },
            {
                dayStamp: "2021-01-05",
                temperature: 36.65,
                bleeding: false,
            },
            {
                dayStamp: "2021-01-06",
                temperature: 36.8,
                bleeding: false,
                cervicalMucus: C_MUCUS_FEEL.NONE,
            },
            {
                dayStamp: "2021-01-09",
                temperature: 36.7,
                bleeding: false,
                cervicalMucus: C_MUCUS_FEEL.CREAMY,
            }
        ];
    });
});