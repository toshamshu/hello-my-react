import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "./constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="flex justify-between ">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL}/>
            </div>
            <div className="flex m-4 p-4">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "📗": "🐦"}</li>

                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About US</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4">Cart</li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><button onClick={() => {
                        const n = btnName === 'Login' ? 'Logout': 'Login';
                        setBtnName(n);
                    }}>{btnName}</button></li>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;