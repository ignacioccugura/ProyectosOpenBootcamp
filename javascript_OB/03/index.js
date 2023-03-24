

let persona = {
    nombre: "Ignacio",
    apellido: "Cugura",
    edad: 22,
    isStudent: true
}

for(propiedad in persona){
    console.log('valores :>> ', persona[propiedad]);
}


lista = [1,2,3,4,5,6]

//eficiente
lista.forEach(elemento => {
    console.log('Elemento del array :>> ', elemento);    
});

//no tan eficiente
for (let propiedad of lista) {
    console.log('propiedad :>> ', propiedad);
}