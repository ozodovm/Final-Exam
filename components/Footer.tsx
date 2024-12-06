import Image from "next/image";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="md:visible invisible md:flex md:justify-center">
        <div className="bg-[#FBFBFB] w-11/12 h-full pb-4 ">
          <div className="flex justify-between items-center p-5">
            <div className="flex flex-col items-start w-1/4">
              <Image
                src="/FooterPlant1.png"  // Yo'lni to'g'irladik
                alt="Footer Plant 1"
                className="w-1/4"
                width={100}  // O'lchamni belgiladik
                height={100} // O'lchamni belgiladik
              />
              <p className="font-bold text-base text-[#3D3D3D]">Garden Care</p>
              <p className="text-[#727272]">
                We are an online plant shop <br /> offering a wide range of
                cheap <br />
                and trendy plants.
              </p>
            </div>
            <div className="flex flex-col items-start w-1/4">
              <Image
                src="/FooterPlant2.png"  // Yo'lni to'g'irladik
                alt="Footer Plant 2"
                className="w-1/4"
                width={100}  // O'lchamni belgiladik
                height={100} // O'lchamni belgiladik
              />
              <p className="font-bold text-base text-[#3D3D3D]">
                Plant Renovation
              </p>
              <p className="text-[#727272] ">
                We are an online plant shop <br /> offering a wide range of
                cheap <br />
                and trendy plants.
              </p>
            </div>
            <div className="flex flex-col items-start w-1/4">
              <Image
                src="/FooterPlant3.png"  // Yo'lni to'g'irladik
                alt="Footer Plant 3"
                className="w-1/4"
                width={100}  // O'lchamni belgiladik
                height={100} // O'lchamni belgiladik
              />
              <p className="font-bold text-base text-[#3D3D3D]">
                Watering Garden
              </p>
              <p className="text-[#727272] ">
                We are an online plant shop <br /> offering a wide range of
                cheap <br />
                and trendy plants.
              </p>
            </div>
            <div className="flex flex-col gap-y-2 w-1/3">
              <p className="text-[#3D3D3D] text-base leading-7 font-inter font-bold">
                Would you like to join newsletters?
              </p>
              <div className="relative flex">
                <input
                  type="text"
                  name="mail"
                  id="mail"
                  placeholder="Your mail address"
                  className="p-2 rounded placeholder:text-sm placeholder:text-[#ACACAC] w-64"
                />
                <button className="bg-[#46A358] p-2 w-20 text-white rounded-r-lg font-semibold">
                  Join
                </button>
              </div>
              <p className=" text-sm text-[#727272]">
                We usually post offers and challenges in newsletter. We’re your
                online houseplant destination. We offer a wide range of
                houseplants and accessories shipped directly from our
                (green)house to yours!
              </p>
            </div>
          </div>
          <div className="bg-[#ECF6EE] w-full h-20 flex justify-around -z-10">
            <Image src="/Logo.svg" className="cursor-pointer w-32" alt="Logo" width={128} height={64} />

            <div className="flex gap-x-3 items-center">
              <Image src="/Location.svg" alt="Location" width={24} height={24} />
              <p className="text-[#3D3D3D]">
                70 West Buckingham Ave. <br /> Farmingdale, NY 11735
              </p>
            </div>
            <div className="flex gap-x-3 items-center">
              <Image src="/Message.svg" alt="Message" width={24} height={24} />
              <p className="text-[#3D3D3D]">contact@greenshop.com</p>
            </div>

            <div className="flex gap-x-3 items-center">
              <Image src="/Calling.svg" alt="Calling" width={24} height={24} />
              <p className="text-[#3D3D3D]">+88 01911 717 490</p>
            </div>
          </div>
          <br />
          <div className="flex justify-around">
            <div className="flex flex-col justify-start gap-y-1">
              <h1 className="font-bold text-lg cursor-pointer">My Account</h1>
              <p className="cursor-pointer">My Account </p>
              <p className="cursor-pointer">Our stores</p>
              <p className="cursor-pointer">contact us</p>
              <p className="cursor-pointer">Career</p>
              <p className="cursor-pointer">Specials</p>
            </div>
            <div className="flex flex-col justify-start gap-y-1">
              <h1 className="font-bold cursor-pointer text-lg">Help & Guide</h1>
              <p className="cursor-pointer">Help center</p>
              <p className="cursor-pointer">How to Buy</p>
              <p className="cursor-pointer">Shipping & Delivery </p>
              <p className="cursor-pointer">Product Policy</p>
              <p className="cursor-pointer">How to Return</p>
            </div>
            <div className="flex flex-col justify-start gap-y-1">
              <h1 className="font-bold text-lg cursor-pointer">Categories</h1>
              <p className="cursor-pointer">House Plants</p>
              <p className="cursor-pointer">Potter Plants</p>
              <p className="cursor-pointer">Seeds</p>
              <p className="cursor-pointer">Small Plants</p>
              <p className="cursor-pointer">Accessories</p>
            </div>
            <div className="flex flex-col justify-start gap-y-1">
              <h1 className="font-bold text-lg cursor-pointer">Social Media</h1>
              <div className="flex gap-x-2">
                <Image className="cursor-pointer" src="/Facebook.svg" alt="Facebook" width={24} height={24} />
                <Image className="cursor-pointer" src="/Insta.svg" alt="Instagram" width={24} height={24} />
                <Image className="cursor-pointer" src="/Twitter.svg" alt="Twitter" width={24} height={24} />
                <Image className="cursor-pointer" src="/LinkedIn.svg" alt="LinkedIn" width={24} height={24} />
                <Image className="cursor-pointer" src="/Youtube.svg" alt="YouTube" width={24} height={24} />
              </div>
              <h1 className="font-bold text-lg cursor-pointer">We Accept</h1>
              <Image src="/Payment.svg" alt="Payment" className="cursor-pointer" width={200} height={200} />
            </div>
          </div>
        </div>
      </div>
      <br />
      <p className="invisible md:visible text-[#3D3D3D]">
        © 2021 GreenShop. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
