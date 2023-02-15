import { useState } from "react";
import operatorEnum from "../../enums/operator.enum";

const numberRegex = /^[0-9]*$/;

const Calculator = () => {

    const [nb1, setNb1] = useState('');
    const [nb2, setNb2] = useState('');
    const [op, setOp] = useState(operatorEnum.add);
    const [result, setResult] = useState('');

    const setStateNumber = (val, setState) => {
        if (numberRegex.test(val)) {
            setState(val);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const val1 = parseFloat(nb1);
        const val2 = parseFloat(nb2);

        switch (op) {
            case operatorEnum.add:
                setResult(val1 + val2);
                break;
            case operatorEnum.sub:
                setResult(val1 - val2);
                break;
            case operatorEnum.div:
                setResult(val2 !== 0 ? (val1 / val2) : 'Division par zero 🤦‍♂️');
                break;
            case operatorEnum.mult:
                setResult(val1 * val2);
                break;
            default:
                setResult('Operation non supporté 🙀');
                break;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Nombre 1 : </label>
                <input type="text"
                    value={nb1} onChange={(e) => setStateNumber(e.target.value, setNb1)} />
            </div>
            <div>
                <label htmlFor="">Operation : </label>
                <select id="" value={op} onChange={(e) => setOp(e.target.value)} >
                    <option value={operatorEnum.add}>+</option>
                    <option value={operatorEnum.sub}>-</option>
                    <option value={operatorEnum.mult}>x</option>
                    <option value={operatorEnum.div}>/</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Nombre 2 : </label>
                <input type="text"
                    value={nb2} onChange={(e) => setStateNumber(e.target.value, setNb2)} />
            </div>
            <div>
                <button type="submit">Calculer</button>
                <input type="text" readOnly value={result} />
            </div>
        </form>
    );
};

export default Calculator;