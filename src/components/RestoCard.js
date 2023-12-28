const RestoCard = (props) => { // Can be as const RestoCard = ({resName, cuisine}) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo"
            alt="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}
export default RestoCard;