module.exports = function() {
    var data = {
        game: [{
                id: 1,
                questions: [{
                        id: 1,
                        question: "1What is 2 times 3",
                        answers: [
                            { id: 1, option: "valasz 1", correct: false },
                            { id: 2, option: "Ez egy valsz a 2. kérdésre", correct: true }
                        ],
                        corrAnswer: 1
                    },
                    { id: 2, question: "1What is 4 times 3", answers: [{ id: 1, option: "1", correct: false }], corrAnswer: 2 },
                    { id: 3, question: "1What is 5 times 3", answers: [{ id: 1, option: "1", correct: false }], corrAnswer: 3 },
                    { id: 4, question: "1What is 6 times 3", answers: [{ id: 1, option: "1", correct: false }], corrAnswer: 4 },
                    { id: 5, question: "1What is 7 times 3", answers: [{ id: 1, option: "1", correct: false }], corrAnswer: 5 },
                    { id: 6, question: "1What is 8 times 3", answers: [{ id: 1, option: "1", correct: false }], corrAnswer: 6 },
                ],
                gamers: [
                    { id: 1, name: "Kristóf" },
                    { id: 2, name: "Barna" },
                    { id: 3, name: "Dóri" },
                    { id: 4, name: "Vivi" },
                    { id: 5, name: "Csanád" },
                    { id: 6, name: "Rita" },
                    { id: 7, name: "Zita" }
                ],
                description: "Első játék"
            },
            {
                id: 2,
                questions: [
                    { id: 1, question: "2What is 2 times 3", answers: [{ id: 1, option: "1", correct: false }], corrAnswer: 1 },
                    { id: 2, question: "1What is 4 times 3", answers: [{ id: 1, option: "1", correct: false }], corrAnswer: 2 },
                    { id: 3, question: "1What is 5 times 3", answers: [{ id: 1, option: "1", correct: false }], corrAnswer: 3 },
                    { id: 4, question: "1What is 6 times 3", answers: [{ id: 1, option: "1", correct: false }], corrAnswer: 4 },
                    { id: 5, question: "1What is 7 times 3", answers: [{ id: 1, option: "1", correct: false }], corrAnswer: 5 },
                    { id: 6, question: "1What is 8 times 3", answers: [{ id: 1, option: "1", correct: false }], corrAnswer: 6 },
                ],
                gamers: [
                    { id: 1, name: "Kristóf" },
                    { id: 2, name: "Barna" },
                    { id: 3, name: "Dóri" },
                    { id: 4, name: "Vivi" },
                    { id: 5, name: "Csanád" },
                    { id: 6, name: "Rita" },
                    { id: 7, name: "Zita" }
                ],
                description: "Második játék"
            },
            {
                id: 3,
                questions: [
                    { id: 1, question: "3What is 2 times 3", answers: [{ id: 1, option: "1", correct: false }, { id: 2, option: "1", correct: false }, { id: 3, option: "1", correct: false }, { id: 4, option: "6", correct: false }], corrAnswer: 1 },
                    { id: 2, question: "1What is 4 times 3", answers: [{ id: 1, option: "1", correct: false }, { id: 2, option: "1", correct: false }, { id: 3, option: "1", correct: false }, { id: 4, option: "12", correct: false }], corrAnswer: 2 },
                    { id: 3, question: "1What is 5 times 3", answers: [{ id: 1, option: "1", correct: false }, { id: 2, option: "1", correct: false }, { id: 3, option: "1", correct: false }, { id: 4, option: "15", correct: false }], corrAnswer: 3 },
                    { id: 4, question: "1What is 6 times 3", answers: [{ id: 1, option: "1", correct: false }, { id: 2, option: "1", correct: false }, { id: 3, option: "1", correct: false }, { id: 4, option: "18", correct: false }], corrAnswer: 4 },
                    { id: 5, question: "1What is 7 times 3", answers: [{ id: 1, option: "1", correct: false }, { id: 2, option: "1", correct: false }, { id: 3, option: "1", correct: false }, { id: 4, option: "21", correct: false }], corrAnswer: 5 },
                    { id: 6, question: "1What is 8 times 3", answers: [{ id: 1, option: "1", correct: false }, { id: 2, option: "1", correct: false }, { id: 3, option: "1", correct: false }, { id: 4, option: "24", correct: false }], corrAnswer: 6 },
                ],
                gamers: [
                    { id: 1, name: "Kristóf" },
                    { id: 2, name: "Barna" },
                    { id: 3, name: "Dóri" },
                    { id: 4, name: "Vivi" },
                    { id: 5, name: "Csanád" },
                    { id: 6, name: "Rita" },
                    { id: 7, name: "Zita" }
                ],
                description: "Harmadik játék"
            }
        ],
        answer: [
            { id: 1, answers: ["6"] },
            { id: 2, answers: ["9"] },
            { id: 3, answers: ["15"] },
            { id: 4, answers: ["18"] },
            { id: 5, answers: ["21"] },
            { id: 6, answers: ["24"] },
        ]
    }
    return data;

}