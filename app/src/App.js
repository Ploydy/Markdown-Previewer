import './App.css';
import Editor from './components/editor';
import Previewer from './components/previewer';
function App() {
  return (
    <div className="App">
      <Editor />
      <div>
        <Previewer />
      </div>
    </div>
  );
}

export default App;
