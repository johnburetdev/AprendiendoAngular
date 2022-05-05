export class Villano {
    nombre:string;
    plan:string;

    constructor(nombre:string, plan:string){

        this.nombre = nombre;
        this.plan =plan;
    }

    imprimirPlan(){
        console.log(`${this.nombre} - ${this.plan} `)
    }

}