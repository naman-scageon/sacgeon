export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  // Clamp value to input range
  const clampedValue = Math.max(inMin, Math.min(value, inMax));
  return (
    ((clampedValue - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
  );
}
