import React from 'react'
import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, GitHub, Globe } from "react-feather"

export default function Footer() {
	return (
		<footer className="grid grid-cols-1 md:(grid-cols-3) border-t border-gray-300 bg-gray-200 px-4">
			<div className="m-4 sm:m-6 flex-1">
				<h2 className="text-4xl text-center md:text-left mb-4">Farm2Market</h2>
				<p className="text-justify text-gray-700">Farm2Market bridges the gap between local farmers and consumers, offering fresh, high-quality produce and processed goods directly from the farm. Our mission is to empower farmers by providing them with a platform to sell their products directly, ensuring fair prices and sustainable practices.</p>
				<ul className="flex mt-6 justify-center md:justify-start space-x-4">
					<li>
						<Link to="#"><Facebook /></Link>
					</li>
					<li>
						<Link to="#"><Instagram /></Link>
					</li>
					<li>
						<Link to="#"><Twitter /></Link>
					</li>
					<li>
						<Link to="#"><GitHub /></Link>
					</li>
					<li>
						<Link to="#"><Globe /></Link>
					</li>
				</ul>
			</div>
			<div className="m-4 sm:m-6">
				<h2 className="text-xl text-center md:text-left font-medium mb-4">Useful Links</h2>
				<ul className="flex flex-col flex-wrap h-36 space-y-1 text-gray-600">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/cart">Cart</Link>
					</li>
					<li>
						<Link to="/products?category=men">Fruits</Link>
					</li>
					<li>
						<Link to="/products?category=women">Vegitable</Link>
					</li>
					<li>
						<Link to="/orders">Track Order</Link>
					</li>
					<li>
						<Link to="/account">My Account</Link>
					</li>
					<li>
						<Link to="/wishlist">Wishlist</Link>
					</li>
					<li>
						<Link to="/terms">Terms</Link>
					</li>
				</ul>
			</div>
			<div className="m-4 sm:m-6">
				<h2 className="text-xl text-center md:text-left font-medium mb-4">Contact</h2>
				<ul className="space-y-3 text-gray-700">
					<li className="flex items-center">
						<MapPin className="w-5 h-5 mr-2" />
						<span>Vadodara-Gujarat</span>
					</li>
					<li className="flex items-center">
						<Phone className="w-5 h-5 mr-2" />
						<span>+1234-567-890</span>
					</li>
					<li className="flex items-center">
						<Mail className="w-5 h-5 mr-2" />
						<Link to="#" >
							farm2market@gmail.com
						</Link>
					</li>
					<li className="flex items-center">
						<GitHub className="w-5 h-5 mr-2" />
						<Link to="#" >
							Farm2Market
						</Link>
						{/* <span className='mx-1'>built by</span> */}
						{/* <a href="https://nimo.pages.dev" target="_blank" className='border-b-2 border-green-500'>
							nimo
						</a> */}
					</li>
				</ul>
				<div className="mt-6">
					<img className="mx-auto md:mx-0" src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment providers" />
				</div>
			</div>
		</footer>
	)
}