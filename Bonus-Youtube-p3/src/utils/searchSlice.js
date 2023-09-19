import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{

    },
    reducers:{
        cacheResults: (state,action) =>{
            //state is empty in beginning 
            //spread operator or you can use Object.assign 
            state = Object.assign(state, action.payload);
        },

    },
});

export const{cacheResults}  = searchSlice.actions;

export default searchSlice.reducer;

