module.exports = {
    plugins: [
        "@typescript-eslint",
        "import",
        "jest",
        "security",
        "node",
        "anti-trojan-source",
        "mongodb",
    ],
    rules: {
        //mongodb
        "mongodb/check-insert-calls": "error",
        "mongodb/check-query-calls": "error",
        "mongodb/check-update-calls": "error",
        "mongodb/check-remove-calls": "error",
        "mongodb/check-deprecated-calls": "error",
        "mongodb/no-replace": "error",
        "mongodb/check-rename-updates": "error",
        "mongodb/check-unset-updates": "error",
        "mongodb/check-current-date-updates": "error",
        "mongodb/check-numeric-updates": "error",
        "mongodb/check-minmax-updates": "error",
        "mongodb/check-set-updates": "error",
        "mongodb/check-push-updates": "error",
        "mongodb/check-pull-updates": "error",
        "mongodb/check-pop-updates": "error",
        "mongodb/check-addtoset-updates": "error",
        "mongodb/check-deprecated-updates": "error",

        //anti-trojan-source
        "anti-trojan-source/no-bidi": "error",

        //security
        "security/detect-buffer-noassert": "error",
        "security/detect-child-process": "error",
        "security/detect-disable-mustache-escape": "error",
        "security/detect-eval-with-expression": "error",
        "security/detect-new-buffer": "error",
        "security/detect-no-csrf-before-method-override": "error",
        "security/detect-non-literal-regexp": "error",
        "security/detect-non-literal-require": "error",
        "security/detect-possible-timing-attacks": "error",
        "security/detect-pseudoRandomBytes": "error",
        "security/detect-unsafe-regex": "error",

        //node
        "node/no-callback-literal": "error",
        "node/no-exports-assign": "error",
        "node/no-extraneous-import": "error",
        "node/no-extraneous-require": "error",
        "node/no-missing-import": "off",
        "node/no-missing-require": "off",
        "node/no-path-concat": "error",
        "node/no-process-exit": "error",
        "node/no-unpublished-bin": "off",
        "node/no-unpublished-import": "off",
        "node/no-unpublished-require": "off",
        "node/shebang": "error",
        "node/no-deprecated-api": "warn",

        //jest
        "jest/no-disabled-tests": "error",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
        "jest/no-commented-out-tests": "error",
        "jest/expect-expect": "error",
        "jest/no-conditional-expect": "error",
        "jest/no-export": "error",
        "jest/no-jest-import": "warn",
        "jest/no-mocks-import": "error",
        "jest/no-standalone-expect": "error",
        "jest/no-test-return-statement": "error",
        "jest/valid-describe-callback": "error",
        "jest/valid-title": "error",

        //import
        "import/no-default-export": "error",
        "import/no-unassigned-import": "error",

        //typescript-eslint
        "@typescript-eslint/strict-boolean-expressions": "off",
        "max-classes-per-file": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-shadow": ["error"],

        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unified-signatures": "error",
        "camelcase": "error",
        "complexity": "error",
        "constructor-super": "error",
        "curly": "error",
        "default-case": "error",
        "guard-for-in": "error",
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "unknown",
            "Array",
            "void",
            "never",
            "object",
            "Object",
            "Symbol",
            "await",
            "async",
            "bigint",
            "BigInt",
        ],
        "id-match": "error",
        "max-len": [
            "error",
            {
                "code": 140
            }
        ],
        "new-parens": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-empty": "error",
        "no-eval": "error",
        "no-fallthrough": "error",
        "no-invalid-this": "off",
        "no-multiple-empty-lines": "error",
        "no-new-wrappers": "error",
        "no-redeclare": "error",
        "no-shadow": "off",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unsafe-finally": "error",
        "no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": true
            }
        ],
        "no-unused-labels": "error",
        "no-var": "error",
        "no-void": "error",
        "one-var": [
            "error",
            "never"
        ],
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            }
        ],
        "prefer-const": "error",
        "use-isnan": "error",
        "valid-typeof": "error",
    }
};
