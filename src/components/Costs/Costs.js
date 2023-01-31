import './Costs.css'
import CostItem from './CostItem';
import Card from '..//UI/Card';
import CostsFilter from './CostsFilter';
import React, { useState } from 'react';

function Costs(props) {

    const [selectedYear, setSelectedYear] = useState ('2020');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
}

    return (
    <div>
        <Card className='costs'>
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/> {/*здесь контролируемый Costs компонент*/}
        <CostItem 
        date={props.costs[0].date}
        title={props.costs[0].title}
        amount={props.costs[0].amount}/>    
        <CostItem 
        date={props.costs[1].date}
        title={props.costs[1].title}
        amount={props.costs[1].amount}/>
        <CostItem 
        date={props.costs[2].date}
        title={props.costs[2].title}
        amount={props.costs[2].amount}/>
    </Card>
    </div>
    );
}

export default Costs;