/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import { configDefaults } from "vitest/config";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [ react() ],
	
	// Configuração dos aliases para o Vite
	resolve: {
		alias: {
			// Alias principal para a pasta src
			"@": path.resolve(__dirname, "./src"),
			
			// Aliases específicos para cada pasta importante
			"@components": path.resolve(__dirname, "./src/components"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@services": path.resolve(__dirname, "./src/services"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@themes": path.resolve(__dirname, "./src/themes"),
			"@types": path.resolve(__dirname, "./src/types"),
		},
	},
	
	server: {
		port: 3000,
		// Configuração adicional para melhor experiência de desenvolvimento
		open: true, // Abre o navegador automaticamente
		host: true, // Permite acesso via IP local
	},
	
	// Configuração do Vitest
	test: {
		environment: "jsdom",
		globals: true,
		css: true,
		exclude: [ ...configDefaults.exclude, "e2e/*" ],
		coverage: {
			provider: "v8",
			reporter: [ "text", "json", "html" ],
			// Configura quais arquivos incluir na cobertura
			include: [ "src/**/*.{ts,tsx}" ],
			exclude: [
				"src/**/*.d.ts",
				"src/**/*.test.{ts,tsx}",
				"src/**/*.spec.{ts,tsx}",
			],
		},
		// Configuração para resolver os aliases nos testes
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@services": path.resolve(__dirname, "./src/services"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@themes": path.resolve(__dirname, "./src/themes"),
			"@types": path.resolve(__dirname, "./src/types"),
		},
	},
	
	// Configuração para build otimizado
	build: {
		// Melhora a performance do build
		rollupOptions: {
			output: {
				// Estratégia de divisão de chunks para melhor cache
				manualChunks: {
					vendor: [ "react", "react-dom" ],
					router: [ "react-router-dom" ],
					ui: [ "@mui/material", "@emotion/react", "@emotion/styled" ],
				},
			},
		},
		// Define o diretório de saída
		outDir: "dist",
		// Remove arquivos antigos antes do build
		emptyOutDir: true,
	},
});
