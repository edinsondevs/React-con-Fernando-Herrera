import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
	decrement,
	increment,
	incrementByAmount,
} from "./store/slices/counter";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function App() {
	const { counter } = useSelector((state) => state.counter);
	const dispatch = useDispatch();
  const [initialCounter, setInitialCounter] = useState(10)
	return (
		<>
			<div>
				<div className='form-group'>
					<input
						type='number'
						className='form-control'
						// placeholder=''
						value={initialCounter}
						onChange={(e) => setInitialCounter(e.target.value)}
					/>
				</div>
			</div>
			<h1>Count is: {counter}</h1>
			<div
				className='card'
				style={{ padding: 3 }}>
				<button
					style={{ margin: 10 }}
					onClick={() => dispatch(increment())}>
					Incrementar
				</button>
				<button
					style={{ margin: 10 }}
					onClick={() => dispatch(decrement())}>
					Decrementar
				</button>
				<button
					style={{ margin: 10 }}
					onClick={() => dispatch(incrementByAmount(Number(initialCounter)))}>
					Incrementar en {initialCounter}
				</button>
			</div>
		</>
	);
}

export default App;
