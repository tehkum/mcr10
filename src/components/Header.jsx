import "./Header.css";
import { NavLink } from "react-router-dom"; 

export default function Header(){
    return <nav>
        <h1>Habit Tracker</h1>
        <div className="pages-nav">
            <NavLink to="/"><p>Home</p></NavLink>
            <NavLink to="/archieve"><p>Archieved</p></NavLink>
        </div>
    </nav>
}