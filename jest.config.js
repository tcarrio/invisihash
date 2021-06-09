module.exports = {
  displayName: "invisisha256",
  transform: {
    "^.+\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["ts", "js", "json"],
  coverageDirectory: "./coverage",
  moduleDirectories: ["<rootDir>/node_modules"],
};
