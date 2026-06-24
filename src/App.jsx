import Counter from "./components/Counter";
import Logo from "./components/Logo";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Logo />

      <h2 className="heading">
        React Custom Hook Demonstration
      </h2>

      <div className="counter-grid">
        <Counter
          title="score"
          initialValue={0}
          step={1}
        />

        <Counter
          title="score"
          initialValue={50}
          step={5}
        />

        <Counter
          title="Score"
          initialValue={100}
          step={10}
        />
      </div>
    </div>
  );
}

export default App;