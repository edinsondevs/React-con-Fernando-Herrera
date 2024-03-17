import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
    const [count, setCount] = useState(value);
    console.log('renderCounter');
    const handleAdd = () => setCount(count + 1 )
    const handleSubtract = () => setCount(count - 1)
    const handleReset = () => setCount(value)

    return (
        <>
            <h1>CounterApp</h1>
            {/* <h2>{value}</h2> */}
            <h2>{count}</h2>
            <button  onClick={handleAdd}>Sumar</button>
            <button  onClick={handleSubtract}>Restar</button>
            <button aria-label="btnReset" onClick={handleReset}>Reset</button>
            {/* <button  onClick={()=>setCount(count + 1)}>Sumar</button>
          <button  onClick={()=>setCount(count - 1)}>Restar</button> */}
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};
