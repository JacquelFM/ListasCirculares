import Base from "./Base.js";
import Ruta from "./Ruta.js";

class Main {
    constructor() {
        let ruta = new Ruta();

        document.querySelector("#btnAgregar").addEventListener("click", () => {
            let intNombre = document.querySelector("#intNombre").value;
            let intMinutos = document.querySelector("#intMinutos").value;

            ruta.agregarBase(
                new Base(
                    intNombre,
                    intMinutos
                ));

        });

        document.querySelector("#btnBuscar").addEventListener("click", () => {
            let intNombreBase = document.querySelector("#intNombreBase").value;

            ruta.buscarBase(intNombreBase);
        });

        document.querySelector("#btnEliminar").addEventListener("click", () => {
            let intNombreBaseEliminar = document.querySelector("#intNombreBaseEliminar").value;

            ruta.eliminarBase(intNombreBaseEliminar);
        });

        document.querySelector("#btnReporte").addEventListener("click", () => {
            ruta.mostrarRuta(13);
        });
    }
}

let m = new Main();