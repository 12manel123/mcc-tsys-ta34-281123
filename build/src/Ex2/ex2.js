"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ex2 = void 0;
const ex2 = () => { };
exports.ex2 = ex2;
class Password {
    constructor(longitud = 8) {
        this.longitud = longitud;
        this.contraseña = this.generarContraseñaAleatoria(longitud);
    }
    generarContraseñaAleatoria(longitud) {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let contraseñaGenerada = '';
        for (let i = 0; i < longitud; i++) {
            const indice = Math.floor(Math.random() * caracteres.length);
            contraseñaGenerada += caracteres.charAt(indice);
        }
        return contraseñaGenerada;
    }
    getContraseña() {
        return this.contraseña;
    }
}
const contraseñaPredeterminada = new Password();
console.log(`Contraseña predeterminada: ${contraseñaPredeterminada.getContraseña()}`);
const contraseñaPersonalizada = new Password(12);
console.log(`Contraseña personalizada: ${contraseñaPersonalizada.getContraseña()}`);
