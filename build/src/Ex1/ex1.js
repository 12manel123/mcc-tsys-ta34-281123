"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ex1 = void 0;
const ex1 = () => { };
exports.ex1 = ex1;
class Persona {
    constructor(nombre = '', edad = 0, dni, sexo = Persona.SEXO_POR_DEFECTO, peso = 0, altura = 0) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    // Getters y setters
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getDNI() {
        return this.dni;
    }
    getSexo() {
        return this.sexo;
    }
    setSexo(sexo) {
        this.sexo = sexo;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(peso) {
        this.peso = peso;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(altura) {
        this.altura = altura;
    }
}
Persona.SEXO_POR_DEFECTO = 'H';
const persona1 = new Persona('Juan', 25, '12345678A', 'H', 70, 1.75);
const persona2 = new Persona('Maria', 30, '87654321B', 'M', 60, 1.60);
const persona3 = new Persona('Pedro', 40, '98765432C');
console.log(persona1);
console.log(persona2);
console.log(persona3);
