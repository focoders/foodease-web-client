"use client";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ButtonPrimaryEnable } from "@/components/Button/Button";

const Star = (
  <path d="M440 60l120 336h320L618 592l94 348-272-208-272 208 94-348L0 396h320L440 60" />
);

const customStyles = {
  itemShapes: Star,
  activeFillColor: "#FFC633",
  inactiveFillColor: "#D9D9D9",
};

export default function DetailPage({ params }: any) {
  return (
    <div className="flex w-[80%] justify-center my-12 mx-auto h-max ">
      <div className="flex flex-col w-full h-min items-center gap-6 lg:flex-row lg:gap-16">
        <div className="flex relative w-[320px] h-[240px] rounded-md border-[1px] border-[#D2D2D2] shadow-md lg:w-[520px] lg:h-[410px] lg:basis-1/2 lg:self-start">
          <Image
            src={"https://placehold.co/600x400?text=Product+Image"}
            alt="Product Image"
            layout="fill"
            className="flex object-cover object-center rounded-2xl p-3"
          />
        </div>
        <div className="flex flex-col gap-6 lg:basis-1/2 lg:gap-4 lg:items-center">
          <div className="flex justify-between w-full lg:flex-col lg:gap-4">
            <div className="flex flex-col w-full gap-2.5 ">
              <h1 className="text-m-h1 font-bold line-clamp-2 w-[90%] lg:text-d-h2">
                Product Name
              </h1>
              <p className="text-m-b1 lg:text-d-b1">Store Name</p>
              <div className="flex gap-2 w-full items-center text-m-b1">
                <div className="flex w-[40%] lg:w-[20%]">
                  <Rating readOnly value={4.5} itemStyles={customStyles} />
                </div>
                <p>4.5/5</p>
              </div>
            </div>
            <div className="flex flex-col w-[35%] items-end justify-start gap-1.5 lg:items-start ">
              <p className="text-m-h1 text-success font-bold">Rp10000</p>
              <p className="text-m-h3 text-danger-600 font-bold line-through">
                Rp15000
              </p>
            </div>
          </div>
          <div className="flex justify-between w-full items-center lg:flex-col lg:gap-2.5">
            <div className="flex justify-start items-start text-left w-full">
              <p className="text-m-b2 font-bold lg:text-d-b2">Consumable time until <span className="font-bold text-danger-600">12/12/2024 19.00</span></p>
            </div>
            
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-m-h5 font-bold">Description:</p>
            <p className="text-m-b2 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex gap-4 lg:w-full lg:justify-start">
              <button className="text-blue-600 font-bold">Edit</button>
              <button className="text-red-600 font-bold">Delete</button>
            </div>
          <ButtonPrimaryEnable text="Add to Cart" />
        </div>
      </div>
    </div>
  );
}
