import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-main-light h-full md:w-full md:h-96 md:flex md:flex-row items-center justify-evenly font-sans font-bold text-5xl pt-10">
      <ul className="p-4">
        <li className="p-4 test">
          <Link href="/realisations">Réalisations</Link>
        </li>
        <li className="p-4 test">
          <Link href="/#devis">Devis</Link>
        </li>
      </ul>
      <div id="contact" className="p-8">
        <h1 className=" italic font-medium">Contact</h1>
        <ul>
          <li>
            <a
              href="mailto:aerodeco@hotmail.com"
              className="text-xl pt-4 font-normal"
            >
              Email : aerodeco@hotmail.com
            </a>
          </li>
          <li>
            <a href="tel:+32477923100" className="text-xl pt-4 font-normal">
              Tel : +32 477 92 31 00
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
