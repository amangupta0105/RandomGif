import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className="App">
      <h1 className='heading'>Random Gif</h1>
        <Random/>
        <Tag/>
    </div>
  );
}

export default App;
