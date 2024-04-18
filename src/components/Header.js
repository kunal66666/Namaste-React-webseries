import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from 'react-redux';
const Header=()=>{
  //  let btnName='LOGIN';


   const [btnNameReact,setbtnnameReact]=useState("login");
   const onlinecheck=useOnlineStatus();

  // we can use hooks of react whoch is usecontext to get data
  // from xcontext we can have many xontext right now 
  // i want data from user xcontext so we have to pss in hooks
  const data = useContext(UserContext); 
  // console.log(data.loggedInUser);

const cart = useSelector((store)=>store.cart.items);
// we are subscribing to the store here to cart.items means cart will get data 
    return (
      <div className="flex justify-between bg-yellow-400 shadow-lg ">
        <div className="Logo-container">
        <Link   className="Link" to='/'>
      <img  className="w-56" src= {LOGO_URL}/>
      </Link>
        </div>
        <div className="flex items-center">
       <ul  className="flex p-4 m-4" >
       <li className="px-4">
        Online Status:{onlinecheck?'🟢':'🔴'}
       </li>
       <li className="px-4"> <Link   className="Link" to='/grocery'>Grocery</Link></li>
        <li className="px-4"> <Link   className="Link" to='/'>Home</Link></li>
        <li>
        <Link  className="px-4" to='/about'>About us</Link></li>
        <li>
        <Link  className="px-4" to='/contact'>Contact us</Link></li>
        <li className="px-4 font-extralight text-xl">
        <Link to='/cart'>
        Cart({cart.length}items)</Link></li>
        <button className="bg-blue-500 text-white py-0 px-5 rounded-md"
        onClick={()=>
{
 const NEWBTNNAME= btnNameReact==='login'?'logout':'login';
 setbtnnameReact(NEWBTNNAME);

}
        }
>{btnNameReact}</button>

<li className="px-4 font-bold">{data.loggedInUser}</li>
       </ul>
        </div>
      </div>
    )
  }

  export default Header;