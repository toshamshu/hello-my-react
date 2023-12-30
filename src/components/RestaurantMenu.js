import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    //const [restInfo, setRestInfo] = useState(null);
    const { resId }  = useParams();
    const restInfo = useRestaurantMenu(resId);
    
    

    if(restInfo === null) return <Shimmer />;
    
    const {name, cuisines, costForTwoMessage} = restInfo.cards[0]?.card?.card?.info;
    const {itemCards} = restInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;
    console.log(itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2><span>{cuisines}</span> - {costForTwoMessage}</h2>            
            <ul>
                {itemCards.map((menu) => <li key={menu.card.info.id}>{menu.card.info.name} - {menu.card.info.description} - {"Rs."+ menu.card.info?.price/100 || menu.card.info?.defaultPrice/100}</li>)}
            </ul>
        </div>
    )
}
export default RestaurantMenu;