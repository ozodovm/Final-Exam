import { useState } from "react";

interface Props {
  imagePath: string;
  name: string;
  price: string;
}

function Card({ imagePath, name, price }: Props) {
  const initialImgSrc = "./ShoppingBefore.svg";
  const newImgSrc = "./ShoppingClicked.svg";

  const initialImgLike = "./Like.svg";
  const newImgLike = "./LikeClicked.png";

  const initialImgSearch = "./Search.svg";
  const newImgSearch = "./SearchClicked.svg";

  const [imgSrc, setImgSrc] = useState(initialImgSrc);
  const [imgLike, setImgLike] = useState(initialImgLike);
  const [imgWidth, setImgWidth] = useState("24px");
  const [imgSearch, setImgSearch] = useState(initialImgSearch);

  const handleShoppingClick = () => {
    setImgSrc((prevSrc) =>
      prevSrc === initialImgSrc ? newImgSrc : initialImgSrc
    );
  };

  const handleSearchClick = () => {
    setImgSearch((prevSrc) =>
      prevSrc === initialImgSearch ? newImgSearch : initialImgSearch
    );
  };

  const handleLikeClick = () => {
    setImgLike((prevSrc) => {
      if (prevSrc === initialImgLike) {
        setImgWidth("28px"); // New width for newImgLike
        return newImgLike;
      } else {
        setImgWidth("24px"); // Reset to default width for initialImgLike
        return initialImgLike;
      }
    });
  };

  return (
    <div>
      <div className="flex-col  items-start  ">
        <div className="bg-[#FBFBFB] shadow-lg rounded-2xl md:rounded-none w-11/12 md:w-9/12 pb-4   h-full  flex-col items-center  justify-center relative group">
          <img
            src={imagePath}
            alt=""
            className="flex justify-center  pt-5 md:pt-0"
          />

          <div className="gap-x-4  items-center justify-center hidden md:visible md:group-hover:flex  ">
            <div
              className=" bg-[#FFFFFF] rounded shadow-lg  w-7 h-7 cursor-pointer flex items-center justify-center"
              onClick={handleShoppingClick}
            >
              <img src={imgSrc} alt="" />
            </div>
            <div
              className=" bg-[#FFFFFF] rounded shadow-lg w-7 h-7 cursor-pointer flex items-center justify-center "
              onClick={handleLikeClick}
            >
              <img src={imgLike} alt="" style={{ width: imgWidth }} />
            </div>
            <div
              className=" bg-[#FFFFFF] rounded shadow-lg  w-7 h-7  cursor-pointer flex items-center justify-center "
              onClick={handleSearchClick}
            >
              <img src={imgSearch} alt="" />
            </div>
          </div>
          <div
            className=" bg-[#FFFFFF] absolute  shadow-lg top-2 right-2   rounded-full w-3 h-3 cursor-pointer flex md:invisible items-center justify-center "
            onClick={handleLikeClick}
          >
            <img src={imgLike} alt="" style={{ width: imgWidth }} />
          </div>
        </div>
        <div className="pt-3">
          <p className=" text-xs  md:text-lg text-[#3D3D3D] font-Poppins leading-none align-middle">
            {name}
          </p>
          <p className="font-bold text-xs  md:text-lg text-[#46A358]">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
