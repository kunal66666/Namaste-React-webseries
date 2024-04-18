import { useState } from "react";


const User=(props)=>{
const [count,setcount]=useState(0);
const [count2]=useState(1);
    return <div className="user-card">
        <h1>COUNT:{count}</h1>
        <h1>COUNT2:{count2}</h1>
        <h2>Name:{props.name}</h2>
        <h3>Location: Bhagalpur</h3>
        <h4>Contact: kunal66666</h4>
    </div>
}
export default User;