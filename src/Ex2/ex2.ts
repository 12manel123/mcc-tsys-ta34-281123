export const ex2 = () => {};
class Password {
    private longitud: number;
    private contraseña: string;

    constructor(longitud: number = 8) {
    this.longitud = longitud;
    this.contraseña = this.generarContraseñaAleatoria(longitud);
    }

    private generarContraseñaAleatoria(longitud: number): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let contraseñaGenerada = '';

    for (let i = 0; i < longitud; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        contraseñaGenerada += caracteres.charAt(indice);
    }

    return contraseñaGenerada;
    }

    getContraseña(): string {
    return this.contraseña;
    }
}

const contraseñaPredeterminada = new Password();
console.log(`Contraseña predeterminada: ${contraseñaPredeterminada.getContraseña()}`);

const contraseñaPersonalizada = new Password(12);
console.log(`Contraseña personalizada: ${contraseñaPersonalizada.getContraseña()}`);
