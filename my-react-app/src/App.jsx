import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Container, Stack, ThemeProvider} from '@mui/material'

import Hero from './component/Hero'
import Menu2 from './component/Menu2'  
import ProductPage from './component/ProductPage'
import ViewDemo from './component/ViewDemo'
import ViewDemo2 from './component/ViewDemo2'
import ViewDemo3 from './component/ViewDemo3'
import Structure from './Structure'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Component3 from './component/Component3'
import Skills from './component/Skills'
import { defaultTheme } from './theme'
import ProjectPage from './component/ProjectPage'
import About from './component/About'
function App() {
 

  return (
    <>
    
  
 <ThemeProvider theme={defaultTheme}>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Structure/>}>
  <Route index element={<Hero/>}/>
  <Route path= "/projects" element={<ProjectPage/>}/>
    <Route path= "/demo1" element={<ViewDemo/>}/>
    <Route path= "/demo2" element={<ViewDemo2/>}/>
    <Route path= "/demo3" element={<ViewDemo3/>}/>
     <Route path= "/skills" element={<Skills/>}/>
      <Route path= "/about" element={<About/>}/>
</Route>
</Routes>
</BrowserRouter></ThemeProvider>


   
    </>
  )
}

export default App
