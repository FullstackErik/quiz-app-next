"use client";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { QuizContext } from "../context/context";
import Link from "next/link";


export type Inputs = {
    Question: string,
    allAnswer: 
    {
        answer1: string,
        answer2: string,
        answer3: string,
        answer4: string,
    }
}

export default function Admin() {

    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()

    const context = useContext(QuizContext)

    if(!context) {
        throw new Error("Error, couldn't get context");
    }

    const {setQuestions} = context;
    console.log("context:", context)

    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
        console.log(data);
        setQuestions((prev) => [...prev, data]);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-100 h-100 flex flex-col gap-4 place-items-center">
            <input placeholder="Question" className="p-3 border-2 w-2/3" style={{color: "black"}} defaultValue="" {...register("Question")} />
            <input placeholder="answer one"className="p-3 border-2 w-2/3"style={{color: "black"}} defaultValue=""{...register("allAnswer.answer1", { required: true })} />
            <input placeholder="answer two"className="p-3 border-2 w-2/3"style={{color: "black"}} defaultValue=""{...register("allAnswer.answer2", { required: true })} />
            <input placeholder="answer three"className="p-3 border-2 w-2/3"style={{color: "black"}} defaultValue=""{...register("allAnswer.answer3", { required: true })} />
            <input placeholder="answer four"className="p-3 border-2 w-2/3" style={{color: "black"}} defaultValue=""{...register("allAnswer.answer4", { required: true })} />
            <button type="submit" className="w-fit h-fit p-5 bg-green-500">Submit question</button>
            <Link href="/quiz">Click here to get to quiz</Link>
        </form>
    )
}
