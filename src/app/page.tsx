import Image from "next/image";
import Label from "./_components/Label";

export default function Home() {
  return (
    <>
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
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-center mb-16">Realisations</h1>
          <div className="flex p-4 gap-16 justify-center">
            <img className="w-1/3 p-4" src="/exemple/1.jpg" alt="" />
            <img className="w-1/3 p-4" src="/exemple/2.jpg" alt="" />
          </div>
          <img className="m-auto my-32" src="/asset2.png" alt="" />

          <div className="grid grid-cols-layout1 p-4 gap-16 justify-center">
            <h1 className="text-2xl p-4 col-span-2">Avant / Apres</h1>
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
        <div className="bg-white pt-10" id="devis">
          <div className="relative bg-main-light w-3/6 h-70 rounded-3xl drop-shadow-lg m-auto flex items-center flex-col justify-center">
            <svg
              className="absolute top-0 rounded-3xl fill-mainBg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                d="M0,256L60,224C120,192,240,128,360,128C480,128,600,192,720,202.7C840,213,960,171,1080,154.7C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              ></path>
            </svg>
            <svg
              className="absolute bottom-0 rounded-3xl fill-mainBg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                d="M0,256L60,224C120,192,240,128,360,128C480,128,600,192,720,202.7C840,213,960,171,1080,154.7C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
            <h1 className="text-main-light absolute top-6 text-5xl font-bold ">
              Devis
            </h1>
            <form
              action="submit"
              className="grid grid-cols-2 w-9/12 gap-12 p-4"
            >
              <Label title="nom"></Label>
              <Label title="prenom"></Label>
              <Label title="email"></Label>
              <Label title="telephone"></Label>
              <div className="flex flex-col col-span-2">
                <label htmlFor="projet">projet</label>
                <textarea name="projet" id="" cols="30" rows="5"></textarea>
              </div>
              <button className="bg-mainBg text-main-light w-1/2 h-10 rounded-xl col-span-2 m-auto">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </main>
      
    </>
  );
}
