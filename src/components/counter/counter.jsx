import { useState } from "react";
import style from './counter.module.css';

const initialCount = 0;

const Counter = ({ step }) => {

    const [count, setCount] = useState(initialCount);

    const handleIncr = () => {
        setCount(count => count + step);
    };

    const handleReset = () => {
        setCount(initialCount);
    };

    return (
        <div className={style.display}>
            <p>{count}</p>
            <div className={style.buttons}>
                <button onClick={handleIncr}>+ {step}</button>
                {count !== initialCount && (
                    <button onClick={handleReset}>Reset</button>
                )}
            </div>
        </div>
    );
};

Counter.defaultProps = {
    step: 1
};

export default Counter;