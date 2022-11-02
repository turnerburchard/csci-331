import './App.css';
import Counter from "./components/counter";
import Github from "./components/github";

function App() {
  return (
    <div>
        <h1>Turner's React App</h1>
        <h2>Running on Port 5058</h2>
        <Counter increment={1}/>
        <Counter increment={7687687970}/>
        <Github />


    </div>
  );
}

export default App;
