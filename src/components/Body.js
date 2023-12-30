import RestoCard from "./RestoCard";
import restList from "../utils/mockData";
import onlyRestaurants from '../utils/mockData';
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANTS_LIST_URL } from "./constants";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    //const [listOfRest, setListOfRest] = useState(restList); -- Instead of mock data use below
    const [listOfRest, setListOfRest] = useState([]);
    const [filteredRest, setFilteredRest] = useState([]);
    const [searchText, setSearchText] = useState("");
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
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Please check your internet connection !!</h1>
    return listOfRest.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter-container">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                    onChange={(e) => {                       
                        setSearchText(e.target.value)
                    }}></input>
                    <button onClick={() => {
                         const filteredRest = listOfRest.filter((res)=> {
                            return res.info.name.includes(searchText);
                         });
                         setFilteredRest(filteredRest);
                    }}>Search</button>
                </div>
                <button className="filter-btn" 
                    onClick={() => {
                        let filteredRest = listOfRest.filter((resto) => {
                            return resto.info.avgRating > 4.2;
                        });
                        setFilteredRest(filteredRest);                        
                    }}> 
                Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">            
                { 
                    
                    filteredRest.map(restaurant =>  {                        
                        return <Link 
                                key={restaurant.info.id} 
                                to={"/restaurants/"+restaurant.info.id}
                                >
                                    <RestoCard  resData={restaurant} />
                                </Link>
                    }
                                                                    
                    ) 
                }
            </div>
        </div>
    )
}
export default Body;