
import './App.css';

import List from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <List itemList={["Get milk", "Buy Amazon", "Take over the world"]} />
        <List itemList={["Get bread", "Get eggs"]} />

      </header>
    </div>
  );
}

export default App;
