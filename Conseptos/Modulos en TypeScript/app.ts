/*El error que no permite que se ejecute este codigo en el navegador es que no esta dentro de un proyecto */
import { Xmen , Villano } from "./Clases/index";

let wolverine = new Xmen("Logan", "Wolverine");
let magneto = new Villano("Magneto", "Revolucion de mutantes");

wolverine.imprimir();
magneto.imprimirPlan()
