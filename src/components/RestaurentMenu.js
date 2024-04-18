// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL_IMAGE } from "../utils/constants";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurantCategory from "./RestaurentCategory";
import { useState } from "react";
const RestaurantMenu = () => {
    // const [resInfo, setResinfo] = useState(null);
    const { resid } = useParams();
   const resInfo=useRestaurentMenu(resid);
const [showIndex,setshowindex]=useState(0);
// based on index child accodian will work

//    how to get data restornet menu is not concern
// only respobiblity here is to dipslay data
// so we jave to create custom hook useRestorentmenu
// and comment previiud  verson

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API_URL + resid);
    //     const json = await data.json();
    //     setResinfo(json.data);
        
    // }

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>c.card?.["card"]?.["@type"]===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log(categories);
  return (
    <div className='rounded-lg text-center'>
        <h1 className="font-bold my-6 text-2xl">{name}</h1>

        <p className="font-bold text-lg">{cuisines && cuisines.join(", ")} - {costForTwoMessage}</p>
    
    
        {/* we need catagorias accodian */}
          {
            categories.map((category,index)=>(
           <RestaurantCategory key={category?.card?.card?.title}
           data={category?.card?.card}
            showItems={index===showIndex ? true:false}

             setshowindex={()=> setshowindex(index)}
            />
            //it is lifting state up
          //  now parent is controllinh child this is controlled  componen
// we cannot give data from child to parent
// so we have to do indriectly we amek a fucntion and pass that as props
// to childern and then call from children as a setshowindex function
            ))}

    </div>
);
}

export default RestaurantMenu;
