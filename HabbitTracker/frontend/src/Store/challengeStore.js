import { create } from "zustand";
import api from "../api/axios";

export const useChallengeStore = create((set) => ({
  challenges: [],
  loading: false,
  error: null,

  fetchChallenges: async () => {
    set({ loading: true });
    try {
      const { data } = await api.get("/challenges");
      set({ challenges: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  addChallenge: async (challenge) => {
    try {
      const { data } = await api.post("/challenges", challenge);
      set((state) => ({ challenges: [...state.challenges, data] }));
    } catch (err) {
      set({ error: err.message });
    }
  },

  deleteChallenge: async (id) => {
    try {
      await api.delete(`/challenges/${id}`);
      set((state) => ({
        challenges: state.challenges.filter((c) => c._id !== id),
      }));
    } catch (err) {
      set({ error: err.message });
    }
  },
}));
