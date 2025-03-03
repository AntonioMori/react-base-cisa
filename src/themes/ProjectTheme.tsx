import { createTheme } from "@mui/material";
// extendendo a interface PaletteOptions do Material-UI para adicionar uma nova propriedade personalizada de paletas

declare module "@mui/material/styles" {
	interface PaletteOptions {
		personalizado?: {
			main: string;
			dark?: string;
			contrastText?: string;
		};
	}
}

// podemos fazer isso com variantes tambem
declare module "@mui/material/IconButton" {
	interface IconButtonPropsVariantOverrides {
		custom: true;
	}
}


const ProjectTheme = createTheme({
	// defininndo palleta de cores para o tema do projeto
	palette: {
		primary: {
			main: "#1976d2",
			dark: "#004ba0",
			contrastText: "#fff",
		},
		secondary: {
			main: "#dc004e",
		},
		personalizado: {
			main: "#ff0000",
			dark: "#004ba0",
			contrastText: "#fff",
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				//propriedades padrão para todos os botões que você quiser
				// disableElevation: true,
				// variant: "contained",
			},
			styleOverrides: {
				root: {
					// override styles de todos os botões
					// textTransform: "none",
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				// criando uma variante de estilo personalizado
				root: ({ ownerState }) => ownerState.variant === "custom"
					? {
						backgroundColor: "#ff0000",
						color: "#fff",
						"&:hover": {
							backgroundColor: "#cc0000",
						},
					}
					: {},
			},
		},
	},
});


export default ProjectTheme;
