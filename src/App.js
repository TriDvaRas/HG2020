import './App.css';
import Main from './comp/Main.jsx'
import Decoraions from './comp/Decorations.jsx'
import { BrowserView } from 'react-device-detect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserView>
          <Decoraions />
        </BrowserView>
        <Main />

      </header>
    </div>
  );
}

export default App;
