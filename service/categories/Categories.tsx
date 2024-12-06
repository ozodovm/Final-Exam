"use client"; 
import { useState } from "react";
import Image from "next/image"; 
import SuperSale from "../../public/supersale.png";


import Slider from "@mui/material/Slider";
import React from "react";
import "./category.css"; 

function AsideHome() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  const listItems = [
    { name: "House Plants", count: 33 },
    { name: "Potter Plants", count: 12 },
    { name: "Seeds", count: 65 },
    { name: "Small Plants", count: 39 },
    { name: "Big Plants", count: 23 },
    { name: "Succulents", count: 17 },
    { name: "Terrariums", count: 19 },
    { name: "Gardening", count: 13 },
    { name: "Accessories", count: 18 },
  ];
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleClickSize = (index: number) => {
    setSelectedItem(index);
  };

  const items = [
    { text: "Small", count: 119 },
    { text: "Medium", count: 86 },
    { text: "Large", count: 78 },
  ];

  function valuetext(value: number) {
    return `${value}°C`;
  }

  const [value, setValue] = React.useState<number[]>([39, 1500]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className="flex flex-col w-[310px] bg-[#FBFBFB] ml-32 md:flex  p-4 shadow-md rounded-md">
      {/* Categories */}
      <div>
        <h1 className="text-[18px] font-bold text-[#3D3D3D] mb-4">Categories</h1>
        <ul className="space-y-2">
          {listItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={`flex justify-between items-center cursor-pointer text-[15px] leading-[40px] ${
                activeIndex === index ? "text-[#46A358] font-bold" : "text-[#3D3D3D]"
              }`}
            >
              <span className="category-name">{item.name}</span>
              <span className="text-[#A1A1A1]">({item.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div className="mt-8">
        <h1 className="text-[18px] font-bold text-[#3D3D3D] mb-4">Price Range</h1>
        <Slider
          getAriaLabel={() => "Price range"}
          value={value}
          min={39}
          max={1500}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          sx={{
            width: 300,
            color: "success.main",
          }}
        />
        <p className="text-[14px] mt-2">
          Price:{" "}
          <span className="font-bold text-[#46A358]">
            ${value[0]} - ${value[1]}
          </span>
        </p>
      </div>

      {/* Filter Button */}
      <button className="mt-4 w-full py-2 text-white bg-[#46A358] hover:bg-[#3B8F44] rounded-md transition duration-300">
        Filter
      </button>

      {/* Size */}
      <div className="w-[268px] mt-8 mb-[19px]">
        <h1 className="text-[18px] font-bold text-[#3D3D3D] mb-4">Size</h1>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClickSize(index)}
              className={`flex justify-between items-center cursor-pointer text-[15px] leading-[40px] ${
                selectedItem === index ? "text-[#46A358] font-bold" : "text-[#3D3D3D]"
              }`}
            >
              <span>{item.text}</span>
              <span className="text-[#A1A1A1]">({item.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div>
        <Image className="super-sale mt-[19px]" src={SuperSale} alt="Super Sale" width={500} height={500} />
      </div>
    </div>
  );
}

export default AsideHome;
