import './App.css';
import LastProduct from "./components/LastProduct";
import PanelTotales from './components/PanelTotales';
import TotalCategories from './components/TotalCategories';

function App() {
  return (
    <div className="App">
      <LastProduct/>
      <TotalCategories/>
      <PanelTotales/>
    </div>
  )
}

export default App;