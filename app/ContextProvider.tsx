import { useReducer } from "react"
import { TasksContext, TasksDispatchContext } from "./TasksContext"
import { Task } from "./Task";
import { tasksReducer } from "./tasksReducer";
import * as Crypto from 'expo-crypto';

const initialTasks: Task[] = [
    new Task(Crypto.randomUUID(), "Study Typescript", true, new Date("2024-06-21"), new Date("2024-06-22")),
    new Task(Crypto.randomUUID(), "Study React", false, new Date("2024-06-21"), null),
    new Task(Crypto.randomUUID(), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", false, new Date("2024-06-21"), null),
    new Task(Crypto.randomUUID(), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", false, new Date("2024-06-21"), null)
];

export interface ContextProviderProps {
    children: any //TODO: check type
}

const ContextProvider = (props: ContextProviderProps) => {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

    return (
        <TasksDispatchContext.Provider value={dispatch}>
            <TasksContext.Provider value={tasks}>
                {props.children}
            </TasksContext.Provider>
        </TasksDispatchContext.Provider>
    )
}

export default ContextProvider