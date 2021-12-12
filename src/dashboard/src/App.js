import './App.css';
import LastProduct from "./components/LastProduct";
import totalCategories from './components/totalCategories';

function App() {
  return (
    <div className="App">
      <LastProduct/>
    </div>
  )
}

function categorias() {
  return (
    <div className="App">
      <totalCategories/>
    </div>
  )
}

export default App;
