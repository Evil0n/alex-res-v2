// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactPlugin from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import tailwind from "eslint-plugin-tailwindcss";

export default tseslint.config(
    { ignores: ["dist", "build", "node_modules", ".husky", ".vscode"] },

    // базовые JS/TS
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: process.cwd(),
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: { jsx: true },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            "@typescript-eslint": tseslint.plugin,
            react: reactPlugin,
            "react-hooks": reactHooks,
            "jsx-a11y": jsxA11y,
            import: importPlugin,
            tailwindcss: tailwind,
        },
        settings: {
            react: { version: "detect" },
            "import/resolver": {
                node: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
                typescript: true,
            },
            tailwindcss: {
                callees: ["cn", "clsx", "cva"],
            },
        },
        rules: {
            // базовые рекомендации
            ...js.configs.recommended.rules,
            ...tseslint.configs.recommendedTypeChecked[0].rules,
            ...tseslint.configs.stylisticTypeChecked[0].rules,

            // React / Hooks / A11y
            ...reactPlugin.configs.recommended.rules,
            ...jsxA11y.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,

            // Import hygiene
            "import/first": "error",
            "import/no-duplicates": "error",
            "import/newline-after-import": "error",

            // Tailwind
            "tailwindcss/classnames-order": "warn",
            "tailwindcss/no-custom-classname": "off",

            // стиль
            "@typescript-eslint/consistent-type-imports": ["warn", { fixStyle: "inline-type-imports" }],
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],

            // отключаем то, что отдаём под Prettier
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
        },
    }
);
