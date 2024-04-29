import Image from "next/image";
import Label from "./_components/Label";

export default function Home() {
  return (
    <main className="font-sans bg-main-bg bg-no-repeat bg-center-4 bg-mainBg">
      <div className="h-screen mb-36 relative">
        <nav className="absolute flex w-full justify-between">
          <div className="flex flex-col p-4 text-4xl font-light">
            Aero <span className="pl-4">Deco</span>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center w-20 h-20 p-4">
            <span className="rounded-md bg-black h-2 w-9"></span>
            <span className="rounded-md bg-black h-2 w-9"></span>
            <span className="rounded-md bg-black h-2 w-9"></span>
          </div>
        </nav>
        <div className="h-full flex flex-col items-center justify-center">
          <h1 className="text-7xl text-center font-semibold italic m-10">
            Aéro <span className="text-white">Deco</span>
          </h1>
          <h2 className="text-3xl font-extralight">Peintre en Batiment</h2>
        </div>
      </div>
      <div>
        <h1 className="text-5xl font-bold text-center mb-16">Realisations</h1>
        <div className="flex p-4 gap-16 justify-center">
          <img className="w-1/3 p-4" src="/exemple/1.jpg" alt="" />
          <img className="w-1/3 p-4" src="/exemple/2.jpg" alt="" />
        </div>
        <img className="m-auto my-32" src="/asset2.png" alt="" />

        <h1 className="text-2xl p-8">Avant / Apres</h1>
        <div className="grid grid-cols-layout1 p-4 gap-16 justify-center">
          <img className="w-full p-4" src="/exemple/3.jpg" alt="" />
          <img className="w-full p-4" src="/exemple/4.jpg" alt="" />
          <img className="w-full p-4" src="/exemple/5.jpg" alt="" />
          <img className="w-full p-4" src="/exemple/6.jpg" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-main-light p-4 rounded-xl w-40 underline">
            Voir plus
          </button>
        </div>
      </div>
      <div className="bg-main-light">
        <h1>Devis</h1>
        <form
          action="submit"
          className="grid grid-cols-2 w-9/12 bg-mainBg m-auto gap-12 p-4 rounded-3 xl"
        >
          <Label title="nom"></Label>
          <Label title="prenom"></Label>
          <Label title="email"></Label>
          <Label title="telephone"></Label>
          <div className="flex flex-col col-span-2">
            <label htmlFor="projet">projet</label>
            <textarea name="projet" id="" cols="30" rows="5"></textarea>
          </div>
        </form>
      </div>
    </main>
  );
}
