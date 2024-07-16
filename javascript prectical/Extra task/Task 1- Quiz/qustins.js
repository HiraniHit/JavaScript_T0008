const questions = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correct: "Paris",
    },
    {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correct: "Mars",
    },
    {
        id: 3,
        question: "Who wrote 'Hamlet'?",
        options: [
            "William Shakespeare",
            "Jane Austen",
            "Charles Dickens",
            "Leo Tolstoy",
        ],
        correct: "William Shakespeare",
    },
    {
        id: 4,
        question: "Which of these is a mammal?",
        options: ["Snake", "Lion", "Crocodile", "Turtle"],
        correct: "Lion",
    },
    {
        id: 5,
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        correct: "H2O",
    },
    {
        id: 6,
        question: "Who painted the Mona Lisa?",
        options: [
            "Leonardo da Vinci",
            "Pablo Picasso",
            "Vincent van Gogh",
            "Michelangelo",
        ],
        correct: "Leonardo da Vinci",
    },
    {
        id: 7,
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["Japan", "China", "India", "South Korea"],
        correct: "Japan",
    },
    {
        id: 8,
        question: "Who discovered penicillin?",
        options: [
            "Alexander Fleming",
            "Louis Pasteur",
            "Marie Curie",
            "Isaac Newton",
        ],
        correct: "Alexander Fleming",
    },
    {
        id: 9,
        question: "Which city hosted the 2016 Summer Olympics?",
        options: ["Rio de Janeiro", "Tokyo", "London", "Sydney"],
        correct: "Rio de Janeiro",
    },
    {
        id: 10,
        question: "Who wrote 'The Great Gatsby'?",
        options: [
            "F. Scott Fitzgerald",
            "Ernest Hemingway",
            "Mark Twain",
            "Charles Dickens",
        ],
        correct: "F. Scott Fitzgerald",
    },
    {
        id: 11,
        question: "Which is the largest ocean on Earth?",
        options: [
            "Pacific Ocean",
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
        ],
        correct: "Pacific Ocean",
    },
    {
        id: 12,
        question: "Who developed the theory of relativity?",
        options: [
            "Albert Einstein",
            "Isaac Newton",
            "Galileo Galilei",
            "Stephen Hawking",
        ],
        correct: "Albert Einstein",
    },
    {
        id: 13,
        question: "Which city is known as the Big Apple?",
        options: ["New York City", "Los Angeles", "Chicago", "Boston"],
        correct: "New York City",
    },
    {
        id: 14,
        question: "What is the longest river in the world?",
        options: [
            "Amazon River",
            "Nile River",
            "Yangtze River",
            "Mississippi River",
        ],
        correct: "Amazon River",
    },
    {
        id: 15,
        question: "Who painted the 'Starry Night'?",
        options: [
            "Vincent van Gogh",
            "Pablo Picasso",
            "Claude Monet",
            "Leonardo da Vinci",
        ],
        correct: "Vincent van Gogh",
    },
];
localStorage.setItem("questions", JSON.stringify(questions));
