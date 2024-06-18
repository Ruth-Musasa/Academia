import { BrowserRouter as Router, Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="flex justify-evenly text-base py-6 items-center">
            <img src="src/assets/img/Rectangle 2.svg" alt="Logo" />
            <div >
                <Link to='/' className="px-6 py-3">Acceuil </Link>
                <Link to='/' className="px-6 py-3">Cours</Link>
                <Link to='/' className="px-6 py-3">Blogs</Link>
                <Link to='/' className="px-6 py-3">Contacts</Link>
            </div>
            <div className="flex ">
                <div className="flex px-6 py-3">
                    <img src="src/assets/img/Lock.svg" alt="Lock" />
                    <button>  Login</button>
                </div>
                <button className="px-6 py-3 bg-[#68226F] text-white rounded-lg	 "> Sign up for Free </button>
            </div>
        </div>
    )
}