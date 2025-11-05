let Dedpool = {
    nombre: 'wade',
    apellido: 'winson',
    poder: 'regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};

console.log(Dedpool.getNombre());


let nom = Dedpool.nombre;
let ape = Dedpool.apellido;
let pod = Dedpool.poder;

console.log(nom, ape, pod);

let {nombre, apellido, poder} = Dedpool;

console.log(nombre, apellido, poder);