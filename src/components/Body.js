import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import reslist from "../utils/mockData";
import { useState ,useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body=()=>{

  const [listofrestorent,stListofrestorent]=useState([]);
  const [filterrestorent,setfilterrestornet]=useState([]);
  const [searchText,setSearchText]=useState("");
  // create another usetsta refor filter becuase search will show bug  because it get upsated with filtered restorent

  // wehenever state vairble update react trigger a reconcillation cycle
// console.log("body rerender")
const RestaurentCardpermoted = withPromotedLabel(RestaurentCard);

  useEffect(()=>{
    fetchData();
    // console.log("useffect called")
  },[]);
  const fetchData = async () => {
    
      // const response = await fetch("https://www.swiggy.com/api/seo/getListing?lat=12.9720888&lng=77.694364");
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
     
      const json = await response.json();
      console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      // optionally chaining
      stListofrestorent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilterrestornet(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         
     
  };
  // conditional rendering
  // if (listofrestorent.length === 0){
  //   return <Shimmer/>
  // }
  
//  when ever state varible changes react rerender component 
  // let listofrestorent=[
  //   {
  //     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  //     "info": {
  //       "id": "33251",
  //       "name": "Tandoori Taal",
  //       "cloudinaryImageId": "a90v44oo8vgjuapzrd2l",
  //       "locality": "Indiranagar",
  //       "areaName": "Indiranagar",
  //       "costForTwo": "₹900 for two",
  //       "cuisines": [
  //         "North Indian",
  //         "Biryani"
  //       ],
  //       "avgRating": 4.4,
  //       "parentId": "20128",
  //       "avgRatingString": "4.4",
  //       "totalRatingsString": "10K+",
  //       "promoted": true,
  //     }
  //   },
  //  {
  //     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  //     "info": {
  //       "id": "447965",
  //       "name": "Zama",
  //       "cloudinaryImageId": "kkzqxnjaicpsemmxk5td",
  //       "locality": "Indiranagar",
  //       "areaName": "Indiranagar",
  //       "costForTwo": "₹250 for two",
  //       "cuisines": [
  //         "Kebabs",
  //         "Turkish",
  //         "Rolls & Wraps"
  //       ],
  //       "avgRating": 4,
  //       "parentId": "269737",
  //       "avgRatingString": "4.0",
  //       "totalRatingsString": "500+",
  //       "promoted": true,   
  //      }
  //  }
  // ]
    
  
  const onlinestatus=useOnlineStatus();
  if(onlinestatus===false) return <h1>
    Looks like you are offline !! please check your internet connection
  </h1>
  
  const data=useContext(UserContext);
  return listofrestorent && listofrestorent.length === 0 ?(<Shimmer/>):(
      <div className='body'>
        <div className='flex'>
        <div className="search m-4 p-4">
   
        <input type="text"
        data-testid="searchinput"
         className="border border-solid border-black" value={searchText}
  onChange={(e)=>{
    setSearchText(e.target.value);
  }}

        />
        {/* // to get text value we have to use local varible that is usesttae , on changing value is still empty so einput bix not chnages so we also have to write on changes so that searchtext updated with laso new value   */}
      
          <button className="px-4 py-2 bg-green-100 m-4 rounded-md " onClick={()=>{
            // on clicking thids filter the restoernet and update ui
         // we need search text to filter   
         const filteredRestaurants = listofrestorent.filter((restaurant) =>
              restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase().toLowerCase())
            );

        setfilterrestornet(filteredRestaurants);
          }}>Search</button>
</div>
<div className="m-4 p-4 flex items-center">
      <button className='px-4 py-2 bg-gray-50 m-4 rounded-md' onClick={()=>{ 
      // filter logic 
       const  filterlist=listofrestorent.filter(res=>res.info.avgRating>4.5 ) 
       setfilterrestornet(filterlist);
         console.log("hi",listofrestorent);
          }}>

  
      Top Rated Restaurant</button>
      </div>
      <div className="m-4 p-4 flex items-center">
      {/*what i want is update the context live
      what ever we give data it update name live using context  */}
      <label>User name</label>
     <input className="border border-black p-2"
     value={data.loggedInUser}
      onChange={(e)=> data.Setuserinfo(e.target.value)}
     />

      </div>
      </div>

        <div className='flex flex-wrap'>
         {/* we write key sp react doesnot have tpo re render all if wee dd one more card in list  , domt use index because may be we can add any card in between*/}
         {   filterrestorent.map(restaurent=>
          <Link key={restaurent?.info?.id} to={"/restaurents/"+restaurent?.info?.id}>
        {/* we use higher order compowenent here to enhance user experice */}
          {/* if the restaunret is permoted then add a label using higher order function */}
           {restaurent?.info?.cuisines.includes('Chinese')? 
            (<RestaurentCardpermoted resObj={restaurent}/>):
            (<RestaurentCard  resObj={restaurent} /> 
            ) }
         </Link>)
      
         }
         {/* optimise it with map */}
          {/* we will have many restorent card so we will make it resuabale */}
        {/* <RestaurentCard  resObj={reslist[0]} />
        <RestaurentCard  resObj={reslist[4]} />
        <RestaurentCard resObj={reslist[2]}/>
        <RestaurentCard resObj={reslist[5]}/>
        <RestaurentCard resObj={reslist[3]}/>
            */}
  
        </div>
      </div>
    )
  }


  export default Body;