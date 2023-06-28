import { memo, useCallback, useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { HiMoon, HiSun } from "react-icons/hi";
import { ThemeContext} from "./ThemeContext";

const NavBar = memo(() => {
	const [open, setOpen]=useState(false);
	  const {theme, toggleTheme } = useContext(ThemeContext);
	 const [darkMode, setDarkMode] = useState(false);
const handleToggle = useCallback(() => {
	if (theme === "dark") {
		setDarkMode(true);
		localStorage.setItem("theme", "light");
	} else {
		setDarkMode(false);
		localStorage.setItem("theme", "dark");
	}
	toggleTheme();
}, [theme]);

  return (
		<nav className="dark:bg-[#2D4356] text-[#1B6B93] bg-[#b0b7ff] fixed w-full z-[100] transition-colors duration-400">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<a
								href="/"
								className="text-2xl font-bold text-[#000000] dark:text-white"
							>
								My App
							</a>
						</div>
						<div className="hidden md:block">
							<div className="flex items-baseline ml-10 space-x-4">
								<button className="px-3 py-2 text-xl font-medium text-[#000000] dark:text-white rounded-md hover:text-[#ffffff] hover:dark:text-[#F9F54B]">
									All Products
								</button>
								<button className="px-3 py-2 text-xl font-medium text-[#000000] dark:text-white rounded-md hover:text-[#ffffff] hover:dark:text-[#F9F54B]">
									Phones
								</button>
								<button className="px-3 py-2 text-xl font-medium text-[#000000] dark:text-white rounded-md hover:text-[#ffffff] hover:dark:text-[#F9F54B]">
									Laptops
								</button>
							</div>
						</div>
					</div>
					<div className="absolute flex right-[4rem] flex-end">
						<button
							className="relative p-1 text-center text-[#000000] dark:text-white transition-colors duration-400"
							onClick={handleToggle}
						>
							<div
								className={`transition  rounded-full   ease-in-out duration-500 absolute inset-0 bg-gray-200 ${
									darkMode ? "opacity-0" : "opacity-100"
								}`}
							/>
							<div
								className={`transition ease-in-out duration-500 absolute rounded-full inset-0 bg-gray-800 ${
									darkMode ? "opacity-0" : "opacity-100"
								}`}
							/>
							<div
								className={`relative z-10  ${
									darkMode ? "text-yellow-300" : "text-gray-100"
								}`}
							>
								{darkMode ? <HiSun size={40} /> : <HiMoon size={40} />}
							</div>
						</button>
					</div>
					<div className="flex -mr-2 md:hidden ">
						<button
							type="button"
							className="inline-flex items-center justify-center p-2 text-2xl text-[#000000] dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
							onClick={() => setOpen(!open)}
						>
							{open ? <AiOutlineClose size={30} /> : <FaBars size={30} />}
						</button>
					</div>
				</div>
			</div>

			<div
				className={`${open ? "block" : "hidden"} md:hidden bg-gray-900`}
				id="mobile-menu"
			>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					<a
						href="/"
						className="block px-3 py-2 text-base font-medium text-[#000000] dark:text-white rounded-md hover:text-[#1B6B93]"
					>
						Get Started
					</a>
					<a
						href="/"
						className="block px-3 py-2 text-base font-medium text-[#000000] dark:text-white rounded-md hover:text-[#1B6B93]"
					>
						About
					</a>
					<a
						href="/"
						className="block px-3 py-2 text-base font-medium text-[#000000] dark:text-white rounded-md hover:text-[#1B6B93]"
					>
						Services
					</a>
				</div>
			</div>
		</nav>
	);
});

export default NavBar;
