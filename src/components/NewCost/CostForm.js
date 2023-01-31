import './CostForm.css';
import React, { useState } from 'react';

const CostForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputSum, setInputSum] = useState('');
    const [inputDate, setInputDate] = useState('');

    // const [userInput, setUserInput] = useState({ -- альтернативный вариант использования одного состояния вместо нескольких useState
    //     name: '',
    //     amount: '',
    //     date: ''
    // })
    
    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
        // setUserInput({
        //     ...userInput, -- чтобы не терять другие св-ва объекта useState (выше)
        //     name: event.target.value
        // })
        //
        // -- самый безопасный способ обновленной функции (обновл. состояниния):
        //
        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         name: event.target.value
        //     }
        // })
    }
        const amountChangeHandler = (event) => setInputSum(event.target.value);
        const dateChangeHandler = (event) => setInputDate(event.target.value);

    const submitHandler = (event) => {
        event.preventDefault();
        const costData = {
            name: inputName,
            amount: inputSum,
            date: new Date(inputDate)
        };

        props.onSaveCostData(costData);
        setInputName('');
        setInputSum('');
        setInputDate('');
    }

    return (
    <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>
                    Title
                </label>
                <input type='text' value={inputName} onChange={nameChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>
                    Sum
                </label>
                <input type='number' min='0.01' step='0.01' value={inputSum} onChange={amountChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>
                    Date
                </label>
                <input type='date' min='2019-01-01' step='2023-12-31' value={inputDate} onChange={dateChangeHandler}/>
            </div>
            <div className='new-cost__actions'>
                <button type='submit'>Add Costs</button>
            </div>
        </div>
    </form>
    )
}

export default CostForm;