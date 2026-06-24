import useCounter from "../hooks/useCounter";

const Counter = ({ title, initialValue, step }) => {
  const {
    count,
    increment,
    decrement,
    reset,
  } = useCounter(initialValue, step);

  return (
    <div className="counter-card">
      <h3>{title}</h3>

      <div className="count">{count}</div>

      <span className="step">
        Step: {step}
      </span>

      <div className="btn-group">
        <button onClick={increment}>
          Increment
        </button>

        <button onClick={decrement}>
          Decrement
        </button>

        <button onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;