import './App.css';
import Todos from './component/Todos';
import AddTodos from './component/AddTodos';

function App() {
  return (
    <div className="App">
      <Todos/>
      <AddTodos/>      
    </div>
  );
}

export default App;
