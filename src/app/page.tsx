import Image from "next/image";
import Label from "./_components/Label";
import HomePage from "./_components/_dumbComponents/HomePage";
import RealisationsSection from "./_components/_dumbComponents/RealisationsSection";
import Devis from "./_components/Devis";

export default function Home() {
  return (
    <>
      <main className="font-sans bg-main-bg bg-no-repeat bg-center-4 bg-mainBg">
        <HomePage></HomePage>
        <RealisationsSection></RealisationsSection>
        <Devis></Devis>
      </main>
      
    </>
  );
}
