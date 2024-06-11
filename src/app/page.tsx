import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      {/* <h1 className="text-m-h1 text-primary font-extrabold">FoodEase</h1> */}
      <div className="ml-20 mt-40 bg-scroll bg-[url(/img/pretty-sombrero-sauces 1.png)]">


        <div className="w-full text-black text-6xl font-bold leading-tight break-words">
          EAT WELL, SPEND LESS:
        </div>
        <div className="w-full text-black text-6xl font-bold leading-tight break-words">
        AFFORDABLE DINING AT 
        </div>
        <div className="w-full text-black text-6xl font-bold leading-tight break-words">
          YOUR FINGERTIPS
        </div>

        <div className="w-[801px] mt-5 text-black/opacity-70 text-lg font-normal font-['Nunito Sans'] leading-[25.20px]">
          Find your favorite meals at prices that break the bank. Start your journey to budget-friendly dining today!
        </div>

        <div className="w-[205px] h-[54px] px-6 py-4 mt-5 bg-teal-700 rounded-lg justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-lg font-bold font-['Nunito Sans'] leading-snug">Order Now</div>
        </div>

        {/* <Image src="/img/pretty-sombrero-sauces 1.png" alt="pretty-sombrero-sauces" fill={true}/> */}
        
      </div>

     
      {/* <div className="grid grid-cols-11 grid-rows-5">
        <div className="flex justify-center items-center bg-primary">
          primary
        </div>
        <div className="flex justify-center items-center bg-primary-900">
          900
        </div>
        <div className="flex justify-center items-center bg-primary-800">
          800
        </div>
        <div className="flex justify-center items-center bg-primary-700">
          700
        </div>
        <div className="flex justify-center items-center bg-primary-600">
          600
        </div>
        <div className="flex justify-center items-center bg-primary-500">
          500
        </div>
        <div className="flex justify-center items-center bg-primary-400">
          400
        </div>
        <div className="flex justify-center items-center bg-primary-300">
          300
        </div>
        <div className="flex justify-center items-center bg-primary-200">
          200
        </div>
        <div className="flex justify-center items-center bg-primary-100">
          100
        </div>
        <div className="flex justify-center items-center bg-primary-50">50</div>
        <div className="flex justify-center items-center bg-success">
          Success
        </div>
        <div className="flex justify-center items-center bg-success-900">
          900
        </div>
        <div className="flex justify-center items-center bg-success-800">
          800
        </div>
        <div className="flex justify-center items-center bg-success-700">
          700
        </div>
        <div className="flex justify-center items-center bg-success-600">
          600
        </div>
        <div className="flex justify-center items-center bg-success-500">
          500
        </div>
        <div className="flex justify-center items-center bg-success-400">
          400
        </div>
        <div className="flex justify-center items-center bg-success-300">
          300
        </div>
        <div className="flex justify-center items-center bg-success-200">
          200
        </div>
        <div className="flex justify-center items-center bg-success-100">
          100
        </div>
        <div className="flex justify-center items-center bg-success-50">50</div>
        <div className="flex justify-center items-center bg-info">info</div>
        <div className="flex justify-center items-center bg-info-900">900</div>
        <div className="flex justify-center items-center bg-info-800">800</div>
        <div className="flex justify-center items-center bg-info-700">700</div>
        <div className="flex justify-center items-center bg-info-600">600</div>
        <div className="flex justify-center items-center bg-info-500">500</div>
        <div className="flex justify-center items-center bg-info-400">400</div>
        <div className="flex justify-center items-center bg-info-300">300</div>
        <div className="flex justify-center items-center bg-info-200">200</div>
        <div className="flex justify-center items-center bg-info-100">100</div>
        <div className="flex justify-center items-center bg-info-50">50</div>
        <div className="flex justify-center items-center bg-warning">
          warning
        </div>
        <div className="flex justify-center items-center bg-warning-900">
          900
        </div>
        <div className="flex justify-center items-center bg-warning-800">
          800
        </div>
        <div className="flex justify-center items-center bg-warning-700">
          700
        </div>
        <div className="flex justify-center items-center bg-warning-600">
          600
        </div>
        <div className="flex justify-center items-center bg-warning-500">
          500
        </div>
        <div className="flex justify-center items-center bg-warning-400">
          400
        </div>
        <div className="flex justify-center items-center bg-warning-300">
          300
        </div>
        <div className="flex justify-center items-center bg-warning-200">
          200
        </div>
        <div className="flex justify-center items-center bg-warning-100">
          100
        </div>
        <div className="flex justify-center items-center bg-warning-50">50</div>
        <div className="flex justify-center items-center bg-danger">danger</div>
        <div className="flex justify-center items-center bg-danger-900">
          900
        </div>
        <div className="flex justify-center items-center bg-danger-800">
          800
        </div>
        <div className="flex justify-center items-center bg-danger-700">
          700
        </div>
        <div className="flex justify-center items-center bg-danger-600">
          600
        </div>
        <div className="flex justify-center items-center bg-danger-500">
          500
        </div>
        <div className="flex justify-center items-center bg-danger-400">
          400
        </div>
        <div className="flex justify-center items-center bg-danger-300">
          300
        </div>
        <div className="flex justify-center items-center bg-danger-200">
          200
        </div>
        <div className="flex justify-center items-center bg-danger-100">
          100
        </div>
        <div className="flex justify-center items-center bg-danger-50">50</div>
      </div> */}
    </main>
  );
}
