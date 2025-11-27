import { useState , createContext, useEffect} from 'react'
import './App.css'
import HomePage from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout'
import MainConfing from "./configs/global.json"
import { GlobalManagment } from '../lib/global'
import NotFoundPage from './pages/404'

import { ModalProvider } from './components/modalProvider'
import ProductsPage from './pages/products'
export const GlobalContext = createContext()

function App() {
  const [theme, setTheme] = useState(GlobalManagment.getColorTheme());


  useEffect(() => {
    const color_sidebar = theme === "light"
        ? MainConfing.colors.light_background_sec
        : MainConfing.colors.dark_background_sec

        const color_background = theme === "light"
        ? MainConfing.colors.light_background
        : MainConfing.colors.dark_background

        const color_text = theme === "light"
        ? MainConfing.colors.color_text_light
        : MainConfing.colors.color_text_dark

        const color_text_sec = theme === "light"
        ? MainConfing.colors.color_text_light_sec
        : MainConfing.colors.color_text_dark_sec


  
    document.documentElement.style.setProperty("--sidebar-bg", color_sidebar)
    document.documentElement.style.setProperty("--background-bg", color_background)
    document.documentElement.style.setProperty("--color-primary", MainConfing.colors.color_primary)
    document.documentElement.style.setProperty("--color-text", color_text)
    document.documentElement.style.setProperty("--color-text-sec", color_text_sec)
  }, [theme])

  
  return (
    <>

      <BrowserRouter>
        <GlobalContext.Provider value={{theme, setTheme}}>
        <ModalProvider>
        <Routes>
        <Route element = {<NotFoundPage/>} path='*'/>

          <Route element = {<Layout/>} path='/'>
            <Route index element = {<HomePage/>}/>
            <Route path = "/products" element = {<ProductsPage/>}/>

          </Route>
        </Routes>
        </ModalProvider>
        </GlobalContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
