import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const products = ({ products }) => {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div
        style={{
          background: `Linear-gradient(45deg, #FFCCEA, #BFECFF, #CDC1FF)`,
        }}
        className="h-full px-[5vw]"
      >
        <div className="flex justify-center">
          <h1 className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent text-[5vh] my-5">
            Products
          </h1>
        </div>

        <div className="flex justify-center select-none">
          <div className="grid grid-cols-6 gap-10">
            {products.map((item) => (
              <Link
                key={item.id}
                className="my-5 "
                href={`/products/${item.id}`}
              >
                <div className="flex justify-center">
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt=""
                    className="mix-blend-multiply hover:scale-125 transition-all ease-in-out"
                  />
                </div>

                <h1 className="text-center text-black mt-3">{item.id}</h1>
                <h1 className="text-center text-black mt-3">{item.title}</h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default products;

export async function getServerSideProps(context) {
  const response = await fetch("https://fakestoreapi.com/products/");
  const data = await response.json();

  return { props: { products: data } };
}
