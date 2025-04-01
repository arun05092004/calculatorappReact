import {useState} from "react";
const Calc=()=>{
  const [input,setInput]=useState('');
  const [result,setResult]=useState('');
  const handleClick=(value)=>{
    setInput(input+value)
  }
  const handleCancel=()=>{
    setInput('');
    setResult('')
  }
  const handleCalculate=()=>{
    try{
      const evalResult=eval(input);
      setResult(evalResult)
    }catch(error){
      setResult("error")
    }
  }
  return(
    <div className="calculator">
    <h1>Calculator App</h1>
    <input type="text" value={input} placeholder="0" disabled/>
    <h4>{result}</h4>
    <div className="cal-display">
    <button onClick={()=>handleClick('7')}>7</button>
    <button onClick={()=>handleClick('8')}>8</button>
    <button onClick={()=>handleClick('9')}>9</button>
    <button onClick={()=>handleClick('/')}>/</button>

    <button onClick={()=>handleClick('4')}>4</button>
    <button onClick={()=>handleClick(5)}>5</button>
    <button onClick={()=>handleClick('6')}>6</button>
    <button onClick={()=>handleClick('*')}>*</button>

    <button onClick={()=>handleClick('1')}>1</button>
    <button onClick={()=>handleClick('2')}>2</button>
    <button onClick={()=>handleClick('3')}>3</button>
    <button onClick={()=>handleClick('-')}>-</button>

    <button onClick={()=>handleClick('0')}>0</button>
    <button onClick={()=>handleClick('.')}>.</button>
    <button onClick={handleCalculate}>=</button>
    <button onClick={()=>handleClick('+')}>+</button>
    <button onClick={handleCancel}>C</button>
    </div>
    </div>
  )
}
export default Calc;