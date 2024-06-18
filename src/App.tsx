import { BrowserRouter as Router, Link } from "react-router-dom";
import './App.css'
import NavBar from './Components/NavBar'
import Header from "./Components/Header";
function App() {
  return (
    <div>
      <NavBar />
      <div className="border "></div>
      <Header />
    </div>
  )
}

export default App
