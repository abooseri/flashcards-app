import React, { useState, useEffect } from 'react'
import FlashcardList from './FlashcardList'
import './app.css'
import axios from 'axios'

const App = () => {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)


    useEffect(() => {
axios.get('https://opentdb.com/api.php?amount=10')
        .then(res => {
           setFlashcards(res.data.results.map((questionItem, index) => {
               const answer = questionItem.correct_answer
               const options = [...questionItem.incorrect_answers, answer]
                return {
                    id: `${index}-${Date.now()}`,
                    question: questionItem.question,
                    answer: answer,
                    options: options.sort(() => Math.random() - .5)


                }
            }))
        })
    }, [])

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
