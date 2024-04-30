import { useState } from "react";
import {
	useGetTodoIdQuery,
	useGetTodosQuery, 
	useGetPlaceholderIdQuery,
} from "./store/apis/todosApi";

export const TodoApp = () => {
	const [todoId, setTodoId] = useState(1);
	const { data: todos = [], isLoading: isLoadingTodos } = useGetTodosQuery();
	const {
		data: todo,
		isLoading: isLoadingTodo,
		error,
	} = useGetTodoIdQuery(todoId);

	const nextTodo = () => {
		setTodoId(todoId + 1);
	};
	const prevTodo = () => {
		if (todoId === 1) return;
		setTodoId(todoId - 1);
	};

	const datos  = useGetPlaceholderIdQuery()
	const {data, isLoading} = datos
	console.log("isLoading: ", isLoading);
	console.log(datos)

	return (
		<>
			<h1>Todos - RTK Query</h1>
			<hr />
			<div style={{ display: "grid" }}>
				<h3>is Loading... {isLoadingTodos ? "True" : "False"}</h3>
				<pre>{JSON.stringify(todo)}</pre>
				<div
					style={{ display: "flex", justifyContent: 'space-evenly'/* justifyContent: "space-around" */ }}>
					<button
						type='button'
						onClick={prevTodo}>
						Prev Button
					</button>
					<button
						type='button'
						onClick={nextTodo}>
						Next Button
					</button>
				</div>
				<ul>
					{todos.map((item) => (
						<li key={item.id}>
							<strong>
								{item.completed ? "Done " : "Pending  "}{" "}
							</strong>
							{"-  " + item.title}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
