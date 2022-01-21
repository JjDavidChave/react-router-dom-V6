import { NavLink } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                <li>
                    <NavLink className={({isActive}) => (isActive ? "active" : "")} to="/"><h3>Home</h3></NavLink>   
                </li>
                    <NavLink className={({isActive}) => (isActive ? "active" : "")} to="/about"><h3>about</h3></NavLink>   
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive ? "active" : "")} to="/users"><h3>users</h3></NavLink>   
                </li>
            </ul>
        </div>
    );
}
