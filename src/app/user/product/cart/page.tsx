"use client"
import { useRouter } from "next/navigation";
import { CiCircleRemove } from "react-icons/ci";

export default function CartPage() {
    const router = useRouter();

    const handleNextClick = () => {
        router.push('/user/product/checkout');
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-4">
            <div className="w-full max-w-7xl">
                <div className="grid grid-cols-12 py-4">
                    <div className="col-span-5 text-lg font-semibold ml-16 font-['Nunito Sans'] leading-snug">Products</div>
                    <div className="col-span-2 text-lg font-semibold ml-20 font-['Nunito Sans'] leading-snug">Price</div>
                    <div className="col-span-2 text-lg font-semibold ml-20 font-['Nunito Sans'] leading-snug">QTY</div>
                    <div className="col-span-2 text-lg font-semibold ml-14 font-['Nunito Sans'] leading-snug">Unit Price</div>
                </div>
                <div className="border-t border-gray-300 my-6"></div>
                <div className="flex flex-col gap-6 mt-6">
                    {/* Product 1 */}
                    <div className="grid grid-cols-12 items-center bg-gray-100 p-4 rounded-lg shadow-md relative">
                        <div className="col-span-5 flex items-center">
                            <CiCircleRemove className="text-red-500 cursor-pointer mr-4" size={24} />
                            <img className="w-24 h-24 rounded-lg object-cover" src="https://via.placeholder.com/140x130" alt="Product 1" />
                            <div className="flex-grow pl-4">
                                <div className="text-xl font-bold font-['Nunito Sans'] leading-snug">Nasi Goreng</div>
                                <div className="text-sm text-gray-600">Nasi Goreng with egg and ....</div>
                            </div>
                        </div>
                        <div className="col-span-2 text-lg font-medium text-center">Rp. 10.000</div>
                        <div className="col-span-2 flex items-center justify-center">
                            <button className="px-2">-</button>
                            <div className="px-2">1</div>
                            <button className="px-2">+</button>
                        </div>
                        <div className="col-span-2 text-lg font-medium text-center">Rp. 10.000</div>
                    </div>
                    {/* Product 2 */}
                    <div className="grid grid-cols-12 items-center bg-gray-100 p-4 rounded-lg shadow-md relative">
                        <div className="col-span-5 flex items-center">
                            <CiCircleRemove className="text-red-500 cursor-pointer mr-4" size={24} />
                            <img className="w-24 h-24 rounded-lg object-cover" src="https://via.placeholder.com/140x130" alt="Product 2" />
                            <div className="flex-grow pl-4">
                                <div className="text-xl font-bold">Nasi Bebek Rica-rica</div>
                                <div className="text-sm text-gray-600">Rice with duck and salted egg ...</div>
                            </div>
                        </div>
                        <div className="col-span-2 text-lg font-medium text-center">Rp. 13.000</div>
                        <div className="col-span-2 flex items-center justify-center">
                            <button className="px-2">-</button>
                            <div className="px-2">1</div>
                            <button className="px-2">+</button>
                        </div>
                        <div className="col-span-2 text-lg font-medium text-center">Rp. 13.000</div>
                    </div>
                </div>
                {/* Separator Line */}
                <div className="border-t border-gray-300 my-6"></div>
                {/* Subtotal and Total Container */}
                <div className="flex justify-end">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-96">
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-lg font-medium">Subtotal:</div>
                            <div className="text-lg font-medium">Rp. 23.000</div>
                        </div>
                        <div className="border-t border-gray-300 my-4"></div>
                        <div className="flex justify-between items-center">
                            <div className="text-3xl font-bold">TOTAL:</div>
                            <div className="text-3xl font-bold">Rp. 23.000</div>
                        </div>
                        <div className="flex justify-center mt-6">
                            <button onClick={handleNextClick} className="bg-teal-700 text-white text-lg font-bold py-3 w-full rounded-lg">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
