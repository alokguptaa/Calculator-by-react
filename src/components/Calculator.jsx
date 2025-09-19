import { useState } from "react";

function Calculator() {
    const [input, setInput] = useState("");

    const handleClick = (value) => setInput(input + value);
    const handleClear = () => setInput("");
    const handleBackspace = () => setInput(input.slice(0, -1));
    const handleCalculate = () => {
    try {
        setInput(eval(input).toString());
    } catch {
        setInput("Error");
    }
    };

return (
    <div className="container">
        <div className="calculator">
        <form>

            <div className="display">
                <input type="text" value={input} readOnly />
            </div>

        <div>
            <input type="button" value="AC" onClick={handleClear} className="operator" />
            <input type="button" value="DE" onClick={handleBackspace} className="operator" />
            <input type="button" value="." onClick={() => handleClick(".")} />
            <input type="button" value="/" onClick={() => handleClick("/")} className="operator" />
        </div>

        <div>
            <input type="button" value="7" onClick={() => handleClick("7")} />
            <input type="button" value="8" onClick={() => handleClick("8")} />
            <input type="button" value="9" onClick={() => handleClick("9")} />
            <input type="button" value="*" onClick={() => handleClick("*")} className="operator" />
        </div>

        <div>
            <input type="button" value="4" onClick={() => handleClick("4")} />
            <input type="button" value="5" onClick={() => handleClick("5")} />
            <input type="button" value="6" onClick={() => handleClick("6")} />
            <input type="button" value="−" onClick={() => handleClick("-")} className="operator" />
        </div>

        <div>
            <input type="button" value="1" onClick={() => handleClick("1")} />
            <input type="button" value="2" onClick={() => handleClick("2")} />
            <input type="button" value="3" onClick={() => handleClick("3")} />
            <input type="button" value="+" onClick={() => handleClick("+")} className="operator" />
        </div>

        <div>
            <input type="button" value="00" onClick={() => handleClick("0")} />
            <input type="button" value="0" onClick={() => handleClick("0")} />
            <input type="button" value="=" onClick={handleCalculate} className="equal operator" />
        </div>

        </form>
        </div>
    </div>
    );
}

export default Calculator;
