import ProductLists from "./components/ProductLists";
import NavBar from "./components/NavBar";
import { useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";

function App() {
	const {theme} = useContext(ThemeContext);
	return (
		<>
			<div
				className={`box-border w-full min-h-screen  ${
					theme === "dark" ? "dark" : ""
				}`}
			>
				<NavBar />
				<div className="bg-[#393E46] h-[93.5vh] absolute z-10  mt-14">
					<ProductLists />
				</div>
			</div>
		</>
	);
}

export default App;
