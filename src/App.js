
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';
import Add from './components/Add.js'

import './lib/font-awesome/css/all.min.css'

const App =() =>  {
  return (

   

    <Routes>
      <Route path='/' element={ <Navigation /> } >

      
        <Route index element={<Watchlist />} /> 
        <Route path="watched" element={<Watched />} /> 
        <Route path="add" element={<Add/>} /> 

      </Route>
    </Routes>
  )
}

export default App;
