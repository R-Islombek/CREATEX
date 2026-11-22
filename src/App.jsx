import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPages from './Pages/AboutPages/AboutPages';
import BlogPages from './Pages/BlogPages/BlogPages';
import ContactPages from './Pages/ContactPages/ContactPages';
import LoginPages from './Pages/LoginPages/LoginPages';
import EventPages from './Pages/EventPages/EventPages';
import './App.css';
import HomePages from './Pages/HomePages/HomePages';
import Layout from './Components/Layout/Layout';

function App() {

  return (
    <>
       <BrowserRouter>
           <Routes>
               <Route element={<Layout/>}>
                   <Route path='/home' element={<HomePages/>} />
                   <Route path='blog' element={<BlogPages/>}/>
                   <Route path='contact' element={<ContactPages/>}/>
                   <Route path='event' element={<EventPages/>}/>
                   <Route path='about' element={<AboutPages/>}/>
               </Route>
           </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
