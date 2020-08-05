let Vehiculos = [
    vehiculo1 = {
        Marca:"Peugeot",
        Modelo:"206",
        Puertas:"4",
        Precio:"$200.000,00",
    },
    vehiculo2 = {
        Marca:"Honda",
        Modelo:"Titan",
        Cilindradas:"125c",
        Precio:"$60.000,00",
    },
    vehiculo3 = {
        Marca:"Peugeot",
        Modelo:"208",
        Puertas:"5",
        Precio:"$250.000,00",
    },
    vehiculo4 = {
        Marca:"Yamaha",
        Modelo:"YBR",
        Cilindradas:"160c",
        Precio:"$80.000,50",
    },
    
];


function imprimirlistaVehiculos(listaVehiculos){
let listaDePrecios = [];
    for(let i = 0; i<listaVehiculos.length; i++){
    
// Transformo Precio(String) a Precio(Number), para luego poder compararlos y ordenarlos
        let precioNum = listaVehiculos[i].Precio.replace("$","");
        precioNum = precioNum.replace(".","");
        precioNum = precioNum.replace(",",".");
        listaDePrecios.push(Number(precioNum));
        if(!listaVehiculos[i].Cilindradas){
            console.log(`Marca: ${listaVehiculos[i].Marca} // Modelo: ${listaVehiculos[i].Modelo} // Puertas: ${listaVehiculos[i].Puertas} // Precio: ${listaVehiculos[i].Precio}`);
        }
        else{
            console.log(`Marca: ${listaVehiculos[i].Marca} // Modelo: ${listaVehiculos[i].Modelo} // Cilindradas: ${listaVehiculos[i].Cilindradas} // Precio: ${listaVehiculos[i].Precio}`);
        }

        listaVehiculos[i].PrecioNumero = listaDePrecios[i];
        
    }

   
    ordenarMayorMenorPrecio(listaVehiculos)
    





}

function ordenarMayorMenorPrecio(lista){
    let modeloY = {};

    lista.sort(function (prev, next){
        return next.PrecioNumero -prev.PrecioNumero;
    })

    for(let i = 0; i < lista.length; i++){
        if(lista[i].Modelo.indexOf("Y") === 0){
            modeloY = i;
        }
       
    }


    console.log("=============================");
    console.log(`Vehiculo mas caro: ${lista[0].Marca} : ${lista[0].Precio} `);
    console.log(`Vehiculo mas barato: ${lista[lista.length - 1].Marca} : ${lista[lista.length - 1].Precio} `);
    console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${lista[modeloY].Marca} ${lista[modeloY].Modelo} ${lista[modeloY].Precio} `);

    console.log("=============================");
    console.log("Vehículos ordenados por precio de mayor a menor:");
    for(let i = 0; i < lista.length; i++){
    console.log(`${lista[i].Marca} : ${lista[i].Modelo}`);
    }
}


module.exports ={
    imprimirlistaVehiculos,
    Vehiculos,

} ;