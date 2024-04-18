import {createSlice,current} from '@reduxjs/toolkit';

// now configure slice

const cartSlice=createSlice({
  name:'cart',
  initialState:{
    items:[]
  },
  reducers:{
    // we are mutating state 
    addItem:(state,action)=>{


      // vanila (older) redux = dont mutate here
      // we was not able to modify earlier
      // earlier we use to copy and then push
      // const newState=[...state];
      // newState.items.push(action.payload);
      // return new state 

      // redux tookkit we have to mutate state directly
         // redux using immer library to internally muatet it
        // it see differnces and then uodate internslly 
      // so make it easier
      state.items.push(action.payload)
    },
    removeItem:(state)=>{
        // we dont need action hee so avoid it  
        state.items.pop();
    },
    clearCart:(state)=>{
      // rtk says eirther we can muatte the existing state or return a new state
        state.items.length=0;
        // return {items: []}; it will replace orginal state with new state
        // we can return empty or muate state
        // console.log(current(state)); tgo read state
    }
    // get two paramter state and action
    // reducer fucntion modify the item in cart means slice of store
// ex : diffent type of action are add an item remove item 
  }
})

// we export all action and reducr both
export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;
// it reutrn one slice reducer which contains many reducers which are add rmeove clear