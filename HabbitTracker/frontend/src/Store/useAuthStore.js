// src/store/useAuthStore.js
import { create } from "zustand";
import api from "../utils/axios";

export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  signup: async (username, email, password) => {
    try {
      set({ loading: true, error: null });
      const res = await api.post("/users/signup", { username, email, password });
      set({ user: res.data, loading: false });
    } catch (err) {
      set({ error: err.response?.data?.message || "Signup failed", loading: false });
    }
  },

  login: async (email, password) => {
    try {
      set({ loading: true, error: null });
      const res = await api.post("/users/login", { email, password });
      set({ user: res.data, loading: false });
    } catch (err) {
      set({ error: err.response?.data?.message || "Login failed", loading: false });
    }
  },

  logout: async () => {
    try {
      await api.post("/users/logout");
      set({ user: null });
    } catch (err) {
      console.error(err);
    }
  },
}));
