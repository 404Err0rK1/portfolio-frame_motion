"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Ecommerce shop apple",
    desc: "The website also features a secure checkout process, multiple payment options, and customer support via live chat and email. It’s a one-stop-shop for anyone looking to purchase a Macbook.",
    img: "https://camo.githubusercontent.com/ece1d9732a3599ca0b69c5955d3ab1176f9288cbf27c3d54394d2055b0a21969/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f73746f726167652d696d6167652d31663232662e61707073706f742e636f6d2f6f2f53637265656e73686f7425323028313336292e706e673f616c743d6d6564696126746f6b656e3d39333239653835622d666633362d343863612d393937662d376636326334323631663733",
    link: "https://github.com/404Err0rK1/Ecommerce-shop-apple.git",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Food odering",
    desc: "Building a food ordering website, including components and features: a homepage, authentication, profile editing page, admin panel (categories, menu items, users), listing products, menu items, and cart page.",
    img: "https://camo.githubusercontent.com/a71559ca67a6c74685162674d4c097c2dceeae03f7f5e8298fc333fd677ef25c/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f73746f726167652d696d6167652d31663232662e61707073706f742e636f6d2f6f2f666f6f642d6f646572696e6725324653637265656e73686f7425323028313138292e706e673f616c743d6d6564696126746f6b656e3d62346439393033662d653835352d346331312d616564632d626237646130623739313237",
    link: "https://github.com/404Err0rK1/Food-Tp.git",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Vanilla Book App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Spotify Music App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-white justify-center items-center pt-10">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-[800px] h-56 md:w-96 md:h-64 lg:w-[600px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
