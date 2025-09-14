import { create } from "zustand";
import api from "../api/axios";

export const useHabitStore = create((set) => ({
  habits: [],
  loading: false,
  error: null,

  fetchHabits: async () => {
    set({ loading: true });
    try {
      const { data } = await api.get("/habits");
      set({ habits: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  addHabit: async (habit) => {
    try {
      const { data } = await api.post("/habits", habit);
      set((state) => ({ habits: [...state.habits, data] }));
    } catch (err) {
      set({ error: err.message });
    }
  },

  deleteHabit: async (id) => {
    try {
      await api.delete(`/habits/${id}`);
      set((state) => ({
        habits: state.habits.filter((h) => h._id !== id),
      }));
    } catch (err) {
      set({ error: err.message });
    }
  },
}));
