import RestoCard, {restaurantBiryani} from "./RestoCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANTS_LIST_URL } from "./constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
const Body = () => {
    //const [listOfRest, setListOfRest] = useState(restList); -- Instead of mock data use below
    const [listOfRest, setListOfRest] = useState([]);
    const [filteredRest, setFilteredRest] = useState([]);
    const [searchText, setSearchText] = useState("");
    const BiryaniRestaurantCard = restaurantBiryani(RestoCard);
    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const data = await fetch(RESTAURANTS_LIST_URL);
        const json = await data.json();      
        
        const onlyRestaurantsCard = json.data.cards.filter((card) => {
           // return card.card.card.hasOwnProperty('info');
           return card.card.card.hasOwnProperty("id") && card.card.card.id.includes('restaurant_grid_listing');
        });   
        console.log("before map");
        console.log(onlyRestaurantsCard);
        setListOfRest(onlyRestaurantsCard[0].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRest(onlyRestaurantsCard[0].card?.card?.gridElements?.infoWithStyle?.restaurants);    
    };
    console.log(filteredRest);
    const onlineStatus = useOnlineStatus();
    const {loggedInUser, setUserName} = useContext(UserContext);
    if(onlineStatus === false) return <h1>Please check your internet connection !!</h1>
    return listOfRest.length === 0 ? (<Shimmer />) : (  
        <div className="body">
            <div className="filter-container">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText}
                    onChange={(e) => {                       
                        setSearchText(e.target.value)
                    }}></input>
                    <button className="p-4 bg-green-200 m-4 rounded-md" onClick={() => {
                         const filteredRest = listOfRest.filter((res)=> {
                            return res.info.name.includes(searchText);
                         });
                         setFilteredRest(filteredRest);
                    }}>Search</button>
                    <button className="p-4 bg-green-200 m-4 rounded-md" 
                        onClick={() => {
                            let filteredRest = listOfRest.filter((resto) => {
                                return resto.info.avgRating > 4.2;
                            });
                            setFilteredRest(filteredRest);                        
                        }}> 
                    Top Rated Restaurants
                    </button>
                    <span>User Name:</span>
                    <input type="text" className="border border-solid border-black p-2" value={loggedInUser}
                    onChange={(e) => {                       
                        return setUserName(e.target.value)
                    }}></input>
            </div>                
        </div>
            <div className="flex flex-wrap border-separate">            
                {                 
                    
                    filteredRest.map(restaurant =>  {  
                        //const RestaurantWithBiryani = <restaurantBiryani resData={restaurant} />                      
                        return <Link className="rounded-lg"
                                key={restaurant.info.id} 
                                to={"/restaurants/"+restaurant.info.id}
                                >
                                    {restaurant.info.cuisines.includes('Biryani') ? 
                                    <BiryaniRestaurantCard resData={restaurant}/> : 
                                    <RestoCard  resData={restaurant} />}
                                </Link>
                    }
                                                                    
                    ) 
                }
            </div>
        </div>
    )
}
export default Body;