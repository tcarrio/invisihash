import { hash } from "./hash";

describe("Hashing", () => {
  it("should return a valid string", () => {
    const output = hash("some value");
    expect(output).toBeTruthy();
    expect(typeof output).toEqual("string");
  });

  const algorithms: Algorithm[] = [
    { name: "md5", bits: 128 },
    { name: "sha1", bits: 160 },
    { name: "sha224", bits: 224 },
    { name: "sha256", bits: 256 },
    { name: "sha384", bits: 384 },
    { name: "sha512", bits: 512 },
  ];

  for (const algorithm of algorithms) {
    it(`should work with ${algorithm}`, () => {
      const output = hash("some value", algorithm.name);
      expect(output).toBeTruthy();
      expect(output).toHaveLength(algorithm.bits / 2);
    });
  }
});

interface Algorithm {
  name: string;
  bits: number;
}