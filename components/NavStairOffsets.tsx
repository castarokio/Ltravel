/**
 * Returns the permanent stair-step layout offsets for the first three navigation items.
 * - Item 0: lowest (y = 12, slightly shifted left)
 * - Item 1: slightly higher (y = 6, slightly shifted left)
 * - Item 2: level with the rest of the navbar (y = 0, no shift)
 */
export function getNavStairOffset(index: number) {
  if (index === 0) return { x: -10, y: 12 };
  if (index === 1) return { x: -5, y: 6 };
  return { x: 0, y: 0 };
}
