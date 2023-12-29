import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "./constants";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About US</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button onClick={() => {
                        const n = btnName === 'Login' ? 'Logout': 'Login';
                        setBtnName(n);
                    }}>{btnName}</button>

                </ul>
            </div>
        </div>
    )
}
export default Header;