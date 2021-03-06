import './App.css';
import LastProduct from "./components/LastProduct";
import PanelTotales from './components/PanelTotales';
import TotalCategories from './components/TotalCategories';
import ProductList from './components/ProductList';


function App() {
  return (
    <div className="App">
      <LastProduct/>
      Cantidad de Categorias
      <TotalCategories/>
      Panel listado de Productos
      <PanelTotales/>
    </div>
  )
}

export default App;