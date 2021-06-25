export class Question {
    constructor(
        public id?: number,
        public question?: string,
        public answers?: Option[],
        public answersId?: number[]
    ) { }
}

export class Option {
    constructor(
        public id: number,
        public option: string,
        public correct: boolean
    ) { }
}