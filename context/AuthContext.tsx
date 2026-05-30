/*  */
"use client";

import api from "@/lib/api";
import { AllUser } from "@/types/user.type";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  user: AllUser | null;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<AllUser | null>>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AllUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/user/me", {
          headers: { "Cache-Control": "no-cache" },
        });
        setUser(res.data);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          setUser(null);
        } else {
          console.error("Lỗi hệ thống");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Không thể sử dụng useAuth bên ngoài AuthProvider");
  }
  return context;
};
