import * as crypto from "crypto";
import { convertHexToQuaternary } from "./hex-to-quaternary";
import { QUATERNARY_CHARACTER_MAPPING } from "./mapping";

/**
 * Hashes an input string with the provided algorithm, defaulting
 * to SHA-256, and outputs a string encoded using the quaternary character
 * mapping to zero-width characters
 * 
 * @example hash("input", "sha512")
 * 
 * @param input string
 * @param algorithm string
 * @returns string
 */
export function hash(input: string, algorithm = "sha256"): string {
  return [...crypto.createHash(algorithm).update(input).digest("hex")]
    .map((entry) => Number.parseInt(entry, 16))
    .reduce((list, num) => [...list, ...convertHexToQuaternary(num)], [] as number[])
    .map((qIndex) => QUATERNARY_CHARACTER_MAPPING[qIndex])
    .join("");
}
