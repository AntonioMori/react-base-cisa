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
			"@stylistic/brace-style": [ "warn", "1tbs", { allowSingleLine: false } ], //estilo das chaves de blocos, se será na mesma linha como } esle { } 
			"@stylistic/comma-dangle": [ "warn", { //comma dangle força que a virgula fique no final de objetos e arrays e não no início
				"arrays": "always-multiline",
				"objects": "always-multiline",
				"imports": "always-multiline",
				"exports": "always-multiline",
				"functions": "always-multiline",
				"importAttributes": "always-multiline",
				"dynamicImports": "always-multiline",
			} ],
			"@stylistic/comma-spacing": [ "warn", { "before": false, "after": true } ], // Adiciona espaço após vírgulas
			"@stylistic/comma-style": [ "warn", "last" ], // Adiciona vírgula no final e nao no início da linha
			"@stylistic/curly-newline": [ "warn", "always" ], // obriga a quebra de linha após abrir um bloc com chaves {}
			


      
      "@stylistic/implicit-arrow-linebreak": [ "warn", "beside" ], // Adiciona a seta da arrow function na mesma linha que o corpo da função
			"@stylistic/indent": [ "warn", "tab", { SwitchCase: 1, ignoreComments: true } ], // Usa tabulação para indentação ao invés de spaces
			"@stylistic/indent-binary-ops": [ "warn", "tab" ], // Usa tabulação para indentação de operadores binários ** && etc
			// "@stylistic/jsx-child-element-spacing": "warn", // Adiciona espaço entre elementos JSX exemplo 
				// O seguinte exemplo fica sem espaçamento entre o teste e o dois
				// 		teste
				// 		<strong>
				// 			dois
				//	 	</strong>
				
				// a maneira certa é:
				// teste <strong>dois</strong>

			"react/jsx-closing-bracket-location": [ 1, "tag-aligned" ], // deixa alinhado o fechamento da tag "/>"
			"react/jsx-closing-tag-location": [ 1, "tag-aligned" ], // deixa alinhado o fechamento da tag com a abertura da tag <div> e </div>
			// "@stylistic/jsx-curly-brace-presence": [ "warn", { "props": "ignore", "children": "ignore" } ], // obriga o uso de chaves nas props
				//exemplo
				// errado: <Button variant="contained" />
				// certo: <Button variant={"contained"} />
			"@stylistic/jsx-curly-newline": [ "warn", "consistent" ], // Adiciona quebra de linha após abrir chaves
        // "@stylistic/jsx-curly-spacing": [ "warn", { "when": "never", "children": false } ], // Adiciona espaçamento entre chaves
			"@stylistic/jsx-first-prop-new-line": [ "warn", "multiline-multiprop" ], // Adiciona quebra de linha após a primeira propriedade 
			  // se houver mais de uma e a tag estiver em mais de uma linha
			"@stylistic/jsx-function-call-newline": [ "warn", "always" ], // força que a chamada de função jsx fique em uma linha separada
			"@stylistic/jsx-indent": [ "warn", "tab" ],
			  // faz a indentação do jsx com tabulação e não espaços e verifica os atributos
			"@stylistic/jsx-indent-props": [ "warn", "tab" ], // faz a indentação dos atributos de um componente jsx	
        //exemplo: 
        // <Componente
        //		prop1="teste"
        //		prop2="teste"
        //	/>
			"@stylistic/jsx-max-props-per-line": [ "warn", { "maximum": { "single": 4, "multi": 1 } } ],
        // limita a quantidade de props por linha , se for uma propriedade por linha max 4, se for mais de 4 propriedades por linha 
        //então limita a 1 por linha
			"@stylistic/jsx-pascal-case": [ "error", { allowAllCaps: false, allowNamespace: false, allowLeadingUnderscore: true } ],
			  // obriga que os componentes jsx sejam escritos em PascalCase
			"@stylistic/jsx-props-no-multi-spaces": "warn", // não permite mais de um espaço em branco entre as props na mesma linha 
        //exemplo errado:
        // <Divider       variant="middle"      orientation="vertical"   />
        //exemplo correto: 
        // <Divider variant="middle" orientation="vertical" />
			"@stylistic/jsx-self-closing-comp": [ "warn", { "component": true } ],
        // quando o componente não tem filhos ele deve ser uma tag auto fechada
        //exemplo errado:
        // <Componente> </Componente>
        //exemplo correto:
        // <Componente /> 
			

			// "@stylistic/jsx-sort-props": [ "warn", { //organiza em ordem alfabética as props de um componente jsx
        //   // "callbacksLast": <boolean>,
        //   // "shorthandLast": <boolean>,
        // 	"shorthandFirst": true,
        // 	"multiline": "last",
        // 	"ignoreCase": true,
        // 	"noSortAlphabetically": false,
        // 	"locale": "auto",
        // } ],
			"@stylistic/jsx-tag-spacing": [ "warn", {
				"closingSlash": "never", // não permite espaçamento no fechamento da tag exemplo correto: <Componente/> errado: <Componente />
				"afterOpening": "never", // não permite espaçamento após a abertura da tag exemplo correto: <Componente/> errado: < Componente/>
			} ],
			"@stylistic/jsx-wrap-multilines": [ // força com que o return tenha () quando o componente jsx tiver mais de uma linha
				"warn",
				{
					"declaration": "ignore",
					"assignment": "ignore",
					"return": "parens",
					"arrow": "ignore",
					"condition": "ignore",
					"logical": "ignore",
					"prop": "ignore",
					"propertyValue": "ignore",
				},
			],
			"@stylistic/keyword-spacing": [ "warn", { "before": true, "after": true } ], // Adiciona espaço antes e depois das palavras-chave
      //else e else if
			"@stylistic/multiline-ternary": [ "warn", "always-multiline" ], // força que o ternário seja multilinha 
      //exemplo 
      // isValid 
      // ?   <Componente1 />
      // :   <Componente2 />
			"@stylistic/no-extra-semi": "warn", // não permite ponto e vírgula extras ;; ou retunr x;;
			"@stylistic/quotes": [ "warn", "double" ], // Usa aspas duplas
			"@stylistic/semi": [ "warn", "always" ], // Sempre usa ponto e vírgula no final
			
      "@stylistic/no-floating-decimal": "warn", //sem .5 ou 2.0, correto: 0.5 ou 2.0
			"@stylistic/no-mixed-operators": "warn", //não misturar operadores sem parênteses
			"@stylistic/no-multi-spaces": "warn", //não permite mais de um espaço em branco em qualquer lugar
			"@stylistic/camelcase": "error", // Usa camelCase para variáveis e funções
			"@stylistic/object-curly-spacing": [ "warn", "always" ], // Adiciona espaços dentro de chaves { chave: valor }
			"@stylistic/eol-last": [ "warn", "always" ], // Garante uma linha em branco no final do arquivo
			"@stylistic/func-call-spacing": [ "error", "never" ], // Não permite espaços entre o nome da função e os parênteses de chamada

		},
	},

];
