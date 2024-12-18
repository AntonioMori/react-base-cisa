import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import stylistic from "@stylistic/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: [ "**/*.{js,mjs,cjs,ts,jsx,tsx}" ],
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

			// Stylistic Rules disponíveis em "https://eslint.style/packages/default"
			"@stylistic/array-bracket-spacing": [ "warn", "always", { "objectsInArrays": true, "arraysInArrays": true } ], // adiciona espaçamento entre colchetes, exemplo [ componente1, compoentente2 ] e não [componente1,componente2]
			"@stylistic/arrow-parens": [ "warn", "always" ], // Sempre adiciona parênteses em arrow functions mesmo que ela tenha somente um parâmentro exemplo "(a) => {}" e não "(a) => retunr teste;"
			"@stylistic/arrow-spacing": "warn", // Adiciona espaço antes e depois da seta em arrow functions de "(a)=>{}" para "(a) => {}"
			"@stylistic/block-spacing": "warn", // Adiciona espaço antes e depois de blocos DENTRO das chaves exemplo     de   "if(true){}"    para   "if(true){ return true; }"
			"@stylistic/no-trailing-spaces": [ "warn", { "skipBlankLines": true, "ignoreComments": true } ], // Não permite espaços em branco no final das linhas um espaço após o ; "isso melhora o bundle e assertividade da detecção de mudanças do github"
			"@stylistic/brace-style": [ "error", "1tbs", { allowSingleLine: false } ], // Coloca chaves em linhas diferentes
			"@stylistic/comma-dangle": [ "error", {  //exemplo do que é o always-multiline no link ""
				"arrays": "always-multiline",
				"objects": "always-multiline",
				"imports": "always-multiline",
				"exports": "always-multiline",
				"functions": "always-multiline",
				"importAttributes": "always-multiline",
				"dynamicImports": "always-multiline",
			} ],
			"@stylistic/comma-spacing": [ "warn", { "before": false, "after": true } ], // Adiciona espaço após vírgulas
			"@stylistic/comma-style": [ "error", "last" ], // Adiciona vírgula no final e nao no início da linha


			


			"@stylistic/indent": [ "warn", "tab", { SwitchCase: 1, ignoreComments: true } ], // Usa tabulação para indentação ao invés de spaces
			// "@stylistic/camelcase": "error", // Usa camelCase para variáveis e funções
			"@stylistic/quotes": [ "error", "double" ], // Usa aspas duplas
			"@stylistic/semi": [ "error", "always" ], // Sempre usa ponto e vírgula no final
			"@stylistic/object-curly-spacing": [ "warn", "always" ], // Adiciona espaços dentro de chaves { chave: valor }
			//recomendações copilot
			// "@stylistic/comma-dangle": ["error", "always-multiline"], // Adiciona vírgula no final de objetos e arrays multiline
			"@stylistic/eol-last": [ "error", "always" ], // Garante uma linha em branco no final do arquivo
			"@stylistic/space-before-function-paren": [ "error", "always" ], // Adiciona espaço antes dos parênteses das funções
			"@stylistic/keyword-spacing": [ "error", { "before": true, "after": true } ], // Adiciona espaço antes e depois das palavras-chave
			"@stylistic/space-infix-ops": "error", // Adiciona espaço ao redor dos operadores infix
			"@stylistic/space-before-blocks": [ "error", "always" ], // Adiciona espaço antes dos blocos
			"@stylistic/space-in-parens": [ "error", "never" ], // Não permite espaços dentro dos parênteses
			"@stylistic/func-call-spacing": [ "error", "never" ], // Não permite espaços entre o nome da função e os parênteses de chamada
			"@stylistic/key-spacing": [ "error", { "beforeColon": false, "afterColon": true } ], // Adiciona espaço após os dois-pontos em objetos
		},
	},

];
