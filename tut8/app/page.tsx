import Link from "next/link";
import React from "react";

const fetchProduct = async () => {
  return await (
    await fetch("https://dummyjson.com/products", { cache: "force-cache" })
  ).json();
};

const Home = async () => {
  const data = await fetchProduct();
  return (
    <div>
      <ul>
        {data?.products?.map((product: any) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.id}?title=${product.title}`}
            >
              {product.title} <br />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
