import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { Cesta } from './components/Cesta'
import { Productos } from './components/Productos'
import { Home } from './components/Home'
import { Producto } from './components/Producto'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home></Home>}>
              <Route index element={<Productos></Productos>}></Route>
              <Route path="*" element={<Productos></Productos>}></Route>
              <Route path="productos" element = {<Productos></Productos>}></Route>
              <Route path="productos/:id" element = {<Producto></Producto>}></Route>
              <Route path="cesta" element = {<Cesta></Cesta>}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
