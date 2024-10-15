import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from '../components/Header/Header'
import { Baner } from '../components/Baner/Baner'
import { Katalog } from '../components/Katalog/Katalog'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage/HomePage'
import { KatalogPage } from '../pages/KatalogPage/KatalogPage'
import { ProductPage } from '../pages/ProductPage/ProductPage'
import { UserPage } from '../pages/UserPage/UserPage'


function App() {
 

  return (
    <>
  
    <Header/>
    <Routes>
      
     <Route path='/' element ={<HomePage/>}/> 
     <Route path='/katalog' element ={<KatalogPage/>}/>
     <Route path='/katalog/:id' element ={<ProductPage/>}/>
     <Route path='/UserPage' element ={<UserPage/>}/>

    </Routes>
     
    </>
  )
}

export default App
