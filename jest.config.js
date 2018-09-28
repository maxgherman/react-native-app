
module.exports = {
    preset: "react-native",

    transform: {
        "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
        "^.+\\.tsx?$": "ts-jest"
    },

    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

    moduleFileExtensions: [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json"
    ],

    modulePaths: [
        "<rootDir>"
    ],

    globals: {
        "ts-jest": {
            "tsConfig": "tsconfig.jest.json"
        }
    },

    testPathIgnorePatterns: [
        "\\.snap$",
        "<rootDir>/node_modules/",
        "<rootDir>/lib/"
    ],
    cacheDirectory: ".jest/cache"
  }
