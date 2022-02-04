import React, { useState } from 'react';
import styles from "./counter.module.css"
//StrictMode fragment , <>,</>
const Counter = (props) => {
    const [count, setCounter] = useState(0);
    return (
        <div className={styles.App}>
            <h1>{props.name}</h1>
            <h2>{count}</h2>
            <div>
                <button onClick = {()=>setCounter(count+1)}>Increment</button>
                <button onClick = {()=>setCounter(count-1)}>Decrement</button>
                <button onClick = {()=>setCounter(count*2)}>Double</button>
            </div>
        </div>
    );
}

export default Counter;
