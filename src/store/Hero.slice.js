import { createSlice } from "@reduxjs/toolkit";

const heroSlice = createSlice({
  name: "hero",
  initialState: { team: [], badHero: 0, goodHero: 0 },
  reducers: {
    addSuperhero(state, action) {
      const newHero = action.payload;
      console.log(newHero, "new");
      state.team.push(newHero);
      if (newHero.biography.alignment === "bad") {
        state.badHero++;
      } else {
        state.goodHero++;
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
