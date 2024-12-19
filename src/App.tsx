import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";


function App () {
	const [ count, setCount ] = useState(0);
	const [ teste ] = useState([ 1, 2, 3, 4, 5 ]);

	console.log("teste", teste);

	const arrowFunctionTeste = () => {
		return null;
	};
	const teste2 = () => {
		return null;
	};
	console.log(teste2);
	 
	function fn(para1: number, para2:number): string {
		const a = para1 + para2;
		return a.toString();
	}
	
	console.log(fn);

	console.log("arrowFunctionTeste", arrowFunctionTeste);

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
				<button onClick={() => setCount((count) => count + 1)}>
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
		</>
	);
}

export default App;


