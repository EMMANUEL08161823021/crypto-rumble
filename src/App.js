import React, { useEffect, useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import axios from 'axios';
import Navbar from '../src/components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from '../src/components/About/About';
import Header from './components/Header/Header';
import Coins from '../src/components/Coins/Coins'
import Card from '../src/components/Card/Card';
import Coin from './components/Routes/Coin';
import Footer from './components/Footer/Footer';


function App() {

  const [ coins, setCoins ] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en`

  useEffect(()=> {
    axios.get(url).then((response) => {
      setCoins(response.data);
      console.log(response.data[0]);
    }).catch((error) => {
      console.log(error);
    })
  }, [])
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
      </Routes> 
      <Routes>
        <Route path='/' element={<Hero/>}/>
      </Routes> 
      <Routes>
        <Route path='/' element={<About/>}/>
      </Routes>       

      <Header/> 
      <Routes>
        <Route path='/' element={<Coins coins={coins}/>}/>
        <Route path='/coin' element={<Coin/>}>
          <Route path=':coinId' element={<Coin/>}/>
        </Route>
      </Routes>
      <Routes>
        <Route path='/' element={<Card/>}/>
      </Routes>  
      <Routes>
      <Route path='/' element={<Footer/>}/>
      </Routes>  

      
      
      
      
    </>
  );
}

export default App;
