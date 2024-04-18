// now claas bASED COMPOENT

import React from "react"
class Userclass extends React.Component{
  constructor(props){
    super(props);
    console.log("child constructur");
    // state is big object taht can consit all state vairbale
    // we will do in same state 
    this.state={
      userInfo:{
        name:'dummy',
        location:'Default',
      }
      // count:0,
      // count2:1,
    }
  }

  //  first constructed will called then render called thenn did moutn is called
  async componentDidMount(){
     const data = await fetch("https://api.github.com/users/kunal66666");
     const json= await data.json();
    //  console.log(json);
    //  to get data we have to use local state vairble that emanscraeet state varible to set
    console.log("child component did mount")
    this.setState({
      userInfo:json,
    })
  }


  componentDidUpdate(){
    console.log('component did update')
  }

  componentWillUnmount(){
    console.log("compoment will junmount");
  }

  // now see how to update state variBLe in className base component
  // we do not have set feature here
    render (){
      console.log("child renderr");
        const {name}=this.props;
        // we can also destructure clount 
        // const{count2}=this.state;
    return <div className="user-card">
    {/* <h1>Count :  {this.state.count}</h1> */}
 {/* we have to update state varible  */}
  {/* we do not dorectly update state in className based like 
this.state.count=this.state.count+1 this is wrong   
  */}
  {/* <button onClick={()=>{
// never update directly state vairble
  //  we have this.setstate to setor update value
  this.setState({
       count: this.state.count+1 */}
    {/* // count2:this.state.count+1 */}
  
  {/* // }}>count increases</button> */}
    {/* <h1>Count2 :  {count2}</h1> */}
    <h2>Name:{this.state.userInfo.name}</h2>
    <img src={this.state.userInfo.avatar_url}></img>
    <h3>Location:{this.state.userInfo.location}</h3>
    <h4>Contact: {this.state.userInfo.location}</h4>
</div>
   }

}


export default Userclass;