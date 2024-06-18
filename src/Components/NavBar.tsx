import { BrowserRouter as Router, Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="flex justify-evenly text-base text-gray-500 py-6 items-center font-medium	">
            <img src="src/assets/img/Rectangle 2.svg" alt="Logo" />
            <div >
                <Link to='/' className="px-6 py-3  hover:font-semibold hover:text-black">Acceuil </Link>
                <Link to='/' className="px-6 py-3  hover:font-semibold hover:text-black">Cours</Link>
                <Link to='/' className="px-6 py-3  hover:font-semibold hover:text-black">Blogs</Link>
                <Link to='/' className="px-6 py-3  hover:font-semibold hover:text-black">Contacts</Link>
            </div>
            <div className="flex items-center">
                <div className="flex px-6 py-3 space-x-1.5">
                    <img src="src/assets/img/Lock.svg" alt="Lock" />
                    <button> Login</button>
                </div>
                <button className="px-6 py-3 bg-[#68226F] text-white rounded-lg	 "> Sign up for Free </button>
            </div>
        </div>
    )
}