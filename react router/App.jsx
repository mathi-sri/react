import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Students from "./pages/students";
import StudentDetails from "./pages/StudentDetails";
import ProtectedRoute from "./components/ProctectedRoute";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Setting";
import NotFound from "./pages/NotFound";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";







function App(){
  return(
    <>
    <Navbar/>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/students" element={<Students/>}></Route>
      <Route path="/student/:id" element={<StudentDetails/>}></Route>

      <Route element={<ProtectedRoute/>}>
      <Route path="/dashBoard" element={<Dashboard/>}>
      <Route path="profile" element={<Profile/>}></Route>
      <Route path="settings" element={<Settings/>}></Route>
      </Route> 
      </Route> 

      <Route path="*" element={<NotFound/>}></Route>
       
      </Routes>

    </main>

    </>
  )
}
export default App;