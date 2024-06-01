"use client";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <div className="grid grid-cols-phone sm:grid-cols-layout1 gap-2 sm:gap-8 justify-center w-full">
      <h1 className="text-2xl col-span-2">{title}</h1>
      {images.map((image) => (
        <motion.div
          key={image}
          initial={{ y: 110, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            width={400}
            height={400}
            className="w-full"
            src={`${prefix}/${image}`}
            alt=""
          />
        </motion.div>
      ))}
    </div>
  );
}
