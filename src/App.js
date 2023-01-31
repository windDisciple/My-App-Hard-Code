import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {

const costs = [
  {
    id: 'c1',
    date: new Date (2022, 2, 12),
    title: 'Refrigerator',
    amount: 999.9
  },
  {
    
    id: 'c2',
    date: new Date (2022, 5, 1),
    title: 'Play Station',
    amount: 2000.00
  },
  {
    id: 'c3',
    date: new Date (2022, 11, 7),
    title: 'Boots',
    amount: 5.00
  }
]

const addCostHandler = (cost) => {
  console.log(cost);
  console.log('App Component');
}

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
        <Costs costs={costs}/>
    </div>
  );
}

export default App;

