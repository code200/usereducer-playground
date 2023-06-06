import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const ACTION_TYPES = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  ADD_NUMBER: 'add_number',
  SET_NUMBER_TO_ADD: 'set_number_to_add',
};

const reducer = (state, action) => {
  console.log('reducer current state', state);
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION_TYPES.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTION_TYPES.ADD_NUMBER:
      return { ...state, count: state.count + action.payload };
    case ACTION_TYPES.SET_NUMBER_TO_ADD:
      return { ...state, numberToAdd: action.payload };
    default:
      return state;
  }

  // whatever we return from the reducer becomes the new state.
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    numberToAdd: 0,
  });

  const increment = () => {
    dispatch({ type: ACTION_TYPES.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTION_TYPES.DECREMENT });
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // const number = formData.get('number');

    dispatch({ type: ACTION_TYPES.ADD_NUMBER, payload: state.numberToAdd });
    dispatch({ type: ACTION_TYPES.SET_NUMBER_TO_ADD, payload: 0 });
  };
  const handleNumberChange = event => {
    dispatch({
      type: ACTION_TYPES.SET_NUMBER_TO_ADD,
      payload: +event.target.value,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleFormSubmit}>
        <label>Add this number:</label>
        <input
          value={state.numberToAdd || ''}
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
