
// import { Link } from "react-router-dom";
// import { signOut, fetchUserAttributes } from "aws-amplify/auth"
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";

export default function Menu() {
	const [ count, setCount ] = useState(0);
	// const [ isLoading, setIsLoading ] = useState(true);
	// const [ displayName, setDisplayName ] = useState("");
	// const [ group, setGroup ] = useState("");

    // useEffect(() => {
    //     async function handleFetchUserAttributes() {
    //         try {
    //             const userAttributes = await fetchUserAttributes()
    //             if (userAttributes) {
    //                 const displayName = userAttributes['custom:display_name'];
    //                 const group = userAttributes['custom:group'];
                
    //                 if (displayName) {
    //                     setDisplayName(displayName);
    //                 }
                
    //                 if (group) {
    //                     setGroup(group);
    //                 }
    //             }
    //         } catch (error) {
    //             //console.log(error)
    //         } finally {
    //             setIsLoading(false)
    //         }
    //     }
    //     handleFetchUserAttributes()
    // }, [])

    // async function handleSignOut() {
    //     await signOut()
    // }

    // if (isLoading) {
    //     return <CircularIndeterminate />;
    // }

	return (
		<>
			<div style={
				{
					marginTop: "40px",
				}
			}
			>
				<a href={"https://vite.dev"} target={"_blank"} rel={"noreferrer"} >
					<img
						src={viteLogo}
						className="logo"
						alt={"Vite logo"}
						style={{ }}
						accessKey="teste"
					/>
				</a>
				<a href={"https://react.dev"} target={"_blank"} rel={"noreferrer"}>
					<img src={reactLogo} className={"logo react"} alt={"React logo"} />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className={"card"}>
				<button onClick={() => setCount((count: number) => count + 1)}>
					count is {count}
				</button>
				
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR{"2a "}
				</p>


			</div>
			
			<p className={"read-the-docs"}>
				<div>
					oiteste<strong>teste dois</strong>
				</div>
				Click on the Vite and React logos to learn more
			</p>

			<Grid
				container
				spacing={2}
				justifyContent="center"
				alignItems="center"
				sx={{
					backgroundColor: "primary.main",
				}}
			>
			
				<Grid size={{ xs: 6, md: 8 }}>
					<Typography variant="h4" component="h1" gutterBottom>
						Menu Inicial
					</Typography>
				</Grid>
			
				<Grid size={{ xs: 6, md: 8 }}>
					<Button onClick={() => alert("Botão clicado!")}>
						Aperte para exibir um alerta
					</Button>
				</Grid>

			</Grid>
		</>
	);
}
