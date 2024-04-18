import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
const appStore= configureStore({
    // it is called reducer because it a small slice of whole Store so here
    //  is also reducer this reducer is modify the big storw 
    reducer:{
        cart:cartReducer,
        // user:userReducer, if we have user reduce for login then this we way we can do
        // as wse want to modify big store
        // so this reduce was usse to modify whols store which is appsrtore
        // this reducer is combination of diffetns small slice

    }
});


// we havE build store
// now provide this store to application which app.js root folder


// we need provider to make aiblele store to our app
// whicch come from react redux so it is like bridge between
// redux tookkit and react
// wrap all our app in provoder  and give appstore as props
// we can also filter fwe dont want that this store is avble
// not to whole app we can then only wrap with that component


// we need cart slice now 
// we will make another file as cartslice.js

// now we have to add that slice in store here above 
// we have to use selctor to read value in cart see header cart code useselector use


export default appStore;