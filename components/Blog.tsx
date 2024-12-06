"use client"
import Image from 'next/image'
import React from 'react'
import { ArrowIcon } from '@/public/images/icon'

export interface BlogsType {
    id: number
    img: string
    date: string
    title: string
    description: string
}

const BlogItem: React.FC<{ item: BlogsType }> = ({ item }) => {
    return (
        <div className="flex flex-col h-full border border-[#E5E5E5] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full aspect-[268/195] rounded-t-lg overflow-hidden">
                <Image
                    alt="blog image"
                    
                    src={item.img}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="p-4 bg-[#FBFBFB] flex-grow flex flex-col rounded-b-lg">
                <p className="text-xs sm:text-sm text-[#46A358] mb-2">{item.date}</p>
                <h3 className="text-lg sm:text-xl text-[#3D3D3D] font-semibold leading-tight mb-3">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#727272] mb-3 line-clamp-2 flex-grow">{item.description}</p>
                <button className="flex items-center space-x-2 text-sm sm:text-base text-[#46A358] hover:text-[#3D3D3D] transition duration-300">
                    <span>Read More</span>
                    <ArrowIcon />
                </button>
            </div>
        </div>
    )
}

const OurBlog = () => {
    const blogsData: BlogsType[] = [
        {
            id: 1,
            img: '/BlogPlant1.png',
            date: "September 12  I Read in 6 minutes",
            title: 'Cactus & Succulent Care Tips',
            description: 'Cacti are succulents are easy care plants for any home or patio.'
        },
        {
            id: 2,
            img: '/BlogPlant2.png',
            date: "September 13  I Read in 2 minutes",
            title: "Top 10 Succulents for Your Home",
            description: 'Cacti are succulents are easy care plants for any home or patio. Best in hanging baskets. Prefers medium to high light.'
        },
        {
            id: 3,
            img: '/BlogPlant3.png',
            date: "September 15  I Read in 3 minutes",
            title: "Cacti & Succulent Care Tips",
            description: "Cacti and succulents thrive in containers and because most are.."
        },
        {
            id: 4,
            img: '/BlogPlant4.png',
            date: "September 15  I Read in 2 minutes",
            title: "Best Houseplants Room by Room",
            description: 'The benefits of houseplants are endless. In addition to..'
        }
    ]
    
    return (
        <section className="mb-8 md:mb-16 lg:mb-[100px] px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl md:text-[30px] font-bold text-[#3D3D3D] mb-4 sm:mb-[15px]">
                Our Blog Posts
            </h2>
            <p className="text-sm md:text-[14px] mb-6 md:mb-[35px] text-center text-[#727272] leading-6 max-w-2xl mx-auto">
                We are an online plant shop offering a wide range of cheap and trendy plants.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {blogsData.map((item: BlogsType) => (
                    <BlogItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    )
}

export default OurBlog
