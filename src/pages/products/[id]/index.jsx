import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { IoIosArrowBack } from "react-icons/io";

const product = ({ item }) => {
  return (
    <>
      <Head>
        <title>{item.id}</title>
      </Head>
      <div
        className="h-[100vh] p-[7vw]"
        style={{
          background: `Linear-gradient(45deg, #FFCCEA, #BFECFF, #CDC1FF)`,
        }}
      >
        <Link href={`/products`} className="text-black m-0 p-0 text-[5vh] ">
          <IoIosArrowBack className="hover:scale-150 transition-all ease-in-out" />
        </Link>
        <div className="flex justify-center">
          <div className="text-center">
            <Image
              src={item.image}
              width={150}
              height={150}
              alt=""
              className="mix-blend-multiply hover:scale-125 transition-all ease-in-out"
            />
          </div>
        </div>
        <div className="text-black mx-[10vw] mt-[8vh] text-[2vh]">
          <div>Id: {item.id}</div>
          <div>Title: {item.title}</div>
          <div>Price: {item.price}</div>
          <div>Description: {item.description}</div>
          <div>Category: {item.category}</div>
          <div>Rating: {item.rating.rate}</div>
        </div>
      </div>
    </>
  );
};

export default product;

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const data = await response.json();

  return { props: { item: data } };
}
