// Sexual activity tracking and levels

// Q: Were you sexually active today?
export enum SEXUAL_ACTIVITY_TYPE {
    SOLO = "SOLO",
    PARTNER = "PARTNER",
}

// Q: Did you use contraceptives? (multiple choice)
export enum CONTRACEPTIVE_TYPE {
    CONDOM = "CONDOM",
    PILL = "PILL",
    IUD = "IUD",
    PATCH = "PATCH",
    RING = "RING",
    IMPLANT = "IMPLANT",
    DIAPHRAGM = "DIAPHRAGM",
    NONE = "NONE",
    OTHER = "OTHER",
}

// Q: How would you rate your sexual desire?
export enum LIBIDO_LEVEL {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
}