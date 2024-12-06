import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { ArrowIcon } from '@/public/images/icon';
import Plant1 from '@/public/SummerCactus.png';
import Plant2 from '@/public/StylingTrends.png';

const Plants: React.FC = () => {
  const cards = [
    {
      image: Plant1,
      alt: 'Summer cactus image',
      title: 'Summer cactus & succulents',
      description: 'We are an online plant shop offering a wide range of cheap and trendy plants',
    },
    {
      image: Plant2,
      alt: 'Styling trends image',
      title: 'Styling Trends & much more',
      description: 'We are an online plant shop offering a wide range of cheap and trendy plants',
    },
  ];

  return (
    <section className="mt-8 md:mt-16 lg:mt-[100px] flex flex-col lg:flex-row items-center justify-between mb-8 md:mb-12 lg:mb-[138px] space-y-8 lg:space-y-0 lg:space-x-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-full lg:max-w-[49%] relative bg-[#FBFBFB] rounded-lg flex flex-col lg:flex-row items-center lg:items-end lg:justify-end p-4 lg:p-0 lg:pr-[30px]"
        >
          <Image
            className="lg:absolute left-0 bottom-0 w-[292px] h-[292px] max-lg:object-contain rounded-t-lg lg:rounded-none"
            priority
            src={card.image}
            alt={card.alt}
            width={292}
            height={292}
          />
          <div className="w-full lg:w-[292px] flex flex-col items-center lg:items-end text-center lg:text-end mt-4 lg:mt-0 lg:pb-[46px] lg:pt-[37px]">
            <h2 className="text-[18px] w-full lg:w-[170px] line-clamp-1 uppercase font-bold text-[#3D3D3D] mb-2 sm:mb-4">
              {card.title}
            </h2>
            <p className="text-[14px] text-[#727272] mb-4 line-clamp-2">{card.description}</p>
            <Button
              title="Find More"
              type="button"
              rightIcon={<ArrowIcon />}
              extraStyle="sm:w-[140px] w-full"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Plants;
