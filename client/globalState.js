import {useEffect} from "react";
import {create} from "zustand";
import axios from "axios";


export const useGlobleSate = create(async (set) => ({
  movies: [],
  isLoading: false,
  error: null,
  getMovies: () => async () => {
    set({isLoading: true});
    try {
      const data = await axios({url: "http://localhost:3000/api/movies"});
      set({movies: data});
    } catch (error) {
      set({error: error.message});
    } finally {
      set({isLoading: false});
    }
  },
  seatSelections: () => set({bears: 0}),
}));
