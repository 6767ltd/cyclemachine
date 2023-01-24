// See mucusLevels.ts for more info on mucus levels

// Q: Is your cervix open or closed?
export enum CERVIX_OPEN_LEVEL {
    CLOSED = "CLOSED",
    MEDIUM = "MEDIUM",
    OPEN = "OPEN",
}

// Q: How hard does your cervix feel?
// When it's hard, it may feel like the tip of your nose.
export enum CERVIX_HARDNESS {
    HARD = "HARD",
    SOFT = "SOFT"
}

// Q: How high up in the vagina is the cervix?
export enum CERVIX_POSITION {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH"
}