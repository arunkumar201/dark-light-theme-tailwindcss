import React, { createContext, memo, useState } from "react";
import { useEffect } from "react";
export const ThemeContext = createContext();
const ThemeProvider = memo(({ children }) => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
	const [isTransitioning, setIsTransitioning] = useState(false);

	useEffect(() => {
		setIsTransitioning(true);
		const timeout = setTimeout(() => setIsTransitioning(false), 20);
		return () => clearTimeout(timeout);
	}, [theme]);
	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div
				className={`transition-colors duration-500 ${
					isTransitioning ? "opacity-0" : "opacity-100"
				}`}
			>
				{children}
			</div>
		</ThemeContext.Provider>
	);
});

export { ThemeProvider };
