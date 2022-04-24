import { createSlice } from "@reduxjs/toolkit";

const heroSlice = createSlice({
  name: "hero",
  initialState: { team: [] },
  reducers: {
    addSuperhero(state, action) {
      const newHero = action.payload;
      console.log(newHero, "new");
      const existingItem = state.team.find((item) => item.id === newHero.id);
      const largeArray = state.team.length;
      if (existingItem) {
        console.log("ya agregado");
      } else if (largeArray === 6) {
        console.log("6 inte");
      } else {
        state.team.push(newHero);
      }
    },
    deleteTeam(state) {
      state.team = [];
    },
    deleteHero(state, action) {
      const id = action.payload;
      console.log(id, "id");
      state.team = state.team.filter((hero) => hero.id !== id);
    },
  },
});

export const heroActions = heroSlice.actions;

export default heroSlice;
