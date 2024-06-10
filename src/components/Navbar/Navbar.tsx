import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary-50 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <p className="text-xl font-bold ml-10">FoodEase</p>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/products">
            <p className="hover:underline">Products</p>
          </Link>
          <Link href="/sell">
            <p className="hover:underline">Sell</p>
          </Link>
          <Link href="/about">
            <p className="hover:underline">About Us</p>
          </Link>
        </div>
        <div className="flex items-center mr-20">
          <div className="relative mr-20">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-96 px-3 py-2 rounded-md border border-gray-300 pl-10"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-md bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4 2H5.4M7 13l-2.4 2L5.4 13" />
              </svg>
            </button>
            <button className="ml-2 p-2 rounded-md bg-gray-200">
              <svg
              xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}