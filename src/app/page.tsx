import Image from "next/image";
import Label from "./_components/Label";
import HomePage from "./_components/_dumbComponents/HomePage";
import RealisationsSection from "./_components/_dumbComponents/RealisationsSection";
import Devis from "./_components/Devis";

export default function Home() {
  return (
    <>
      <main className="font-sans bg-phonebg sm:bg-main-bg sm:bg-md-bg 3xl:bg-xlmain-bg 3xl:bg-testbg bg-no-repeat bg-mainBg">
        <HomePage></HomePage>
        <RealisationsSection></RealisationsSection>
        <Devis></Devis>
      </main>
    </>
  );
}
