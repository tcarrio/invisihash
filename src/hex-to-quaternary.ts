export function convertHexToQuaternary(input: number): [number, number] {
  return [Math.floor(input / 4), input % 4];
}