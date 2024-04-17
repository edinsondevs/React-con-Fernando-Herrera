import { useState } from "react";
import { useGetTodoIdQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
    const [todoId, setTodoId] = useState(1)
	const { data: todos = [], isLoading: isLoadingTodos } = useGetTodosQuery();
    const { data: todo, isLoading: isLoadingTodo, error } = useGetTodoIdQuery(343534534534534);

    const nextTodo = () => {
        setTodoId( todoId + 1)
    };
    const prevTodo = () => {
        if( todoId === 1 ) return
        setTodoId( todoId - 1)
    };
    
	return (
		<>
			<h1>Todos - RTK Query</h1>
			<hr />
 			<h3>is Loading... {isLoadingTodos ? 'True': 'False'}</h3>
            <pre>{ JSON.stringify(todo)}</pre>
            <ul>
                { todos.map(item =>(
                    <li key={item.id}>
                        <strong>{item.completed ? 'Done ' : 'Pending  '} </strong>{'-  ' + item.title}</li>
                ))}
            </ul>
			<button type='button' onClick={prevTodo}>Prev Button</button>
			<button type='button' onClick={nextTodo}>Next Button</button>
		</>
	);
};
