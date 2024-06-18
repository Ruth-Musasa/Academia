import { BrowserRouter as Router, Link } from "react-router-dom";
import './App.css'
import NavBar from './Components/NavBar'
import Header from "./Components/Header";
import Sponsors from "./Components/Sponsors";
import CoursRecent from "./Components/Cours";
function App() {
  return (
    <div>
      <NavBar />
      <div className="border "></div>
      <Header />
      <Sponsors />
      <div className="bg-[#EDEEEF] py-52 ">
        <div className="w-9/12 m-auto space-y-6">
          <h2 className="text-4xl font-semibold	">Les <span className="text-[#F19308] ">cours </span>recents</h2>
          <p className="text-[#6D737A] text-xl ">Notre ambition est la montée en compétence des étudiants et Professionnels IT</p>
          <div className="flex justify-between">
            <CoursRecent src='src/assets/img/Saly-1.png' description='Various versions have evolved daf' categories='Html' />
            <CoursRecent src='src/assets/img/Saly-1.png' description='Various versions have evolved daf' categories='Html' />
            <CoursRecent src='src/assets/img/Saly-1.png' description='Various versions have evolved daf' categories='Html' />
            <CoursRecent src='src/assets/img/Saly-1.png' description='Various versions have evolved daf' categories='Html' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
