class jugador {
    constructor(nombre, puntos, turno, cartasRestantes){
        this.nombre = nombre; 
        this.puntos = puntos; 
        this.turno = turno; 
        this.cartasRestantes = cartasRestantes;
    }
}

module.exports = jugador;