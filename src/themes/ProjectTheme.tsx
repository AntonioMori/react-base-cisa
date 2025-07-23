import { createTheme } from "@mui/material";

// Extendendo a interface PaletteOptions do Material-UI para adicionar uma nova propriedade personalizada de paletas
declare module "@mui/material/styles" {
	interface PaletteOptions {
		personalizado?: {
			main: string;
			dark?: string;
			contrastText?: string;
		};
		brand?: {
			primary: {
				10: string;
				20: string;
				40: string;
				60: string;
				80: string;
				90: string;
				100: string;
			};
		};
		neutral?: {
			10: string;
			20: string;
			40: string;
			60: string;
			80: string;
			90: string;
			100: string;
		};
	}

	interface Palette {
		personalizado: {
			main: string;
			dark: string;
			contrastText: string;
		};
		brand: {
			primary: {
				10: string;
				20: string;
				40: string;
				60: string;
				80: string;
				90: string;
				100: string;
			};
		};
		neutral: {
			10: string;
			20: string;
			40: string;
			60: string;
			80: string;
			90: string;
			100: string;
		};
	}
}

// Podemos fazer isso com variantes também
declare module "@mui/material/IconButton" {
	interface IconButtonPropsVariantOverrides {
		custom: true;
	}
}

const ProjectTheme = createTheme({
	// Definindo paleta de cores para o tema do projeto
	palette: {
		primary: {
			main: "#1976d2",
			light: "#42a5f5",
			dark: "#1565c0",
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
		// Paleta de cores inspirada no tema AWS Amplify
		brand: {
			primary: {
				10: "#E3F2FD",
				20: "#BBDEFB",
				40: "#42A5F5",
				60: "#2196F3",
				80: "#1976D2",
				90: "#1565C0",
				100: "#0D47A1",
			},
		},
		neutral: {
			10: "#FAFAFA",
			20: "#F5F5F5",
			40: "#EEEEEE",
			60: "#E0E0E0",
			80: "#BDBDBD",
			90: "#9E9E9E",
			100: "#757575",
		},
		background: {
			// default: "#f9fbfc",
			default: "#f9fbfc",
			paper: "#ffffff",
		},
		success: {
			main: "#27ae60",
			dark: "#357a38",
			contrastText: "#fff",
		},
		error: {
			main: "#ef5350",
			dark: "#b71c1c",
			contrastText: "#fff",
		},
		info: {
			main: "#1976d2",
			dark: "#1976d2",
			contrastText: "#fff",
		},
		warning: {
			main: "#ff9800",
			dark: "#f57c00",
			contrastText: "#fff",
		},
		text: {
			primary: "#212121",
			secondary: "#757575",
		},
	},
	typography: {
		fontFamily: [
			"\"Segoe UI\"",
			// "Roboto",
			// "\"Helvetica Neue\"",
			// "Arial",
			// "sans-serif",
		].join(","),
		h4: {
			fontWeight: 700,
			lineHeight: 1.2,
		},
		h6: {
			fontWeight: 500,
			lineHeight: 1.4,
		},
		body1: {
			lineHeight: 1.5,
		},
		body2: {
			lineHeight: 1.4,
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: false,
			},
			styleOverrides: {
				root: {
					textTransform: "none",
					borderRadius: "12px",
					fontSize: "16px",
					fontWeight: "600",
					// padding: "16px 32px",
					transition: "all 0.2s ease-in-out",
				},
				contained: {
					boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
					"&:hover": {
						// transform: "translateY(-2px)",
						boxShadow: "0 8px 25px rgba(21, 101, 192, 0.25)",
					},
					"&:active": {
						transform: "translateY(0)",
					},
				},
			},
		},
		MuiTextField: {
			defaultProps: {
				variant: "outlined",
			},
			styleOverrides: {
				root: {
					"& .MuiOutlinedInput-root": {
						borderRadius: "12px",
						backgroundColor: "#fff",
						transition: "all 0.2s ease-in-out",
						"& fieldset": {
							borderColor: "#E0E0E0",
							borderWidth: "1px",
						},
						"&:hover": {
							backgroundColor: "#ffffff",
							"& fieldset": {
								borderColor: "#1976D2",
							},
						},
						"&.Mui-focused": {
							backgroundColor: "#ffffff",
							"& fieldset": {
								borderColor: "#1976D2",
								borderWidth: "2px",
								boxShadow: "0 0 0 3px rgba(21, 101, 192, 0.1)",
							},
						},
						"&.Mui-error": {
							"& fieldset": {
								borderColor: "#f44336",
								boxShadow: "0 0 0 3px rgba(244, 67, 54, 0.1)",
							},
						},
					},
					"& .MuiInputLabel-root": {
						fontSize: "16px",
						fontWeight: "500",
						color: "#757575",
						"&.Mui-focused": {
							color: "#1976D2",
						},
						"&.Mui-error": {
							color: "#f44336",
						},
					},
					"& .MuiOutlinedInput-input": {
						padding: "16px",
						fontSize: "16px",
						fontWeight: "400",
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: "16px",
				},
				elevation0: {
					boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
				},
				elevation4: {
					boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
				},
				elevation8: {
					boxShadow: "0 16px 48px rgba(0, 0, 0, 0.12)",
				},
			},
		},
		MuiLink: {
			styleOverrides: {
				root: {
					textDecoration: "none",
					fontWeight: "500",
					cursor: "pointer",
					transition: "all 0.2s ease-in-out",
					"&:hover": {
						textDecoration: "underline",
					},
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				// Criando uma variante de estilo personalizado
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
		MuiContainer: {
			styleOverrides: {
				root: {
					paddingLeft: "16px",
					paddingRight: "16px",
					"@media (min-width: 600px)": {
						paddingLeft: "24px",
						paddingRight: "24px",
					},
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				h4: {
					fontWeight: 700,
					lineHeight: 1.2,
				},
				h6: {
					fontWeight: 500,
					lineHeight: 1.4,
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: "none",
					borderRadius: "12px",
					backgroundColor: "#fff", // ✅ Usar backgroundColor ao invés de bgcolor
					border: "1px solid #e0e0e0",
					"&:hover": {
						boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
					},
				},
			},
		},
		MuiTableHead:{
			styleOverrides: {
				root: {

					backgroundColor: "#fff",
					"& .MuiTableCell-head": {
						backgroundColor: "#fff", // Remove cor de fundo
						// borderRadius: "12px",
					},
					"& .MutableactiveTableCell-head": {
						backgroundColor:"#e3eefa",
					},

				},
			},
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
	spacing: 8,
	shape: {
		borderRadius: 12,
	},
});

export default ProjectTheme;
