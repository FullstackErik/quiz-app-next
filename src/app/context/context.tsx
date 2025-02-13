import { createContext } from "react";
import {Inputs} from '../admin/page'

const Quiz = createContext<Inputs[] | null>(null);

function QuizProvider ({ children }: {children: React.ReactNode}) {

    return (

        <Quiz value={''}>
            {children}
        </Quiz>

    );
}

export {Quiz, QuizProvider}