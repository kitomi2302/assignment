import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Hieu from "./components/Hieu";
import Hung from "./components/Hung";
import Trang from "./components/Trang";
import DieuLinh from "./components/DieuLinh";
import HoaiLinh from "./components/HoaiLinh";
import Login from './components/Login';
import Product from "./components/Product";
import Contact from "./components/Contact";
//react router dom import element
import {Routes, Route, } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "../src/components/protected/Protected";
import Skill from "./components/Skill";
// create Context



function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <Routes
        // set initial route is Home   
        >
          <Route path="/" element={<Login />} />
          <Route path="/home" element={
            <Protected>
              <Home />
              <Hieu />
              <Hung />
              <Trang />
              <DieuLinh />
              <HoaiLinh />
              <Product />
              <Skill />
              <Contact />
            </Protected>} />
          <Route path="/hieu" element={
            <Protected>
              <Hieu />
            </Protected>}/>
            <Route path="/hung" element={
            <Protected>
              <Hung />
            </Protected>}/>
            <Route path="/trang" element={
            <Protected>
              <Trang />
            </Protected>}/>
            <Route path="/dieulinh" element={
            <Protected>
              <DieuLinh />
            </Protected>}/>
            <Route path="/hoailinh" element={
            <Protected>
              <HoaiLinh />
            </Protected>}/>
          <Route path="/product" element={
            <Protected>
              <Product />
            </Protected>}/>
          <Route path="/skill" element={
            <Protected> 
             <Skill />
            </Protected>} />
          <Route path="/contact" element={
            <Protected>
              <Contact />
            </Protected>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
