
module.exports = {
    preset: "react-native",
    testEnvironment: 'node',

    moduleFileExtensions: [
        "ts",
        "tsx",
        "js"
    ],

    transform: {
        "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
        "\\.(ts|tsx)$": "ts-jest"
    },
    
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$",
    
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json"
    ],

    globals: {
        "ts-jest": {
            "tsConfig": "tsconfig.json"
        }
    }
};