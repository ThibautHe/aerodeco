import path from "path";
import { promises as fs } from "fs";

import ImageGrid from "../_components/_dumbComponents/ImageGrid";

export default function Realisations() {
  var fs = require("fs");
  var files = fs.readdirSync("./public/exemple");

  return (
    <>
      <div className="bg-mainBg ellipse relative h-96 flex justify-center items-center font-sans">
        <h1 className="font-bold text-5xl text-white ">Réalisations</h1>
      </div>
      <div className="p-4">
        <ImageGrid prefix="/exemple" images={files}></ImageGrid>
      </div>
    </>
  );
}
