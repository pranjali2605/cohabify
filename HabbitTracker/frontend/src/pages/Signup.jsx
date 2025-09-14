import { useState } from "react";
import { useAuthStore } from "../Store/useAuthStore";
import { UserPlus } from "lucide-react";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const { signup, loading, error } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(form.username, form.email, form.password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <UserPlus /> Signup
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <button type="submit" className="btn btn-primary w-full" disabled={loading}>
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
}
