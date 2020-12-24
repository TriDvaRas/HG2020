import './App.css';
import Main from './comp/Main.jsx'
import Decoraions from './comp/Decorations.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Decoraions/>
        <Main />
      </header>
    </div>
  );
}

export default App;
