import Link from "next/link";

export default function Footer()
{
    return <footer className="bg-main-light h-96 flex items-center justify-between font-sans font-bold text-6xl mt-10">
    <ul className="p-4">
      <li className="p-4 test">
        <Link href="/realisations">
          Realisations
        </Link>
      </li>
      <li className="p-4 test">
        <Link  href="/#devis">Devis</Link>
      </li>
    </ul>
    <div id="contact" className="p-8">
      <h1 className="italic font-medium">Contact</h1>
      <p className="text-xl pt-4 font-normal">
        mail : aerodeco@hotmail.com
      </p>
      <p className="text-xl pt-4 font-normal">Tel : 0494 44 44 44</p>
    </div>
  </footer>
}