"use client";
import Link from "next/link";
import ImageGrid from "./ImageGrid";
import Image from "next/image";
import { motion } from "framer-motion";

export default function RealisationsSection() {
  const images = [
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
  ];
  return (
    <div className="mb-8">
      <h1 className="text-5xl font-bold text-center mb-16">Réalisations</h1>
      <motion.div
        initial={{ y: 110, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col sm:flex-row p-4 gap-16 justify-center items-center"
      >
        <Image
          width={400}
          height={300}
          className=" sm:w-1/3 p-4"
          src="/exemple/1.jpg"
          alt=""
        />
        <Image
          width={400}
          height={300}
          className=" sm:w-1/3 p-4"
          src="/exemple/2.jpg"
          alt=""
        />
      </motion.div>
      <Image
        width={400}
        height={300}
        className="m-auto w-3/6 my-9 md:my-32"
        src="/asset2.png"
        alt=""
      />

      <ImageGrid prefix="/exemple" title={"Avant / Après"} images={images}></ImageGrid>

      <div className="flex justify-center items-center">
        <Link
          href={"/realisations"}
          className="bg-main-light p-4 text-center rounded-xl w-40 underline"
        >
          Voir plus
        </Link>
      </div>
    </div>
  );
}
