"use client";
// import { URL } from '@/service/request';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';

interface Product {
  id: number;
  product_name: string;
  cost: number;
  count: number;
  image_url: string;
}

const Page: React.FC = () => {
  const [basketList, setBasketList] = useState<Product[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);

  useEffect(() => {
    axios.get(`${URL}/basket`, {
      params: {
        page: 1,
        limit: 100
      },
      headers: {
        Authorization: `Bearer ` + window.localStorage.getItem("token")
      }
    }).then(res => {
      console.log(res.data.ProductId);
      const products = res.data.ProductId.map((product: Product) => ({
        ...product,
        total: product.cost * product.count
      }));
      setBasketList(products);
      calculateSubtotal(products);
    });
  }, []);

  const calculateSubtotal = (products: Product[]) => {
    const subtotal = products.reduce((acc, product) => acc + product.cost * product.count, 0);
    setSubtotal(subtotal);
  };

  const updateQuantity = (id: number, delta: number) => {
    const updatedBasket = basketList.map(product => {
      if (product.id === id) {
        const newCount = Math.max(1, product.count + delta);
        return { ...product, count: newCount, total: newCount * product.cost };
      }
      return product;
    });
    setBasketList(updatedBasket);
    calculateSubtotal(updatedBasket);
  };

  const removeProduct = (id: number) => {
    const updatedBasket = basketList.filter(product => product.id !== id);
    setBasketList(updatedBasket);
    calculateSubtotal(updatedBasket);
  };

  const shippingCost = 16.00;
  const totalCost = subtotal + shippingCost;

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white ">
          <thead>
            <tr>
              <th className="py-2 -b">Products</th>
              <th className="py-2 -b">Price</th>
              <th className="py-2 -b">Quantity</th>
              <th className="py-2 -b">Total</th>
              <th className="py-2 -b"></th>
            </tr>
          </thead>
          <tbody>
            {basketList.map((product, index) => (
              <tr key={index} className="text-center">
                <td className=" px-4 py-2 flex items-center">
                  <img className="h-16 w-16 rounded-lg object-cover mr-4" src={product.image_url[0]} alt={product.product_name} />
                  <div>
                    <div className="text-sm font-medium text-gray-900">{product.product_name}</div>
                    <div className="text-sm text-gray-500">SKU: {product.id}</div>
                  </div>
                </td>
                <td className=" px-4 py-2">${product.cost.toFixed(2)}</td>
                <td className=" px-4 py-2 flex items-center justify-center">
                  <button className="bg-gray-200 text-gray-600 hover:bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center" onClick={() => updateQuantity(product.id, -1)}>
                    <span className="text-xl text-white bg-[#46A358] w-[35px] h-[35px] rounded-full outline-none">−</span>
                  </button>
                  <span className="mx-2">{product.count}</span>
                  <button className="bg-gray-200 text-gray-600 hover:bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center" onClick={() => updateQuantity(product.id, 1)}>
                    <span className="text-xl text-white bg-[#46A358] w-[35px] h-[35px] rounded-full outline-none">+</span>
                  </button>
                </td>
                <td className=" px-4 py-2">${(product.cost * product.count).toFixed(2)}</td>
                <td className=" px-4 py-2">
                  <button className="text-gray-600 hover:text-red-600" onClick={() => removeProduct(product.id)}>
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-4  shadow-lg rounded-lg">
          <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Total</span>
            <span className='text-[#46A358]'>${totalCost.toFixed(2)}</span>
          </div>
          <Link href={"/shop/checkout"} className="w-full p-2 bg-green-500 text-white py-2 rounded mb-2">Proceed To Checkout</Link>
          <Link href={"/"} className="w-full ml-5 p-2 bg-gray-300 text-gray-700 py-2 rounded">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};
