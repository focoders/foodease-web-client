  import Image from "next/image";
  import Link from "next/link";

  export default function Home() {
    return (
      <main>
        <section className="py-[10px] bg-[url('/img/hero.png')] min-h-screen bg-right bg-cover">
          <div className="pt-48 bg-s container mx-auto flex flex-col lg:flex-row justify-between w-[90%] lg:w-[80%] gap-12">
            <div className="lg:basis-1/2 px-4 lg:px-16">
              <div className="w-full lg:w-[797px] text-black text-4xl lg:text-[56px] font-black font-['Nunito Sans'] leading-tight lg:leading-[61.60px]">
                EAT WELL, SPEND LESS: AFFORDABLE DINING AT YOUR FINGERTIPS
              </div>
              <div className="w-full lg:w-[801px] mt-5 text-black/opacity-70 text-base lg:text-lg font-normal font-['Nunito Sans'] leading-snug lg:leading-[25.20px]">
                Find your favorite meals at prices that break the bank. Start your journey to budget-friendly dining today!
              </div>
              <Link href="/order" className="inline-flex justify-center items-center w-full lg:w-[205px] h-[54px] px-6 py-4 mt-5 bg-teal-700 rounded-lg">
                <div className="text-white text-base lg:text-lg font-bold font-['Nunito Sans'] leading-snug">
                  Order Now
                </div>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="flex-row w-[100%] mx-auto bg-green-900">
          <div className="w-full h-auto flex flex-wrap justify-center items-center gap-24 py-6">
            <div className="flex justify-center items-center w-1/7 p-2">
              <img className="w-full h-auto max-w-[80px] md:max-w-[100px]" src="/img/mitra/mitra1.png" alt="Mitra 1" />
            </div>
            <div className="flex justify-center items-center w-1/7 p-2">
              <img className="w-full h-auto max-w-[80px] md:max-w-[100px]" src="/img/mitra/mitra2.png" alt="Mitra 2" />
            </div>
            <div className="flex justify-center items-center w-1/7 p-2">
              <img className="w-full h-auto max-w-[80px] md:max-w-[100px]" src="/img/mitra/mitra3.png" alt="Mitra 3" />
            </div>
            <div className="flex justify-center items-center w-1/7 p-2">
              <img className="w-full h-auto max-w-[80px] md:max-w-[100px]" src="/img/mitra/mitra4.png" alt="Mitra 4" />
            </div>
            <div className="flex justify-center items-center w-1/7 p-2">
              <img className="w-full h-auto max-w-[80px] md:max-w-[100px]" src="/img/mitra/mitra5.png" alt="Mitra 5" />
            </div>
            <div className="flex justify-center items-center w-1/7 p-2">
              <img className="w-full h-auto max-w-[80px] md:max-w-[100px]" src="/img/mitra/mitra6.png" alt="Mitra 6" />
            </div>
          </div>
        </section>

      </main>
    );
  }
