import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from './parks/MesaVerde';
// import { trees, wildlife } from './parks/RockyMountain';
import * as RMFunctions from './parks/RockyMountain';
// import {
//   trees as parkTrees,
//   wildlife as parkWildlife,
// } from './parks/RockyMountain';



/* Ex5 - import {variable} from */
// console.log(parkTrees);

// parkWildlife();



/* Ex4 - import *(all) from */
// console.log(RMFunctions.trees);

// RMFunctions.wildlife();

// RMFunctions.elevation();


/* Ex3 - named exports */
// console.log(trees);

// wildlife();


/* Ex2 + Ex6*/
export default function ColoradoStateParks() {
// function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}

// export default ColoradoStateParks;


/* Ex1 */
// function ColoradoStateParks() {
//   howManyParks(); // => "42 parks!"

//   return <h1>Colorado State Parks!</h1>;
// }