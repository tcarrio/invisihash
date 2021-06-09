export const QUATERNARY_CHARACTER_MAPPING = [
  /**
   * U+200B    Zero-Width Space
   */
  "\u200b",
  /**
   * U+200C    Zero Width Non-Joiner
   */
  "\u200c",
  /**
   * U+200E    Left-To-Right Mark
   */
  "\u200e",
  /**
   * U+200F    Right-To-Left Mark
   */
  "\u200f",
];

export const CHARACTER_QUATERNARY_MAPPING = Object.freeze(
  QUATERNARY_CHARACTER_MAPPING.reduce(
    (obj, key, index) => ({ ...obj, [key]: index }),
    {}
  )
);
