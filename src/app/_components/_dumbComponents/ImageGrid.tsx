import Image from "next/image";
import { PropsWithChildren } from "react";

type imageGridProps = {
  title?: string;
  images: string[];
};


export default function ImageGrid({ title, images }: imageGridProps) {

  return (
    <div className="grid grid-cols-layout1 p-4 gap-16 justify-center">
      <h1 className="text-2xl p-4 col-span-2">{title}</h1>
      {images.map((image) => (
        <Image key={image} width={400} height={400} className="w-full p-4" src={image} alt="" />
      ))}
    </div>
  );
}
