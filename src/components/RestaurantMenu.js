import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { REST_MENU_URL } from "./constants";

const RestaurantMenu = () => {
    const [restInfo, setRestInfo] = useState(null);
    const { resId }  = useParams();
    console.log(resId);
    useEffect(() => {
        fetchMenu();
    }, []);    
    const fetchMenu = async () => {
        const data = await fetch(REST_MENU_URL +resId);
        const json = await data.json();        
        setRestInfo(json?.data);
    }

    if(restInfo === null) return <Shimmer />;
    
    const {name, cuisines, costForTwoMessage} = restInfo.cards[0]?.card?.card?.info;
    const {itemCards} = restInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2><span>{cuisines}</span> - {costForTwoMessage}</h2>            
            <ul>
                {itemCards.map((menu) => <li>{menu.card.info.name} - {menu.card.info.description} - {"Rs."+ menu.card.info?.price/100 || menu.card.info?.defaultPrice/100}</li>)}
            </ul>
        </div>
    )
}
export default RestaurantMenu;