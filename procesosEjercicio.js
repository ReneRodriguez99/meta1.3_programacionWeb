//clase proceso.
class proceso {

    numProceso;
    lineasCodigo = [];

    constructor(numProceso, numLineasCodigo) {

        this.numProceso = numProceso;
        this.lineasCodigo = [numLineasCodigo];
    }

    agregarLineaCodigo(lineaCodigo, numLinea) {

        this.lineasCodigo[numLinea] = lineaCodigo;
    }

    getNumProceso() {

        return this.numProceso;
    }

    getLineaCodigo(numLinea) {

        return this.lineasCodigo[numLinea];
    }

    getLongitudCodigo() {

        return this.lineasCodigo.length;
    }


}

var numProcesos = prompt("Digite la cantidad de procesos a realizar: ");


inicializarSimulacion(numProcesos);


function inicializarSimulacion(numProcesos) {
    var procesos = [numProcesos];
    var arrPrefCodigo = [3 * numProcesos];

    var asciiLetra = 65;
    var letra;
    var i = 0;
    var j = 0;


    while (i != 3 * numProcesos) { //Genera las lineas de codigo para el array de cadenas

        letra = String.fromCharCode(asciiLetra + 32);
        arrPrefCodigo[i] = letra + " = " + (j + 1) + " + " + (j + 2);
        i++;
        arrPrefCodigo[i] = "console.log('" + (j + 1) + " + " + (j + 2) + "');";
        i++;
        arrPrefCodigo[i] = "console.log(" + letra + ");"
        i++;
        j++;

        asciiLetra++;

    }

    //Se crean los procesos y se le asigna las lineas de codigo a cada proceso (3 lineas).
    var x = 0;
    for (i = 0; i < numProcesos; i++) {

        procesos[i] = new proceso(i + 1, 3); //se instancia un objeto de la clase proceso.

        for (j = 0; j < 3; j++) {
            procesos[i].agregarLineaCodigo(arrPrefCodigo[x], j);
            x++;
        }

    }

   

    iniciarSimulacion(numProcesos,procesos);

}

//i representa la linea de codigo a ejecutar.
function iniciarSimulacion(numProcesos, procesos = []) {

    //Se inician los procesos donde cada proceso ejecuta 1 linea de codigo por turno hasta terminar las lineas de codigo de cada proceso.
    for (i = 0; i < 3; i++) {

        for (j = 0; j < numProcesos; j++) {

            console.log("Proceso " + procesos[j].getNumProceso());
            console.log(procesos[j].getLineaCodigo(i));

            //si i coincide con la longitud total del arreglo de lineas de codigo del proceso significa que ya termino.
            if (i == procesos[j].getLongitudCodigo() - 1) {

                console.log("Proceso " + procesos[j].getNumProceso() + " Terminado.");

            }

        }


    }




}