/**
 * to check being undefined or null
 * @param value
 */
export function isNullOrUndefined(value: unknown): value is undefined | null  {
  return value === undefined || value === null;
}
