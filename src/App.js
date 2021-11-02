import React, { useState } from 'react'
import FlashcardList from './FlashcardList'
import './app.css'

const App = () => {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)

    return (
        <div>
            <FlashcardList flashcards={flashcards} />
        </div>
    )
}

const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: 'What is the size of the sun',
        answer: "10000000mi",
        options: [
            '10000000mi',
            '2045643453km',
            '3425454353454mi',
            '250 Earths'
        ]
    },
    {
        id: 2,
        question: 'Q2',
        answer: "Answer",
        options: [
            'Answer',
            'Yess',
            'Answer3',
            'Answer4'
        ]
    },
 ]

export default App
