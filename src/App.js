// import React from 'react';
// import { ReactDOM } from 'react-dom';

// // const heading = React.createElement("h1", { style: { color: "red",
// //  fontSize: "24px" } },
// //   "Namaste Lucky");

// // const root=ReactDOM.createRoot(document.getElementById("root"));
// // root.render(parent)

// const parent = React.createElement(
//   "div",
//   { id: 'parent' },
//   [
//     React.createElement(
//       "div",
//       { id: 'child' },
//       [
//         React.createElement(
//           "h1",
//           {},
//           "I am a h1 tag"
//         ),
//         React.createElement(
//           "h1",
//           {},
//           "I am a h1 tag"
//         )
//       ]
//     ),
//     React.createElement(
//       "div",
//       { id: 'child2' },
//       [
//         React.createElement(
//           "h1",
//           {},
//           "I am a h1 tag"
//         ),
//         React.createElement(
//           "h1",
//           {},
//           "I am a h1 tag"
//         )
//       ]
//     )
//   ]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const parent = React.createElement(
//   'div',
//   { id: 'parent' },
//   [
//     React.createElement(
//       'div',
//       { id: 'child' },
//       [
//         React.createElement('h1', {}, 'I am a h1 tag'),
//         React.createElement('h1', {}, 'I am a h1 tag'),
//       ]
//     ),
//     React.createElement(
//       'div',
//       { id: 'child2' },
//       [
//         React.createElement('h1', {}, 'I am a h1 tag'),
//         React.createElement('h1', {}, 'I am a React tag'),
//       ]
//     ),
//   ]
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);




// like react element we have dom element 
// React.createelement will create object when we render into dom using reactdom it become html 
// const heading = React.createElement("h1",{id:'heading'},"Namaste React");
// jsx is not html it xml like syntex  JSX (JavaScript XML, formally JavaScript 
// Syntax eXtension) is a JavaScript extension that allows creation of Document Object Model (DOM) trees using an XML-like syntax.
// write react element using bracket under fucntional component
// const elem=<span>React element</span>
// const title=(
 
//   <h1>  {elem} namaste js not any fn</h1>
// )
// const HeadingComponent=()=>{
//   return <h1>
//    namaste react FUNCTIINAL COMPOENNT
//   </h1>
// }
// const Jsxheading =()=>
// (
//   <div>
//   {HeadingComponent()}
//   {title}
// <h2>hello </h2>
// <h2>{console.log(HeadingComponent)}</h2>
// <HeadingComponent/>
// <h1 className='head' tabIndex="1">Namaste rtjsx </h1>
// </div>)

// above is component composation where i keep one component into another
// it a object converted by babel// babbel convert jsx into reactelement 
// console.log(jsxheading);
// reactdom load thatobject into html and load it 

// // react component
// // everything in react is called component button card anythhing
// // there are two type of component 
// // className based component -old
// // functional compoment based - new
// // react funcitonal component is general js funciton THAT RETURN REACT ELEMENT



// const Headingcom=()=>(<h1>namaste react </h1>);


// this styling of writing looks  hectic so jsx are build jsx is not part of react
// we can write react wigthoutnjsx also but become difficult



import React, { lazy,Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter,Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurentMenu';
import UserContext from './utils/UserContext';
import {Provider} from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';


// we need provider to make aiblele store to our app
// whicch come from react redux so it is like bridge between
// redux tookkit and react



// our app become load slow beacuse we have component code for grocery and fodo applicaiton
// bundle trgther and load at same time so that why to make it efficent wer use lazy loading
// chunking 
// lazy loading
// dynmic bundling
// on demand loading
// code splltinh
//so intially we have only home page data
// only user go to grocery then loads dasta
// only known as on demand data
// lazy fucntion take callback fucntion which take import and path
const Grocery=lazy(()=> import("./components/Grocery"));




const AppLayout=()=>{


// authentciation dummy to udnerstand context provider

const [userInfo,Setuserinfo]=useState();
useEffect(()=>{
  const data={
    name:'kunal-kashyap',
  };
  Setuserinfo(data.name);
},[]);
// we have to use usercontext provider to update data

// we have to warp whole app usinf userxinctext.provider
//now everywhere instead of admin we got uodated name
// if we just wrap header with contetx provider
// then  new data wiill avible to header only
// we can also need usecontext provider

// we want a fetaure where in home page we have input box 
// which take name and update at same live time using context
// like hw we get  loginusder using usecontext similar
// we can get setuserinfo from data form usercontext to modify see eexample on body second 
// input box line 135

return (
  <Provider store={appStore} >
  <UserContext.Provider value={{loggedInUser:userInfo, Setuserinfo}}>
  <div className="app">
  <UserContext.Provider value={{loggedInUser:'Kashyap', }}>
<Header/>
</UserContext.Provider>
<Outlet/>
  </div>
  </UserContext.Provider>
  </Provider>
)
}

// below we care creating configure on followimng path follwing elemen t should load these are done
// with react router dom which has createrbrowserrouter poryperty

// to handle error also we have  error element in react router dom


// react router dom also give hooks to handle error useroutererror


const appRouter=createBrowserRouter([
{
  path:'/',
  element:<AppLayout/>,
  children:[
    {
    path:'/',
    element:<Body/>
    }
    ,

    {
      path:'/grocery', 
      element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
      // we use suspense  because we have to wait till loading is creatr bundle of groceyr
      // we have gibve fallback mesgggee 
    },
    {
    path:'/about',
    element:<About/>
  },
  ,{
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/restaurents/:resid',
    element:<RestaurantMenu/>
  },
  {
    path:'/cart',
    element:<Cart/>
  }


],

  errorElement:<Error/>
},
])

const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);

root.render(<RouterProvider router={appRouter}/>);


