interface ApiRocket {
  name: string;
  type: string;
  height: { meters: number | null };
  diameter: { meters: number | null };
  mass: { kg: number | null };
}
