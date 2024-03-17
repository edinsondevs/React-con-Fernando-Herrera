import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
  
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    const [incompleted, setIncompleted] = useState(0)    

    let allTodos = todos.length
    const onSubmitForm = (onNewTodo) => {
        const action = {
            type: "[TODO] Add Todo",
            payload: onNewTodo,
        };
        dispatch(action);
    };

    const handelDeleteTodo = (id) =>  {
        dispatch({
            type: "[TODO] Delete Todo",
            payload: id,
        });
    };

    const onToggleTodo = (id) =>  {
        dispatch({
            type: "[TODO] Toggle Todo",
            payload: id,
        });
    }; 

    useEffect(()=>{
        setIncompleted(todos.filter(e => {
            return e.done === false  
        }).length )       
    },[todos])

    return{
        todos, 
        allTodos,
        incompleted,
        handelDeleteTodo, 
        onToggleTodo, 
        onSubmitForm
    }
}
