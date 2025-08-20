// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useEffect, useState } from "react";
import api from "./services/api";

export default function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    api.get("/health").then(res => setMsg(res.data.message));
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">
        🚀 {msg || "Loading..."}
      </h1>
    </div>
  );
}
