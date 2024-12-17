import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import stylistic from "@stylistic/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		languageOptions: {
			globals: globals.browser,
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		plugins: {
			"react-refresh": reactRefresh,
			"@stylistic": stylistic, // Importando o plugin corretamente no ESM
		},
		settings: {
			react: {
				version: "detect", // Detecta automaticamente a versão do React
			},
		},
		rules: {
			// React Refresh
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
			"react/react-in-jsx-scope": "off", // Desativa a exigência de React no escopo

			// Stylistic Rules
			"@stylistic/indent": ["error", "tab", { SwitchCase: 1 }], // Usa tabulação para indentação ao invés de spaces
			"@stylistic/semi": ["error", "always"], // Sempre usa ponto e vírgula no final
			"@stylistic/quotes": ["error", "double"], // Usa aspas duplas
			"@stylistic/object-curly-spacing": ["error", "always"], // Adiciona espaços dentro de chaves { chave: valor }
			"@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: false }], // Coloca chaves em linhas diferentes
			"@stylistic/arrow-parens": ["error", "always"], // Sempre adiciona parênteses em arrow functions
		},
	},
	
];
