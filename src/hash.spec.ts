import { hash } from "./hash";

describe("Hashing", () => {
  it("should return a valid string", () => {
    const output = hash("some value");
    expect(output).toBeTruthy();
    expect(typeof output).toEqual("string");
  });

  const algorithms = ["md5", "sha1", "sha256", "sha384", "sha512"];
  for (const algorithm of algorithms) {
    it(`should work with ${algorithm}`, () => {
      const output = hash("some value", algorithm);
      expect(output).toBeTruthy();
    });
  }
});