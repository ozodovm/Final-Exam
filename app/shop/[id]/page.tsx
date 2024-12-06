"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import CustomSkeleton from "@/components/Skeleton";
import Button from "@/components/ui/Button";
import Modal from "@/components/Modal";
import { EmailIcon, FacebookIcon, LikeIcon, LinkedinIcon, TwitterIcon } from "@/public/images/icon";
import { ProductType } from "@/service/products/Products";
import { useAxios } from "@/hooks/useAxios";
import { useParams } from "next/navigation";

type IconType = {
  id: string;
  href: string;
  component: React.ReactNode;
};

const SinglePage = () => {
  const { id } = useParams();
  const axiosInstance = useAxios();
  const queryClient = useQueryClient();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [showImg, setShowImg] = useState<boolean>(false);
  const [payModal, setPayModal] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);

  const iconsList: IconType[] = [
    { id: "facebook", href: "https://www.facebook.com", component: <FacebookIcon /> },
    { id: "twitter", href: "https://www.twitter.com", component: <TwitterIcon /> },
    { id: "linkedin", href: "https://www.linkedin.com", component: <LinkedinIcon /> },
    { id: "email", href: "mailto:example@example.com", component: <EmailIcon /> },
  ];

  async function getData() {
    const response = await axiosInstance.get(`/product/${id}`);
    return response.data;
  }

  const { data, isPending } = useQuery({
    queryKey: ["singlePage", id],
    queryFn: () => getData(),
  });

  const addToCartMutation = useMutation({
    mutationFn: async () =>
      axiosInstance.post("/basket", { productId: id }),
    onSuccess: () => {
      toast.success("Product added to cart!");
      queryClient.invalidateQueries({ queryKey: ["singlePage", id] });
      queryClient.invalidateQueries({ queryKey: ["basket products", id] });
    },
    onError: () => toast.error("Failed to add product to cart!"),
  });

  const likeMutation = useMutation({
    mutationFn: async () => axiosInstance.post(`/like/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["singlePage", id] }),
    onError: () => toast.error("Failed to like product!"),
  });

  useEffect(() => {
    if (data) {
      setProduct(data);
      setSelectedSize(data.size?.[0] || "");
    }
  }, [data]);

  useEffect(() => {
    document.body.style.overflow = showImg ? "hidden" : "auto";
  }, [showImg]);

  const handleOrder = () => {
    toast.success("Order placed successfully!");
    setPayModal(false);
    setCount(1);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <CustomSkeleton isLoading={isPending} />
      {product && (
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="max-lg:w-full lg:w-1/2 bg-[#FBFBFB] rounded-lg relative">
            <button onClick={() => setShowImg(true)} className="absolute top-4 right-4">
              <Image priority src="/search-img.svg" alt="search img" width={20} height={20} />
            </button>
            <Image
              priority
              src={product.image_url ? product.image_url[0] : "/logo.svg"}
              alt="product image"
              width={404}
              height={404}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:max-w-[573px]">
            <h2 className="text-[#3D3D3D] text-2xl lg:text-[28px] font-bold mb-4">
              {product.product_name}
            </h2>
            <div className="pb-3 border-b border-[#46A35880] flex items-center justify-between mb-4">
              <span className="text-xl lg:text-[22px] text-[#46A358] font-bold">
                ${product.cost}.00
              </span>
            </div>
            <p className="mb-4 text-sm leading-6 text-[#727272]">
              {product.short_description}
            </p>
            <div className="flex items-center space-x-3 mb-6">
              <Button onClick={() => setCount(Math.max(1, count - 1))} title="-" extraStyle="w-8 h-8 rounded-full" />
              <span>{count}</span>
              <Button onClick={() => setCount(count + 1)} title="+" extraStyle="w-8 h-8 rounded-full" />
            </div>
            <Button onClick={() => addToCartMutation.mutate()} title="ADD TO CART" />
            <Button onClick={handleOrder} title="BUY NOW" />
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePage;
