"use client";

import { useState, useEffect } from "react";
import type { Rocket } from "../../lib/models/Rocket";

export default function RocketsPage() {
  const [rockets, setRockets] = useState<Rocket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/spacex")
      .then((res) => res.json())
      .then((data: Rocket[]) => setRockets(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Cargando cohetes...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Cohetes de SpaceX</h1>
      <ul>
        {rockets.map((r) => (
          <li key={r.nombre}>
            <strong>{r.nombre}</strong> ({r.tipo}) - Altura: {r.altura} m,
            Diámetro: {r.diametro} m, Masa: {r.masa} kg
          </li>
        ))}
      </ul>
    </div>
  );
}
