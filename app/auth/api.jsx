// src/lib/axios.ts
import axios from "axios";

const api = axios.create({
    // .env se lo, warna fallback use ho jayega
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    withCredentials: true, // agar cookies use karni hon
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;


// console.log("API Base URL:", import.meta.env.NEXT_PUBLIC_API_BASE_URL);
