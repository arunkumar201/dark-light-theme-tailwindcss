import React, { memo, useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import spinner from "./../Spinner-1s-200px(1).svg";
const ProductLists = memo(() => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function getAllProducts() {
			setLoading(true);
			try {
				let response = await fetch("https://dummyjson.com/products");
				const data = await response.json();
				setItems(data.products);
			} catch (err) {
				console.log("ProductLists.jsx:13 ~ getAllProducts ~ err:", err);
			} finally {
				setTimeout(() => {
					setLoading(false);
				}, 300);
			}
		}
		getAllProducts();
	}, []);

	return (
		<>
			{loading ? (
				<div className="flex items-center justify-center w-screen h-full">
					<img src={spinner} alt="loading" />
				</div>
			) : (
				<div className="w-full dark:text-white bg-[#060047] dark:bg-[#F6F1E9]">
					<div className="flex flex-row flex-wrap justify-center flex-1 w-full h-full gap-4 p-4 ">
						{items.length > 0 &&
							items.slice(0, 12).map((product) => (
								<div
									key={product.id}
									className="flex flex-row flex-wrap items-center justify-center w-[24rem] h-full border-2 border-cyan-200 rounded-xl shadow-sm"
								>
									<ProductCart product={product} />
								</div>
							))}
					</div>
				</div>
			)}
		</>
	);
});

export default ProductLists;
