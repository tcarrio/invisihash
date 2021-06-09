import { convertHexToQuaternary } from "./hex-to-quaternary";

describe("Hex to Quaternary conversion", () => {
  it("Should convert the entire hexadecimal range", () => {
    expect(convertHexToQuaternary(0)).toEqual([0, 0]);
    expect(convertHexToQuaternary(1)).toEqual([0, 1]);
    expect(convertHexToQuaternary(2)).toEqual([0, 2]);
    expect(convertHexToQuaternary(3)).toEqual([0, 3]);
    expect(convertHexToQuaternary(4)).toEqual([1, 0]);
    expect(convertHexToQuaternary(5)).toEqual([1, 1]);
    expect(convertHexToQuaternary(6)).toEqual([1, 2]);
    expect(convertHexToQuaternary(7)).toEqual([1, 3]);
    expect(convertHexToQuaternary(8)).toEqual([2, 0]);
    expect(convertHexToQuaternary(9)).toEqual([2, 1]);
    expect(convertHexToQuaternary(10)).toEqual([2, 2]);
    expect(convertHexToQuaternary(11)).toEqual([2, 3]);
    expect(convertHexToQuaternary(12)).toEqual([3, 0]);
    expect(convertHexToQuaternary(13)).toEqual([3, 1]);
    expect(convertHexToQuaternary(14)).toEqual([3, 2]);
    expect(convertHexToQuaternary(15)).toEqual([3, 3]);
  });
});
