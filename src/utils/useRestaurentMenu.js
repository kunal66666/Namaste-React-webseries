import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

// this is utility function meqns custom hooks
const useRestaurentMenu=(resid)=>{
    //   fetch data

    // local vairbke to store resinfo
    const[resInfo,setResinfo]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data =await fetch(MENU_API_URL+resid);
        const json = await data.json();
        setResinfo(json.data);
    }
    return resInfo;
}

export default useRestaurentMenu;