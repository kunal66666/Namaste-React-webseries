import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
 const [onlinestatus,setonlinestatus]=useState(true);

    useEffect(()=>{
           window.addEventListener("offline",()=>{
            setonlinestatus(false);
           })

           window.addEventListener("online",()=>{
            setonlinestatus(true);
           })
    },[]);


// check if online
// to check if online ir offline
// we have to use event listener
// window online event
// browser have that event listner
// return boolean value
    return  onlinestatus;
}


export default useOnlineStatus;