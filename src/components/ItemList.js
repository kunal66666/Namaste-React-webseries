import { CDN_URL_IMAGE } from "../utils/constants";
import {useDispatch}  from 'react-redux'
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    // console.log("hi", items);

    const dispatch=useDispatch();
const handleadditem=(item)=>{
  // as soon some body add i want to dispatch an action to cart using usedipatch
   dispatch(addItem(item));
   
}


    return (
      <div>
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-yellow-700 border-b-2 text-left flex justify-between"
          >
          <div className="w-9/12">
          <div className="py-2">
            <span>{item?.card?.info?.name}</span>
            <span>- Rs{item?.card?.info?.price / 100}</span>
            </div>
            <p  className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
            <button className="p-2 my-0 mx-28 rounded-lg bg-black text-opacity-85 text-white shadow-lg"
            // use dispatch logic
            onClick={()=>handleadditem(item)}
            >
                Add+
            </button>
            </div>
          <img src={CDN_URL_IMAGE + item.card.info.imageId} className="w-full"/>

      
           
          </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ItemList;