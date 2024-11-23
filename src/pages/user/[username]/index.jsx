import { useRouter } from "next/router";
import Link from "next/link";
import Mycomponent from "@/components/Mycomponent";
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

const user = () => {
  const router = useRouter();
  const { username } = router.query;
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + Math.random() * 1000000);
  }, []);

  const test = () => {
    console.log("test");
  };

  return (
    <>
      <div>
        <Head>
          <title>User:{username}</title>
        </Head>
        <div className=" text-cyan-600 text-[10vh]">
          <Mycomponent title={"The Title!!"} />
          User name: <span className="text-red-500">{username}</span>
          <div>
            <Link href={"/post/1/comment/1"}>Go to comment1 post1 </Link>
          </div>
          <h1>Count:{count}</h1>
          <button
            className="px-6"
            onClick={() => {
              setCount(count + Math.random() * 1000000);
            }}
          >
            +
          </button>
          <button
            className="px-6"
            onClick={() => {
              if (count - 1 < 0) {
                return;
              }
              setCount(count - Math.random() * 1000000);
            }}
          >
            -
          </button>
        </div>
        <div className="flex  justify-center">
          <button
            onClick={test}
            className="bg-[rgb(100,100,100)] hover:bg-pink-700 text-white font-bold py-2 px-[4px] rounded-xl"
          >
            Click Me
          </button>
        </div>
      </div>
    </>
  );
};

export default user;
