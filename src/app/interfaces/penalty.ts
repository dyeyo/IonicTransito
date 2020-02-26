export interface Penalty {
    constructor(
        id?: string,
        cause?: string,
        entry_date?: Date,
        state?: string,
        person_id?: string,
    )
}