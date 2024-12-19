import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";



function App () {
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
		<Router>
			<main>
				{/* <header>
              <h1>Bem-vindo, {user?.username}!</h1>
              <button onClick={signOut}>Sair</button>
            </header> */}
				<Routes>
					<Route path='/' element={<Home/>}/>
				</Routes>
			</main>
		</Router>
	);
}

export default App;


