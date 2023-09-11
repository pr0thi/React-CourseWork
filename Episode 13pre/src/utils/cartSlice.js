import {createSlice} from "@reduxjs/toolkit";

//jahan jahan @reduxjs/toolkit import kiya hai vahan vahan par hum Function se interact kr rhe hai in our redux box
//i.e clear cart ya add Item jab click krenge toh action perform hua 
/*
    Uss action se Reducer call hua jisne invoke kiya container function mai 
    aur jahan jahan react-redux import kiya hai vahan vahan response await kiya hai 
    yaani redux aur react ko connect kra hai return mai 
    i.e. Subribing the button

 */


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        //object having cart items 
        items:[],
    },
    reducers:{
        //object which can take actions 
        addItem:(state, action)=>{
            //modify the state according to the action 
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length = 0;

            //you can also do return[] this will replace original items(whole state);
            //this will also alter the original state 

            //you have to do, items:[]
        },

    }
});

export const{addItem, removeItem, clearCart} = cartSlice.actions;
//taking out actions individually and exporting it 

export default cartSlice.reducer;

