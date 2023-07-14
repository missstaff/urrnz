import { createSlice } from "@reduxjs/toolkit";


const initialState = true;

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading(state, action) {
      return action.payload;
    },
  },
});

export const loadingActions = loadingSlice.actions;
export default loadingSlice;