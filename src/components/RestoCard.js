import { useContext } from "react";
import UserContext from "./UserContext";

const RestoCard = (props) => { // Can be as const RestoCard = ({resName, cuisine}) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.info;
    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="p-4 w-52">
            <img className="rounded-lg"
            alt="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <h3 className="font-bold text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
            <h4>{loggedInUser}</h4>
        </div>
    )
}
export const restaurantBiryani = (RestoCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute font-bold text-lg p-4">Biryani</label>
                <RestoCard  {...props}/>
            </div>
        )
    } 
}
export default RestoCard;