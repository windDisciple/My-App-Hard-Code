import './CostItem.css';
import CostDate from './CostDate';
import Card from '..//UI/Card';
// import React, { useState } from 'react'; --"глупый" компонент, без состояния

function CostItem (props) {

    // const [title, setDescription] = useState(props.title);

    // const ChangeTitleHandler = () => {
    //     setDescription('New Cost'); // title = 'New Cost'; & CostItem(props);
    //     alert(title);
    // }

    return (
    <Card className='cost-item'>
        <CostDate date={props.date}/>
        <div className='cost-item__description'>
            <h2>{props.title}</h2>
            <div className='cost-item__price'>${props.amount}</div>
        </div>
        {/* <button onClick={ChangeTitleHandler}>Change description</button> */}
    </Card>
        );
}

export default CostItem;