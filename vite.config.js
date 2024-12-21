/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import { configDefaults } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [ react() ], // Adiciona o plugin do React
	server: {
		port: 3000, // Define a porta do servidor
	},
	test: {
		environment: "jsdom", // Define o ambiente de teste
		globals: true, // Habilita o uso de variáveis globais
		css: true, // Habilita o suporte a CSS
		exclude: [ ...configDefaults.exclude, "e2e/*" ], // Exclui a pasta e2e dos testes
		coverage: { // Configuração de cobertura de código
			provider: "v8",
			reporter: [ "text", "json", "html" ],
		},
	},
});
