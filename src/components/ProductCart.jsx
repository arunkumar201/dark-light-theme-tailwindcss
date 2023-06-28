import React, { memo } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './../../src/App.css'
const ProductCart = memo(({ product }) => {
	const {
		id,
		title,
		description,
		price,
		discountPercentage,
		rating,
		stock,
		brand,
		category,
		thumbnail,
		images,
	} = product;

const settings = {
	dots: true,
	infinite: true,
	speed: 200,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	arrows: false,
	pauseOnHover: true,
	centerMode: true,
};

	return (
		<div
			className="w-full px-4 py-8 mx-auto   bg-white  dark:bg-[#4e4256] rounded-lg shadow-lg h-[100%] flex-wrap text-[#0A043C] dark:text-[#3af3e4] leading-8 text-base dark:selection:bg-[#C70A80] dark:selection:text-[#FBCB0A] transition-colors duration-300
		"
		>
			<div className="flex items-center justify-between">
				<div className="text-base mr-0 font-bold text-[#03506F] dark:text-[#FBCB0A]">
					{title}
				</div>
				<div className="text-[13px] dark:text-[#FBCB0A]  font-bold ">
					{brand}
				</div>
			</div>
			<div className="h-full mt-4">
				<Slider {...settings} className="text-orange-200 ">
					{images.map((image, index) => (
						<div key={index}>
							<img
								src={image}
								alt={title}
								className="mx-auto h-[20rem] w-[30rem] object-cover"
							/>
						</div>
					))}
				</Slider>
			</div>
			<div className="h-[13rem]">
				<div className="mt-8 h-[4rem]">
					<div className="text-base ">{description}</div>
				</div>
				<div className="flex items-center justify-between mt-4">
					<div className="text-xl font-bold ">${price}</div>
					<div className="text-xl font-bold text-green-600 dark:text-[#FBCB0A]">
						{discountPercentage}% OFF
					</div>
				</div>
				<div className="mt-2">
					<div className="flex flex-row items-center">
						<div className="text-sm ">Rating:</div>
						<div className="flex ml-2 text-yellow-400 h-[1rem]">
							{Array(Math.floor(rating))
								.fill()
								.map((_, index) => (
									<svg
										key={index}
										xmlns="http://www.w3.org/2000/svg"
										className="w-4 h-4 mr-1"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 15.032l-5.858 3.11 1.12-6.533L.733 7.889l6.524-.947L10 1.958l2.743 5.984 6.524.947-4.53 4.72 1.12 6.533z"
											clipRule="evenodd"
										/>
									</svg>
								))}
							{rating % 1 !== 0 && (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-4 h-4 mr-1"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M10 15.032l-5.858 3.11 1.12-6.533L.733 7.889l6.524-.947L10 1.958l2.743 5.984 6.524.947-4.53 4.72 1.12 6.533z"
										clipRule="evenodd"
									/>
								</svg>
							)}
							<span className="text-sm ">({Math.floor(rating * 10) / 10})</span>
						</div>
					</div>
				</div>
				<div className="mt-2 ">
					<div className="flex items-center">
						<div className="text-sm ">Availability:</div>
						<div className="ml-2 text-sm font-bold text-green-600">
							{stock > 0 ? `${stock} in stock` : "Out of stock"}
						</div>
					</div>
				</div>
				<div className="flex items-center justify-between mt-4 mb-5">
					<button
						className={`${
							stock > 0
								? "bg-green-600 hover:bg-green-700 dark:bg-[#590696] dark:hover:bg-green-700 "
								: "bg-gray-400 cursor-not-allowed"
						} text-white font-bold py-2 px-4 rounded`}
						disabled={stock === 0}
					>
						<FaShoppingCart className="inline-block mr-2" />
						Add to cart
					</button>
					<div className="text-[15px] capitalize ">{category}</div>
				</div>
			</div>
		</div>
	);
});

export default ProductCart;
