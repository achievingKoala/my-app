import logo from './logo.svg';
import './App.css';
import SpacebarCounter from './SpacebarCounter';
import Counter from './Counter';
import NoteList from './NoteList';
import ToDo from './ToDo';
import { HelloWorld, HelloName, HelloVar, TestJSX} from './HelloWorld';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      {/* <NoteList></NoteList> */}
      <HelloVar name="999"></HelloVar>
      <ToDo></ToDo>
      {/* <HelloWorld></HelloWorld>
      <HelloName></HelloName>
      <TestJSX></TestJSX> */}
      {/* <SpacebarCounter></SpacebarCounter> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
