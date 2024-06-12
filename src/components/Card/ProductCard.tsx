import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Rating from "react-rating";
import { IoMdStar, IoStarHalf, IoMdStarOutline } from "react-icons/io";

interface ProductCardProps {
  productId: string;
  productName: string;
  originPrice: string;
  salePrice: string;
  location: string;
  image_url: string | undefined;
  rating: number;
}

function ProductCard(props: ProductCardProps) {
  const router = useRouter();
  const {
    productId,
    productName,
    originPrice,
    salePrice,
    location,
    image_url,
    rating,
  } = props;

  const handleDetailProduct = (productId: string) => {
    router.push(`/user/product/${productId}`);
  };

  return (
    <button onClick={() => handleDetailProduct(productId)}>
      <div className="flex flex-col p-2 border-[1px] border-[#d2d2d2] rounded-md shadow-md hover:scale-[103%] transition-all duration-400">
        <div className="flex justify-center w-full">
          <Image
            src={image_url || "https://placehold.co/160x120?text=Product Image"}
            width={160}
            height={120}
            alt="Product Image"
            className="object-cover mx-auto rounded-md lg:w-[268px] lg:h-[200px]"
          />
        </div>
        <div className="flex flex-col gap-[6px] text-left p-2 ">
          <p className="text-m-h4 font-bold text-black truncate ...">
            {productName}
          </p>
          <div className="flex flex-col gap-1.5">
            <p className="text-m-h3 text-success font-bold text-success-main">
              Rp{salePrice}
            </p>
            <p className="text-bodytext text-danger-600 font-bold text-m-h5 line-through ">
              Rp{originPrice}
            </p>
          </div>
          <div className="flex gap-1.5 items-start overflow-hidden">
            <p className="text-black text-m-b2 line-clamp-2">{location}</p>
          </div>
          <div className="flex w-full items-center gap-2 text-m-b2">
            <div className="flex text-[#FFC633]">
              <Rating
                emptySymbol={<IoMdStarOutline/>}
                fullSymbol={<IoMdStar/>}
                fractions={2}
                readonly
                initialRating={rating}
                className="flex mt-0.5"
              />
            </div>
            <div className="flex">{rating}/5</div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default ProductCard;
