"use client";
import Link from "next/link";
import ImageGrid from "./ImageGrid";
import Image from "next/image";
import { motion } from "framer-motion";

export default function RealisationsSection() {
  const images = [
    "exemple/003.jpg",
    "exemple/004.jpg",
    "exemple/005.jpg",
    "exemple/006.jpg",
  ];
  return (
    <div className="mb-8">
      <h1 className="text-5xl font-bold text-center mb-16">Réalisations</h1>
      <motion.div
        initial={{ y: 110, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-2 sm:gap-8 justify-center items-center p-4"
      >
        <Image
          width={400}
          height={300}
          className=" sm:w-1/3"
          src="/exemple/001.jpg"
          alt=""
        />
        <Image
          width={400}
          height={300}
          className=" sm:w-1/3"
          src="/exemple/002.jpg"
          alt=""
        />
      </motion.div>
      <Image
        width={400}
        height={300}
        className="m-auto w-3/6 my-9 md:my-32"
        src="/asset2-2.png"
        alt=""
      />

      <div className="p-4">
        <ImageGrid
          prefix=""
          title={"Avant / Après"}
          images={images}
        ></ImageGrid>
      </div>

      <div className="flex justify-center items-center my-20">
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
