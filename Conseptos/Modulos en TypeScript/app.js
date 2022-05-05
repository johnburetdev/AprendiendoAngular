"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*El error que no permite que se ejecute este codigo en el navegador es que no esta dentro de un proyecto */
const index_1 = require("./Clases/index");
let wolverine = new index_1.Xmen("Logan", "Wolverine");
let magneto = new index_1.Villano("Magneto", "Revolucion de mutantes");
wolverine.imprimir();
magneto.imprimirPlan();
