import Toppicks from './Components/toppicks';
import './App.css';
import TopNav from './Components/topNav';
import Features from './Components/features';
import DeliveryApp from './Components/deliveryApp';
import OurMeal from './Components/OurMeal';
import Footbar from './Components/footbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/cart';
import Home from './Components/home';
import StoreContextProvider from './Context/store.context';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       
      <StoreContextProvider>
      <TopNav/>
         <Routes>
          
           <Route path='/cart' element ={<Cart/>}/>
           <Route path='/' element ={<Home/>}/>
          
         </Routes>
         
         </StoreContextProvider> 
      </BrowserRouter>
          
    </div>
  );
}

export default App;
