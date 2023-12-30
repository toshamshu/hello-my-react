import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "./constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "📗": "🐦"}</li>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About US</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li><Link to="/grocery">Grocery</Link></li>
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