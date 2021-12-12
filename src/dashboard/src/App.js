import './App.css';
import LastProduct from "./components/LastProduct";
import PanelTotales from './components/PanelTotales';
import TotalCategories from './components/TotalCategories';

function App() {
  return (
    <div className="App">
      <LastProduct/>
    </div>
  )
}

function TotalC() {
  return (
    <div className="App">
      <TotalCategories/>
    </div>
  )
}

function PanelT() {
  return (
    <div className="App">
      <PanelTotales/>
    </div>
  )
}

export default App;