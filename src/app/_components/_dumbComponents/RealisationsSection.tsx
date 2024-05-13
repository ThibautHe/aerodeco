import Link from "next/link";
import ImageGrid from "./ImageGrid";

export default function RealisationsSection() {
  const images = [
    "/exemple/3.jpg",
    "/exemple/4.jpg",
    "/exemple/5.jpg",
    "/exemple/6.jpg",
  ];
  return (
    <div className="mb-8">
      <h1 className="text-5xl font-bold text-center mb-16">Realisations</h1>
      <div className="flex flex-col sm:flex-row p-4 gap-16 justify-center items-center">
        <img className="w-2/3 sm:w-1/3 p-4" src="/exemple/1.jpg" alt="" />
        <img className="w-2/3 sm:w-1/3 p-4" src="/exemple/2.jpg" alt="" />
      </div>
      <img className="m-auto w-3/4 my-32" src="/asset2.png" alt="" />

      <ImageGrid title={"Avant / Apres"} images={images}></ImageGrid>

      <div className="flex justify-center items-center">
        <Link href={"/realisations"} className="bg-main-light p-4 text-center rounded-xl w-40 underline">
          Voir plus
        </Link>
      </div>
    </div>
  );
}
