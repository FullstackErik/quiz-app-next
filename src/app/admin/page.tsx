"use client";
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
    Question: string
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

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


    console.log("hej")


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input style={{color: "black"}} defaultValue="" {...register("Question")} />
            <input style={{color: "black"}} defaultValue=""{...register("allAnswer.answer1", { required: true })} />
            <input style={{color: "black"}} defaultValue=""{...register("allAnswer.answer2", { required: true })} />
            <input style={{color: "black"}} defaultValue=""{...register("allAnswer.answer3", { required: true })} />
            <input style={{color: "black"}} defaultValue=""{...register("allAnswer.answer4", { required: true })} />
            
            <input type="submit" />
            <select/>
        </form>
    )
}
