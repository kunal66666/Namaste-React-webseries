import {Component} from "react";
import User from "./User";
import Userclass from "./UserClass";
import UserContext from "../utils/UserContext";

// make className based

class  About extends Component{
constructor(props){
    super(props);
    // console.log("parent constructur");
}
// did mount is done at last step firts 
// parent cinsturtcir is called then render 
// then at last did mount

// componentDidMount(){
//     console.log("parent component did mount")
//   }
    render(){
    //  /  console.log("parent render") 
        return <div>
            <h1>About className component</h1>
            <h2>this is namaste webseries</h2>
            <div  className="text-xl font-mono">
            loggedIn-
            <UserContext.Consumer>
                {(data)=>data.loggedInUser}
            </UserContext.Consumer>
            </div>
            <Userclass name={"Kashyap (className based  props)"}/>
            {/* <UserclassName name={"musk (className based  props)"}/> */}
            {/*we can use many time className baxsed component it will crate that many no of instamc3   */}
        </div>
    }
}

// react life project,wotekmap
// react lifecyle method
// it actually first load parent constructr
// parent render
// first child cosntrutror
// first child render
// / second child consrtucror
// second chold render

// dom updTED HERE
// firstcomponent did mount child
// sexcond child did mount
// parent did mount

// fiuntional component

// const About =()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>this is namastey web series</h2>
//             {/* <User name={"Kunal (functional)"}/> */}
//             <UserclassName name={"Kashyap (className based  props)"}/>
//         </div>
//     )
// }

export default About;
