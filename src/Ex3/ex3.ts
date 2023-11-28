export const ex3 = () => {};
class Electrodomestico {
    protected precioBase: number;
    protected color: string;
    protected consumoEnergetico: string;
    protected peso: number;

    constructor() {
    this.precioBase = 100;
    this.color = 'blanco';
    this.consumoEnergetico = 'F';
    this.peso = 5;
    }

    getPrecioBase(): number {
    return this.precioBase;
    }

    getColor(): string {
    return this.color;
    }

    getConsumoEnergetico(): string {
    return this.consumoEnergetico;
    }

    getPeso(): number {
    return this.peso;
    }

    comprobarConsumoEnergetico(letra: string): void {
    const letrasValidas = ['A', 'B', 'C', 'D', 'E', 'F'];
    if (letrasValidas.includes(letra.toUpperCase())) {
        this.consumoEnergetico = letra.toUpperCase();
    }
    }

    comprobarColor(color: string): void {
    const coloresValidos = ['blanco', 'negro', 'rojo', 'azul', 'gris'];
    if (coloresValidos.includes(color.toLowerCase())) {
        this.color = color.toLowerCase();
    }
    }

    precioFinal(): number {
    let incrementoConsumo = 0;
    let incrementoPeso = 0;

    switch (this.consumoEnergetico) {
        case 'A':
        incrementoConsumo = 100;
        break;
        case 'B':
        incrementoConsumo = 80;
        break;
        case 'C':
        incrementoConsumo = 60;
        break;
        case 'D':
        incrementoConsumo = 50;
        break;
        case 'E':
        incrementoConsumo = 30;
        break;
        case 'F':
        incrementoConsumo = 10;
        break;
    }

    if (this.peso >= 0 && this.peso < 20) {
        incrementoPeso = 10;
    } else if (this.peso >= 20 && this.peso < 50) {
        incrementoPeso = 50;
    } else if (this.peso >= 50 && this.peso < 80) {
        incrementoPeso = 80;
    } else if (this.peso >= 80) {
        incrementoPeso = 100;
    }

    return this.precioBase + incrementoConsumo + incrementoPeso;
    }
}

class Lavadora extends Electrodomestico {
    private carga: number;

    constructor() {
    super();
    this.carga = 5;
    }

    getCarga(): number {
    return this.carga;
    }

    precioFinal(): number {
    const precioBaseElectrodomestico = super.precioFinal();

    if (this.carga > 30) {
        return precioBaseElectrodomestico + 50;
    }

    return precioBaseElectrodomestico;
    }
}

class Television extends Electrodomestico {
    private resolucion: number;
    private es4K: boolean;

    constructor() {
    super();
    this.resolucion = 20;
    this.es4K = false;
    }

    getResolucion(): number {
    return this.resolucion;
    }

    getEs4K(): boolean {
    return this.es4K;
    }

    precioFinal(): number {
    const precioBaseElectrodomestico = super.precioFinal();

    let incrementoResolucion = 0;
    let incremento4K = 0;

    if (this.resolucion > 40) {
        incrementoResolucion = precioBaseElectrodomestico * 0.3;
    }

    if (this.es4K) {
        incremento4K = 50;
    }

    return precioBaseElectrodomestico + incrementoResolucion + incremento4K;
    }
}

class MainApp {
    public static main(): void {
    const electrodomesticos: Electrodomestico[] = new Array(10);

    electrodomesticos[0] = new Lavadora();
    electrodomesticos[1] = new Television();
    electrodomesticos[2] = new Lavadora();
    electrodomesticos[3] = new Television();
    electrodomesticos[4] = new Electrodomestico();
    electrodomesticos[5] = new Lavadora();
    electrodomesticos[6] = new Television();
    electrodomesticos[7] = new Lavadora();
    electrodomesticos[8] = new Television();
    electrodomesticos[9] = new Electrodomestico();

    let precioTotalElectrodomesticos = 0;
    let precioTotalLavadoras = 0;
    let precioTotalTelevisiones = 0;

    for (const electrodomestico of electrodomesticos) {
        const precioFinalElectrodomestico = electrodomestico.precioFinal();
        precioTotalElectrodomesticos += precioFinalElectrodomestico;

        if (electrodomestico instanceof Lavadora) {
        precioTotalLavadoras += precioFinalElectrodomestico;
        } else if (electrodomestico instanceof Television) {
        precioTotalTelevisiones += precioFinalElectrodomestico;
        }
    }

    console.log(`Precio total de Electrodomésticos: ${precioTotalElectrodomesticos}`);
    console.log(`Precio total de Lavadoras: ${precioTotalLavadoras}`);
    console.log(`Precio total de Televisiones: ${precioTotalTelevisiones}`);
    }
}
MainApp.main();