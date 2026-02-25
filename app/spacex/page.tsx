"use client";

import { useState, useEffect } from "react";
import type { Rocket } from "../../lib/models/Rocket";
import RocketCard from "../../components/RocketCard/RocketCard";
import "./rockets.css"; // archivo de estilos

export default function RocketsPage() {
  const [rockets, setRockets] = useState<Rocket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/serverless")
      .then((res) => res.json())
      .then((data: Rocket[]) => setRockets(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Cargando cohetes...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="rockets-container">
      <h1>Cohetes de SpaceX</h1>
      <ul className="rockets-list">
        {rockets.map((r) => (
          <RocketCard key={r.nombre} rocket={r} />
        ))}
      </ul>
    </div>
  );
}
