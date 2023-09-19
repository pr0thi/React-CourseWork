import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action) =>{
                //don't hardcode this 10
                state.messages.splice(LIVE_CHAT_COUNT,1);
                //removes 1 msg from the top
                //state.messages.push(action.payload); it goes in the end using unshift
                state.messages.unshift(action.payload);            
            
        },
    },
});

export const {addMessage} = chatSlice.actions;

export default chatSlice.reducer;