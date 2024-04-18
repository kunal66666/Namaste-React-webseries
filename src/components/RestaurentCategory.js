import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data, showItems,setshowindex})=>{

    // i want this showitem props from parent restaurent menu
    //  so that
    // one open then other accodian get collasepse
    // so it is controlled componewnt 
    // if accodian have there own state then that is
    //untrolled component so restorent meny doesnot have
    // control fdor accodian so each acocodian open and collaspe 
    // at same rtime becaiuse each have own accodian 
    // const[showItems,setshowitems]=useState(false);
// console.log(data);

const handleClick=()=>{
//  setshowitems(!showItems);
setshowindex();
}
    return <div>
        {/* {accodian  header} */}
      <div className="w-6/12 mx-auto my-4 bg-yellow-200 shadow-lg p-4 ">
      <div className="flex justify-between" onClick={handleClick}>
        <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
        <span>⬇️</span>
        </div>
        
        {showItems && <ItemList items={data?.itemCards}/>}
      </div>
        {/*accodian body  */}
    
    </div>
}

export default RestaurantCategory;
