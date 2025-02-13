"use client";
import { createContext, useState } from "react";
import {Inputs} from '../admin/page'

interface QuestionProps {
    questions: Inputs[],
    setQuestions: React.Dispatch<React.SetStateAction<Inputs[]>>;
}

const QuizContext = createContext<QuestionProps | null>(null);


function QuizProvider ({ children }: {children: React.ReactNode}) {

    const [questions, setQuestions] = useState<Inputs[]>([]);


    return (

        <QuizContext value={{questions,setQuestions}}>
            {children}
        </QuizContext>

    );
}

export {QuizContext, QuizProvider}