export default class Ruta {
    constructor() {
        this._primeraBase = null;
        this._ultimaBase = null;
    }

    agregarBase(base) {
        if (this._primeraBase == null && this._ultimaBase == null) {
            this._primeraBase = base;
            this._primeraBase.despues = this._ultimaBase;

            this._ultimaBase = base;
            this._ultimaBase.despues = this._primeraBase;

        } else {
            this._ultimaBase.despues = base;
            this._ultimaBase = base;
            this._ultimaBase.despues = this._primeraBase;
        }
    }

    eliminarBase(nombreBase) {
        let baseAnterior = this._encontrarBaseAtras(nombreBase);

        if (baseAnterior.nombre == this._primeraBase.nombre && baseAnterior == this._ultimaBase.nombre) {
            this._primeraBase = null;
            this._ultimaBase = null;
        } else if (this._primeraBase.nombre == nombreBase) {
            baseAnterior.despues = this._primeraBase.despues;
            this._primeraBase = this._primeraBase.despues;
        } else if (this._ultimaBase.nombre == nombreBase) {
            baseAnterior.despues = this._ultimaBase.despues;
            this._ultimaBase = baseAnterior;
        } else {
            baseAnterior.despues = baseAnterior.despues.despues;
        }
    }

    buscarBase(nombreBase) {
        let baseBuscada = this._primeraBase;

        if (baseBuscada.nombre == nombreBase) {
            console.log(baseBuscada.toString());
        } else if (this._ultimaBase.nombre == nombreBase) {
            console.log(this._ultimaBase.toString());
        } else {
            while (baseBuscada.nombre != nombreBase && this._ultimaBase.nombre != nombreBase) {
                baseBuscada = baseBuscada.despues;;
            }

            console.log(baseBuscada.toString());
        }
    }

    _encontrarBaseAtras(nombreBase) {
        let baseBuscada = this._primeraBase;

        if (baseBuscada.nombre == nombreBase) {
            if (this._ultimaBase.nombre == nombreBase) {
                return this._primeraBase;
            } else {
                return this._ultimaBase;
            }
        } else {
            while (baseBuscada.nombre != nombreBase && this._ultimaBase.nombre != nombreBase && baseBuscada.despues.nombre != nombreBase) {
                baseBuscada = baseBuscada.despues;;
            }

            return baseBuscada;
        }
    }

    mostrarRuta(hora) {
        if (this._primeraBase == null) {
            console.log("Aún no hay ninguna ruta.");
        } else if (this._primeraBase == this._ultimaBase) {
            console.log("La ruta empieza a las: " +
                hora + "00p.m. en la base " + this._primeraBase.nombre +
                " y termina a las: " + hora + this._primeraBase.minutos + "p.m.");
        } else {
            let minutosHoraInicio = hora * 60;
            let minutosBases = 0;

            let baseActual = this._primeraBase;
            console.log(this._primeraBase.nombre);

            minutosBases = Number(this._primeraBase.minutos);

            while (baseActual.despues != this._primeraBase) {
                baseActual = baseActual.despues;
                minutosBases += Number(baseActual.minutos);

                console.log(baseActual.nombre);
            }

            console.log("Los minutos de trayecto total es de: " +
                (minutosBases + minutosHoraInicio)
            );
        }
    }
}