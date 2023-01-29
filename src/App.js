import Costs from "./components/Costs/Costs";

function App() {

const costs = [
  {
    date: new Date (2022, 2, 12),
    title: 'Refrigerator',
    amount: 999.9
  },
  {
    date: new Date (2022, 5, 1),
    title: 'Play Station',
    amount: 2000.00
  },
  {
    date: new Date (2022, 11, 7),
    title: 'Boots',
    amount: 5.00
  }
]

  return (
    <div>
      <h1>
        React studying
      </h1>
        <Costs costs={costs}/>
    </div>
  );
}

export default App;

