// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPokemon = createAsyncThunk(
  "pokemons/list",
  async ({ limit }) => {
    const getLinkPokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    );
    const promisePokemon = await getLinkPokemon.data.results.map(
      async (pokemon) => {
        const result = await axios.get(pokemon.url);
        return result.data;
      }
    );
    const results = await Promise.all(promisePokemon);
    return results;
  }
);

export const findPokemon = createAsyncThunk(
  "pokemons/find",
  async ({ name }) => {
    const pokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    console.log(pokemon);
    return [pokemon.data];
  }
);

export const pokemonSlice = createSlice({
  name: "role",
  initialState: {
    pokemons: [],
    notFound: false,
  },
  reducers: {
    clearFound: (state, action) => {
      state.notFound = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPokemon.fulfilled, (state, action) => {
        state.pokemons = action.payload;
      })
      .addCase(findPokemon.fulfilled, (state, action) => {
        state.pokemons = action.payload;
      })
      .addCase(findPokemon.rejected, (state, action) => {
        state.notFound = true;
      });
  },
});

export const { clearFound } = pokemonSlice.actions;

export default pokemonSlice.reducer;
