import { configureStore } from "@reduxjs/toolkit";
import heroSlice from "./Hero.slice";
const store = configureStore({
    reducer: {
      hero: heroSlice.reducer
    },
  });
  export default store;