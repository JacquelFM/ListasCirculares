export default class Base {
    constructor(nombre, minutos) {
        this._nombre = nombre;
        this._minutos = minutos;

        this._despues = null;
        this._anterior = null;
    }

    get nombre() {
        return this._nombre;
    }

    get minutos() {
        return this._minutos;
    }

    get despues() {
        return this._despues;
    }

    get anterior() {
        return anterior;
    }

    set despues(nuevo) {
        this._despues = nuevo;
    }

    set anterior(nuevo) {
        this._anterior = nuevo;
    }

    toString() {
        return `Nombre: ${this._nombre} - 
        minutos: ${this._minutos}`;
    }

}