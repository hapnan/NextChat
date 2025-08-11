import { defineConfig, globalIgnores } from "eslint/config";
import prettier from "eslint-plugin-prettier";
import unusedImports from "eslint-plugin-unused-imports";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import reactPlugin from "eslint-plugin-react"; 
import reacthookPlugin from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores([
    "public/serviceWorker.js",
    "app/mcp/mcp_config.json",
    "app/mcp/mcp_config.default.json",
]), {
    extends: compat.extends("next/core-web-vitals"),

    plugins: {
        prettier,
        "unused-imports": unusedImports,
        reactPlugin,
        reacthookPlugin,
        nextPlugin,
    },

    rules: {
        "unused-imports/no-unused-imports": "warn",
        "react-hooks/rules-of-hooks": "off",
    },
}]);