import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cesta } from './Cesta'
import { Productos } from './Productos'
import { Home } from './Home'
import { Producto } from './Producto'

const queryClient = new QueryClient();

export function App() {
    return(
    <QueryClientProvider client={queryClient}>
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
  </QueryClientProvider>
)}

