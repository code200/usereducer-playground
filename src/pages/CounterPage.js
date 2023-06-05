import { useState } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [numberToAdd, setNumberToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // const number = formData.get('number');

    setCount(count + Number(numberToAdd));
    setNumberToAdd(0);
  };
  const handleNumberChange = event => {
    setNumberToAdd(+event.target.value); // if user hits delete key, NaN will be the value.
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleFormSubmit}>
        <label>Add this number:</label>
        <input
          value={numberToAdd || ''}
          onChange={handleNumberChange}
          name="number"
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
