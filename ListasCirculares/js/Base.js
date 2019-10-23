export default class Base {
    constructor(nombre, minutos) {
        this._nombre = nombre;
        this._minutos = minutos;

        this._despues = null;
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

    set despues(nuevo) {
        this._despues = nuevo;
    }

    toString() {
        return `Nombre: ${this._nombre} - 
        minutos: ${this._minutos}`;
    }

}