import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from './views/Inicio';
import DetallesCampeon from './views/DetallesCampeon';
import Items from './views/Items';

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/:champion' element={<DetallesCampeon></DetallesCampeon>}></Route>
        <Route exact path='/items' element={<Items></Items>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
