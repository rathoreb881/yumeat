import React, { useContext } from 'react'
import DeliveryApp from './deliveryApp'
import Toppicks from './toppicks'
import OurMeal from './OurMeal'
import Features from './features'
import {storeContext} from '../Context/store.context'
import Footbar from './footbar'
import TopNav from './topNav'

const Home = () => {
  const{dropMenu,setDropMenu}=useContext(storeContext)
  return (
    <div onClick={()=>setDropMenu(false)}>
        
        <DeliveryApp/>
        <Toppicks/>
        <OurMeal/>
        <Features/>
        <Footbar/>
    </div>
  )
}

export default Home