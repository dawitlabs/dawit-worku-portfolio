declare module "flubber" {
  export type Interpolator = (t: number) => string;
  export function interpolate(
    from: string,
    to: string,
    options?: Record<string, unknown>,
  ): Interpolator;
  export function combine(
    fromShapes: string[],
    toShape: string,
    options?: Record<string, unknown>,
  ): Interpolator;
  export function separate(
    fromShape: string,
    toShapes: string[],
    options?: Record<string, unknown>,
  ): Interpolator;
}
