export const ex1 = () => {};
class Persona {
    private nombre: string;
    private edad: number;
    private dni: string;
    private sexo: string;
    private peso: number;
    private altura: number;

    private static readonly SEXO_POR_DEFECTO: string = 'H';

    constructor(nombre: string = '', edad: number = 0, dni: string, sexo: string = Persona.SEXO_POR_DEFECTO, peso: number = 0, altura: number = 0) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    }

    // Getters y setters

    getNombre(): string {
    return this.nombre;
    }

    setNombre(nombre: string): void {
    this.nombre = nombre;
    }

    getEdad(): number {
    return this.edad;
    }

    setEdad(edad: number): void {
    this.edad = edad;
    }

    getDNI(): string {
    return this.dni;
    }

    getSexo(): string {
    return this.sexo;
    }

    setSexo(sexo: string): void {
    this.sexo = sexo;
    }

    getPeso(): number {
    return this.peso;
    }

    setPeso(peso: number): void {
    this.peso = peso;
    }

    getAltura(): number {
    return this.altura;
    }

    setAltura(altura: number): void {
    this.altura = altura;
    }
}

const persona1 = new Persona('Juan', 25, '12345678A', 'H', 70, 1.75);
const persona2 = new Persona('Maria', 30, '87654321B', 'M', 60, 1.60);
const persona3 = new Persona('Pedro', 40, '98765432C');

console.log(persona1);
console.log(persona2);
console.log(persona3);
