import "./App.css";
import DaysData from "./components/data/daysData";
import SalesData from "./components/sales/salesData";

function App() {
  return (
    <div className="section">
      <SalesData />
    
      <DaysData/>
    </div>
  );
}

export default App;
