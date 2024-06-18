import { BrowserRouter as Router, Link } from "react-router-dom";
import './App.css'
import NavBar from './Components/NavBar'
import Header from "./Components/Header";
import Sponsors from "./Components/Sponsors";
function App() {
  return (
    <div>
      <NavBar />
      <div className="border "></div>
      <Header />
      <Sponsors/>
    </div>
  )
}

export default App
