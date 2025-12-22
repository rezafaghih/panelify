import { useState , createContext, useEffect} from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout'
import { GlobalManagment } from '../lib/global'

// pages
// note : صفحات داشبورد را قبل از استفاده ایمپورت کنید و حتما در زمان تعریف صفحه زیر مجموعه AuthGuard قرارشان بدهید
import NotFoundPage from './pages/404'
import ProductsPage from './pages/products'
import BasicAuthPage from './pages/auth'
import HomePage from './pages/home'
import CreateArticle from './pages/create-article'
import ArticlesPage from './pages/articles'

// Global context
// note : بهتر است کانتکس های پیش فرض را تغییر ندهید زیرا بخش مهمی مانند احراز هویت ، نمایش اعلان و ... به این موارد بستگی دارد
import { ModalProvider } from './components/modalProvider'
import AuthGuard from './components/authGurd'
import { ToastProvider } from './components/global/toast'
import { AuthProvider } from './components/authContext'


export const GlobalContext = createContext()

function App() {
  const [theme, setTheme] = useState(GlobalManagment.getColorTheme());
  const MainConfing = GlobalManagment.GlobalConfig();

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
      <AuthProvider>
        <ToastProvider>
        <GlobalContext.Provider value={{theme, setTheme}}>
        <ModalProvider>
        <Routes>
        <Route path = "/auth" element = {<BasicAuthPage/>}/>
        <Route element = {<NotFoundPage/>} path='*'/>

          {
            /**
             * add your page as AuthGuard Component child when you are making route
             */
          }

          <Route element = {<AuthGuard><Layout/></AuthGuard> } path='/'>
            <Route index element = {<AuthGuard><HomePage/></AuthGuard>}/>
            <Route path = "/products" element = {<AuthGuard><ProductsPage/></AuthGuard>}/>
            <Route path = "/create-article" element = {<AuthGuard><CreateArticle/></AuthGuard>}/>
            <Route path = "/articles" element = {<AuthGuard><ArticlesPage/></AuthGuard>}/>
            
          </Route>
        </Routes>
        </ModalProvider>
        </GlobalContext.Provider>
        </ToastProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
