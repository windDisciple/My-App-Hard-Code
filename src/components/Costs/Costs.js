import './Costs.css'
import CostItem from './CostItem';
import Card from '..//UI/Card';

function Costs(props) {
    return (
    <Card className='costs'>
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
    );
}

export default Costs;