// components/RocketCard.tsx
import type { Rocket } from "../../lib/models/Rocket";

interface RocketCardProps {
  rocket: Rocket;
}

export default function RocketCard({ rocket }: RocketCardProps) {
  return (
    <li className="rocket-card">
      <h2>{rocket.nombre}</h2>
      <p>
        <strong>Tipo:</strong> {rocket.tipo}
      </p>
      <p>
        <strong>Altura:</strong> {rocket.altura} m
      </p>
      <p>
        <strong>Diámetro:</strong> {rocket.diametro} m
      </p>
      <p>
        <strong>Masa:</strong> {rocket.masa} kg
      </p>
    </li>
  );
}
