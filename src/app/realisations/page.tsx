import ImageGrid from "../_components/_dumbComponents/ImageGrid";

export default function Realisations() {
    const images = [
        "/exemple/1.jpg",
        "/exemple/2.jpg",
        "/exemple/3.jpg",
        "/exemple/4.jpg",
        "/exemple/5.jpg",
        "/exemple/6.jpg",
      ];
  return (
    <>
      <div className="bg-mainBg ellipse relative h-96 flex justify-center items-center font-sans">
        <h1 className="font-bold text-5xl">Realisations</h1>
      </div>
      <div>
        <ImageGrid images={images}></ImageGrid>
      </div>
    </>
  );
}
