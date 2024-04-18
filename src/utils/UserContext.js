import { createContext } from "react";

// we can access data anywhere do it help over props drilling
// only store that data which can be neeeded any where in context
// we can use usecontext in class based component

// when we create context
// react do power of consumer also we can access by usecontext
// and in class based cimponent we hgave tp use consumer
// see about page  and header both example

const UserContext=createContext({
loggedInUser: "Default Admin",
});
// while cereating context we will give some data to hold or intikiaze

export default UserContext;

// if we want to change to data 
// and if we have authentication data
// after login i want to update that data of usecontex
// with new data i have to use context provider

// see exmaple in app.js