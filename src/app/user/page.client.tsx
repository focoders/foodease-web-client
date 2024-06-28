"use client";
import ProductCard from "@/components/Card/ProductCard";
import React, { useEffect, useState } from "react";
import { getNearestProductFromUserWithoutQuery } from "../services/ProductService";

interface IProduct {
  product_name: string;
  description: string;
  price_before: number;
  price_after: number;
  production_time: string;
  expired_time: string;
  stock: number;
  image_id: null;
  store_name: string;
  street: string;
  address_longitude: number;
  address_latitude: number;
  address_distance: number;
  slug: string;
  category_name: string;
  updated_at: string;
  created_at: string;
}
function UserHomepage() {
  const [productDisplayed, setProductDisplayed] = useState<IProduct[] | null>(null);

  const getNearestProductWithoutQuery = async () => {
    const datas = await getNearestProductFromUserWithoutQuery();
    if (datas === undefined || datas === null) {
      setProductDisplayed(null);
    }
    setProductDisplayed(datas!);
  };

  useEffect(() => {
    getNearestProductWithoutQuery();
  }, []);

  return (
    <div className="flex flex-wrap justify-center p-4 lg:p-12">
      <div className="grid gap-2 max-w-max gap-y-6 grid-cols-2 lg:grid-cols-4 lg:gap-4 ">
        {productDisplayed?.length === 0 ? (
          <div>No Products Found</div>
        ) : (
          productDisplayed?.map((product, index) => (
            <ProductCard
              key={index}
              productId="121"
              productName={product.product_name}
              originPrice={product.price_before.toString()}
              salePrice={product.price_after.toString()}
              location={product.street}
              image_url={product.image_id}
              rating={4.5}
            />
          ))
        )}

      </div>
    </div>
  );
}

export default UserHomepage;
