// import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          <Route path='/CART' element={<h3>PROXIMAMENTE VERÁ AQUÍ SU CARRITO DE COMPRAS</h3>} />
        </Routes>
        <div style={{ marginTop: '50px' }}> {/* Agrega margen inferior */}
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;