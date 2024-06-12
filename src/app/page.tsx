import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* <h1 className="text-m-h1 text-primary font-extrabold">FoodEase</h1> */}
      <section className="py-[10px] bg-[url('/img/hero.png')] h-screen bg-right">

        <div className="ml-20 pt-48 bg-scroll">
        
       
          <div className="basis-1/2 lg:px-16">
          
            <div className="w-[797px] text-black text-[56px] font-black font-['Nunito Sans'] leading-[61.60px]">EAT WELL, SPEND LESS: AFFORDABLE DINING AT YOUR FINGERTIPS</div>

              <div className="w-[801px] mt-5 text-black/opacity-70 text-lg font-normal font-['Nunito Sans'] leading-[25.20px]">
              Find your favorite meals at prices that break the bank. Start your journey to budget-friendly dining today!
              </div>

              <Link href="/order" className="w-[205px] h-[54px] px-6 py-4 mt-5 bg-teal-700 rounded-lg justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-lg font-bold font-['Nunito Sans'] leading-snug">Order Now</div>
              </Link>
          
          </div>
      
        </div>
      </section>
      
          
        {/* <Image src="/img/pretty-sombrero-sauces 1.png" alt="pretty-sombrero-sauces" fill={true}/> */}
        
     
    </main>
  );
}
