import React, {useState} from "react";

export default function Calculator(){

    const [currentValue, setCurrentValue] = useState('')
    const [previousValue, setPreviousValue] = useState('')
    const [previousValueArray, setPreviousValueArray] = useState([])
    let value = ''
    let previousValueNumber = ''

    function newValueHandler(e){
        if(currentValue === ''){
            setCurrentValue(e.target.value)
        }else if(currentValue.length == 23){
            console.log("Cannot add anymore numbers")
        }else{
            setCurrentValue(currentValue + '' + e.target.value) 
        }
    }

    function divisionHandler(){
        if(currentValue != ''){
            if(previousValue != ''){
                setPreviousValue(previousValue + " " + currentValue + " /")
                setCurrentValue('')
            }else{
                setPreviousValue(currentValue + " /")
                setCurrentValue('')
            }   
            console.log('you clicked the division handler, the current previous value is', previousValue)
        }else{
            console.log("there are no numbers to divide")
        }
    }

    function multiplyHandler(){
        if(currentValue != ''){
            if(previousValue != ''){
                setPreviousValue(previousValue + " " + currentValue + " *")
                setCurrentValue('')
            }else{
                setPreviousValue(currentValue + " *")
                setCurrentValue('')
            }   
            console.log('you clicked the multiply handler, the current previous value is', previousValue)
        }else{
            console.log("there are no numbers to multiply")
        }
    }

    function plusHandler(){
        if(currentValue != ''){
            if(previousValue != ''){
                setPreviousValue(previousValue + " " + currentValue + " +")
                setCurrentValue('')
            }else{
                setPreviousValue(currentValue + " +")
                setCurrentValue('')
            }   
            console.log('you clicked the plus handler, the current previous value is', previousValue)
        }else{
            console.log("there are no numbers to add")
        }
    }

    function minusHandler(){
        if(currentValue != ''){
            if(previousValue != ''){
                setPreviousValue(previousValue + " " + currentValue + " -")
                setCurrentValue('')
            }else{
                setPreviousValue(currentValue + " -")
                setCurrentValue('')
            }   
            console.log('you clicked the plus handler, the current previous value is', previousValue)
        }else{
            console.log("there are no numbers to add")
        }
    }
    
    function equalHandler(){
        let formula
        if(currentValue){
            formula = previousValue + " " + currentValue
        }else{
            formula = previousValue.slice(0, -1)
            console.log('the formula bugged')
        }
        let result = eval(formula)
        setCurrentValue(result)
        setPreviousValue('')
        // setCurrentValue()
    }

    function dotHandler(){
        if(currentValue != ''){
            console.log('you clicked the dot handler')
            if(currentValue.slice(-1) != "."){
                setCurrentValue(currentValue + ".")
            }
        }
    }

    function deleteHandler(){
        if(currentValue != ''){
            setCurrentValue(currentValue.slice(1))
        }
    }

    function allClear(){
       setCurrentValue('')
       setPreviousValue('')
       setPreviousValueArray('')
    }

    return(
        <div className="calculator-container">
            <div className="result">
                <div className="previousOutput">{previousValue}</div>
                <div>{currentValue}</div>
            </div>
            <div className="calculator-inner">
            <button onClick={allClear} className="ac-container all-clear">AC</button>
               <button onClick={deleteHandler} className="delete">DEL</button>
               <button onClick={divisionHandler} className="division">/</button>
               <button onClick={newValueHandler} value={1}>1</button>
               <button onClick={newValueHandler} value={2}>2</button>
               <button onClick={newValueHandler} value={3}>3</button>
               <button onClick={multiplyHandler} className="multiply">*</button>
               <button onClick={newValueHandler} value={4}>4</button>
               <button onClick={newValueHandler} value={5}>5</button>
               <button onClick={newValueHandler} value={6}>6</button>
               <button onClick={plusHandler} className="plus">+</button>
               <button onClick={newValueHandler} value={7}>7</button>
               <button onClick={newValueHandler} value={8}>8</button>
               <button onClick={newValueHandler} value={9}>9</button>
               <button onClick={minusHandler} className="minus">-</button>
               <button onClick={dotHandler} className="dot">.</button>
               <button onClick={newValueHandler} value={0}>0</button>
               <button onClick={equalHandler} className="equal-container equal">=</button>
            </div>
        </div>
    )
}