"use client";

import { useEffect } from "react";

export default function PWA() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => console.log("PWA prête !"))
        .catch((err) => console.error("Erreur PWA :", err));
    }
  }, []);

  return null; // Ce composant ne dessine rien, il exécute juste le script
}