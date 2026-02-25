// app/api/rockets/route.ts
import { NextResponse } from "next/server";
import type { Rocket } from "../../../lib/models/Rocket";

export async function GET() {
  try {
    const response = await fetch("https://api.spacexdata.com/v4/rockets");
    if (!response.ok) throw new Error("Error al obtener cohetes");

    const cohetes = await response.json();

    const resultado: Rocket[] = cohetes.map((rocket: ApiRocket) => ({
      nombre: rocket.name,
      tipo: rocket.type,
      altura: rocket.height.meters,
      diametro: rocket.diameter.meters,
      masa: rocket.mass.kg,
    }));

    return NextResponse.json(resultado);
  } catch (error: unknown) {
    let mensaje = "Error desconocido";

    if (error instanceof Error) {
      mensaje = error.message;
    }
    return NextResponse.json({ error: mensaje }, { status: 500 });
  }
}
