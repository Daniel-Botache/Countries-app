import { useState } from 'react'
import { Route, Routes,useLocation} from "react-router-dom"
import './App.css'
import Home from "./views/home/Home"
import LandingPage from "./views/landing/Landing"
import NavBar from './components/NavBar/NavBar'
import Detail from "./views/detail/Detail"
import FilterBar from './components/FilterBar/FilterBar'
import Activities from './views/activities/Activities'

function App() {
  const location = useLocation();
  return (
   
      <div>
        {location.pathname !== "/" && <NavBar/>}
        {location.pathname == "/home" && <FilterBar/>}
        <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route
        path="/home"
        element={<Home/>}
      />
      {<Route path="detail/:detailId" element={<Detail/>} />}
      <Route path="/activities" element={<Activities/>} />
        </Routes>
      </div>
     
   
  )
}

export default App
