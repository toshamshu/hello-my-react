import { useEffect, useState } from "react";
import { REST_MENU_URL } from "../components/constants";

const useRestaurantMenu = (resId) => {
    const [restInfo, setRestInfo] = useState(null);

    useEffect(()=> {
        fetchData();
    } ,[]);

    const fetchData = async () => {
        const data = await fetch(REST_MENU_URL+ resId);
        const json = await data.json();
        setRestInfo(json.data);
    };
    return restInfo;    
};

export default useRestaurantMenu;