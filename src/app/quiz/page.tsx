"use client";
import { useState, useContext, useEffect } from "react";
import { QuizContext } from "../context/context";

export default function DisplayQuiz() {
    const [count, setCount] = useState<number>(0);

    const context = useContext(QuizContext)

    if(!context) {
        throw new Error("Error, couldn't get context");
    }

    const {questions} = context;

    const handleQuestions = () => {
        setCount((prev) => prev + 1);
    }

    return (
        <>
            <div className="flex flex-col w-300 h-300 place-items-center m-24 bg-slate-400">
                <h3>{questions[count].Question}</h3>
                <p>{questions[count].allAnswer.answer1}</p>
                <p>{questions[count].allAnswer.answer2}</p>
                <p>{questions[count].allAnswer.answer3}</p>
                <p>{questions[count].allAnswer.answer4}</p>
                <button className="w-fit h-fit p-2 rounded-md place-items-center bg-slate-50 text-black" onClick={handleQuestions}>Next question</button>

            </div>

        </>

    )

}