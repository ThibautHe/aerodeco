"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type imageGridProps = {
  prefix?: string;
  title?: string;
  images: string[];
};

export default function ImageGrid({ prefix, title, images }: imageGridProps) {
  if (!prefix) {
    prefix = "";
  }
  return (
    <div className="grid grid-cols-phone sm:grid-cols-layout1 p-4 sm:gap-16 justify-center w-full">
      <h1 className="text-2xl p-4 col-span-2">{title}</h1>
      {images.map((image) => (
        <motion.div initial={{ y: 110,opacity:0 }} whileInView={{ y: 0,opacity:1 }} transition={{duration:1}}>
          <Image
            key={image}
            width={400}
            height={400}
            className="w-full p-4"
            src={`${prefix}/${image}`}
            alt=""
          />
        </motion.div>
      ))}
    </div>
  );
}
