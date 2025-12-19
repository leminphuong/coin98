"use client";

import { useEffect, useState } from "react";

const AUTH_KEY = "amberblocks_auth_user";

export type AuthUser = {
  id: number;
  slug: string;
  language: string;
  email: string;
};

export function useAuthUser() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(AUTH_KEY);
      if (raw) {
        setUser(JSON.parse(raw));
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  /* logout helper */
  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    setUser(null);
    window.location.href = "/signin";
  };

  return {
    user,
    loading,
    isLoggedIn: !!user,
    logout,
  };
}
