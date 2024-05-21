import path from "path";
import { promises as fs } from "fs";

import ImageGrid from "../_components/_dumbComponents/ImageGrid";

export default function Realisations() {
  var fs = require("fs");
  var files = fs.readdirSync("./public/exemple");

  // const sortedFiles = files.sort((a, b) => {
  //   const numA = parseInt(path.basename(a, path.extname(a)).padStart(10, '0'), 10);
  //   const numB = parseInt(path.basename(b, path.extname(b)).padStart(10, '0'), 10);
  //   return numA - numB;
  // });

  console.log(files);
  console.log(files[0]);
  

  return (
    <>
      <div className="bg-mainBg ellipse relative h-96 flex justify-center items-center font-sans">
        <h1 className="font-bold text-5xl">Réalisations</h1>
      </div>
      <ImageGrid prefix="/exemple" images={files}></ImageGrid>
      <div></div>
    </>
  );
}
