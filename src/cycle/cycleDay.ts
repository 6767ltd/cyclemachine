import { BLEEDING_LEVEL } from "./symptoms/bleeding";
import { CERVIX_HARDNESS, CERVIX_OPEN_LEVEL, CERVIX_POSITION } from "./symptoms/cervix";
import { MOOD_SYMPTOM } from "./symptoms/mood";
import { C_MUCUS_FEEL, V_ENTRANCE_FEEL } from "./symptoms/mucusLevels";
import { PAIN_SYMPTOM } from "./symptoms/pain";
import { CONTRACEPTIVE_TYPE, LIBIDO_LEVEL, SEXUAL_ACTIVITY_TYPE } from "./symptoms/sex";

export interface CycleDay {
    dayStamp: string; // Day numbers are interpreted from this
    bleeding: boolean; // Bare minimum to have a rough calculation
    notes?: string; // If entered by user these can be exported and saved later

    // Optional for fertility tracking
    temperature?: number; // Temperature after waking up
    temperatureTimestamp?: string; // Time of temperature measurement
    cervicalMucus?: C_MUCUS_FEEL;
    vaginalEntranceFeel?: V_ENTRANCE_FEEL;

    // Cervix details
    cervixOpenLevel?: CERVIX_OPEN_LEVEL;
    cervixHardness?: CERVIX_HARDNESS;
    cervixPosition?: CERVIX_POSITION;

    // If bleeding, bleeding intensity
    bleedingIntensity?: BLEEDING_LEVEL;

    // Sex tracking
    sexualActivityType?: SEXUAL_ACTIVITY_TYPE;
    contraceptiveType?: CONTRACEPTIVE_TYPE[];
    libidoLevel?: LIBIDO_LEVEL;

    // Pain and mood tracking
    painLevel?: number; // 0-10
    painSymptoms?: PAIN_SYMPTOM[];
    moodLevel?: number; // 0-10
    moodSymptoms?: MOOD_SYMPTOM[];
}

export type Cycle = CycleDay[];