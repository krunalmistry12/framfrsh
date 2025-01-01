import React, { useContext, useState } from 'react'

import Product from "@/components/Product"
import { CartContext } from "@/App"

export default function ProductList({ products, onAddToCart }) {
	const { cart } = useContext(CartContext);



	return (
		<div className="flex flex-wrap justify-center">
			{products.map(product => (
				<Product
					key={product._id}
					imgSrc={product.image}
					price={product.price}
					link={`/products/${product._id}`}
					onAddToCart={() => onAddToCart(product)}
					isInCart={cart.products.some(p => p.id === product._id)}
				/>
			))}
		</div>
	)
}

// const products = [
// 	{
// 		"_id": "1",
// 		"image": "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// 		"price": "3.99",
// 		"name": "Apple"
// 	},
// 	{
// 		"_id": "2",
// 		"image": "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// 		"price": "2.49",
// 		"name": "Banana"
// 	},
// 	{
// 		"_id": "3",
// 		"image": "https://images.pexels.com/photos/1330056/pexels-photo-1330056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// 		"price": "5.99",
// 		"name": "Strawberries"
// 	},
// 	{
// 		"_id": "4",
// 		"image": "https://images.pexels.com/photos/2902051/pexels-photo-2902051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// 		"price": "4.49",
// 		"name": "Oranges"
// 	}
// ];