// loadingComponent.tsx
import React, { Suspense, lazy, useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

/**
 * Lazy loading do DotLottieReact para otimização máxima de bundle
 * 
 * Esta estratégia garante que a biblioteca só seja carregada quando necessária,
 * mantendo o bundle inicial o menor possível. O componente CSS fallback
 * garante que o usuário sempre veja algo imediatamente.
 */
const DotLottieReact = lazy(() => import("@lottiefiles/dotlottie-react").then((module) => ({
	default: module.DotLottieReact,
})),
);

/**
 * Hook personalizado para gerenciar estados da animação DotLottie
 */
const useDotLottieState = () => {
	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ isError, setIsError ] = useState(false);

	const handleLoad = useCallback(() => {
		setIsLoaded(true);
		setIsError(false);
	}, []);

	const handleError = useCallback((error: unknown) => {
		console.warn("Erro ao carregar animação DotLottie:", error);
		setIsError(true);
	}, []);

	return {
		isLoaded,
		isError,
		handleLoad,
		handleError,
	};
};

/**
 * Componente de fallback - símbolo infinito CSS
 */
const LoadingFallback: React.FC<{ size?: number }> = ({ size = 80 }) => {
	const theme = useTheme();
  
	return (
		<Box
			sx={{
				width: size,
				height: size / 2,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				position: "relative",
			}}
		>
			<Box
				sx={{
					width: "100%",
					height: "100%",
					position: "relative",
					"&::before, &::after": {
						content: "\"\"",
						position: "absolute",
						border: `2px solid ${theme.palette.primary.main}`,
						borderRadius: "50%",
						width: "50%",
						height: "100%",
					},
					"&::before": {
						left: 0,
						borderRight: "transparent",
						animation: "infinityLeft 2s ease-in-out infinite",
					},
					"&::after": {
						right: 0,
						borderLeft: "transparent",
						animation: "infinityRight 2s ease-in-out infinite",
					},
					"@keyframes infinityLeft": {
						"0%, 100%": { transform: "rotate(0deg)", opacity: 1 },
						"50%": { transform: "rotate(180deg)", opacity: 0.7 },
					},
					"@keyframes infinityRight": {
						"0%, 100%": { transform: "rotate(0deg)", opacity: 0.7 },
						"50%": { transform: "rotate(-180deg)", opacity: 1 },
					},
				}}
			/>
		</Box>
	);
};

/**
 * Componente de animação DotLottie
 */
interface DotLottieAnimationProps {
	size?: number;
	speed?: number;
	className?: string;
}

const DotLottieAnimation: React.FC<DotLottieAnimationProps> = ({
	size = 100,
	speed = 1,
	className = "",
}) => {
	const { isLoaded, isError, handleLoad, handleError } = useDotLottieState();

	const animationSrc = "https://lottie.host/54dc6627-9246-4531-98ab-60e6e17282ad/fLoieecrPb.lottie";

	if (isError) {
		return <LoadingFallback size={size} />;
	}

	return (
		<Suspense fallback={<LoadingFallback size={size} />}>
			<Box
				className={className}
				sx={{
					position: "relative",
					width: size,
					height: size / 2,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					opacity: isLoaded ? 1 : 0.8,
					transition: "opacity 0.5s ease-in-out",
					"& > div": {
						width: "100% !important",
						height: "100% !important",
						transform: "scaleX(-1)",
					},
				}}
			>
				<DotLottieReact
					src={animationSrc}
					loop={true}
					autoplay={true}
					speed={speed}
					style={{
						width: "100%",
						height: "100%",
						maxWidth: "100%",
						maxHeight: "100%",
					}}
					onLoad={handleLoad}
					onError={handleError}
					useFrameInterpolation={true}
				/>
			</Box>
		</Suspense>
	);
};

/**
 * Componente de Loading simples e reutilizável
 */
export interface LoadingComponentProps {
	/** Texto a ser exibido (opcional) */
	message?: string;
	/** Tamanho da animação */
	size?: number;
	/** Velocidade da animação */
	speed?: number;
	/** Classe CSS adicional */
	className?: string;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({
	message = null,
	size = 100,
	speed = 1,
	className = "",
}) => {
	const theme = useTheme();

	return (
		<Box
			className={className}
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				gap: 3,
				padding: theme.spacing(2),
			}}
		>
			{/* Animação DotLottie */}
			<DotLottieAnimation
				size={size}
				speed={speed}
			/>
      
			{/* Texto de loading */}
			{message && (
				<Typography
					// variant="h6"
					color="#202020"
					sx={{
						// fontWeight: 500,
						fontSize: "1.2rem",
						textAlign: "center",
						animation: "textPulse 3s ease-in-out infinite",
						"@keyframes textPulse": {
							"0%, 100%": {
								opacity: 1,
								transform: "translateY(0px)",
							},
							"50%": {
								opacity: 0.8,
								transform: "translateY(-2px)",
							},
						},
					}}
				>
					{message}
				</Typography>
			)}
		</Box>
	);
};

export default LoadingComponent;
export { DotLottieAnimation };
