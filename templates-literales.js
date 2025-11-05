let nombre = 'Dedpool'
let real = 'wade winson'

console.log(nombre + ' ' + real);
console.log(`${nombre} ${real}`);


let nombrecompleto = nombre + '' + real;
let nombreTemplate = `${nombre} ${real}`;

console.log(nombreTemplate === nombreTemplate);

function getNombre(){
    return `${nombre} es ${real}`;
}

console.log(`el nombre de ${getNombre()}`)