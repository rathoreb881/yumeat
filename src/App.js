import Toppicks from './Components/toppicks';
import './App.css';
import TopNav from './Components/topNav';
import Features from './Components/features';
import DeliveryApp from './Components/deliveryApp';
import OurMeal from './Components/OurMeal';
import Footbar from './Components/footbar';
function App() {
  return (
    <div className="App">
     <TopNav/>
     <Features/>
     <DeliveryApp/>
     <Toppicks/>
     <OurMeal/>
     <Footbar/>
    </div>
  );
}

export default App;
