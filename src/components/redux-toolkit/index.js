import { createSlice } from "@reduxjs/toolkit";
const projectslice = createSlice({
  name: "display",
  initialState: {value:true,
    currentiteminfo:{},
    users:[]
  },
  reducers: {
    dispayinfo: (state,action) => {
      state.value = !action.payload;
    },
    setvalue:(state,action)=>{
        state.currentiteminfo=action.payload
       
    },
    adduser: (state, action) => {
      state.users = action.payload; // Correct usage to add users to the array
    }
  },
});

export const { dispayinfo ,setvalue,adduser} = projectslice.actions;
export default projectslice.reducer;
