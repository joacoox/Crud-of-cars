"use strict";
var Dominguez;
(function (Dominguez) {
    class auto {
        constructor(marca, patente, color, precio) {
            this.marca = marca;
            this.patente = patente;
            this.color = color;
            this.precio = precio;
        }
        ToString() {
            const autoJson = {
                marca: this.marca,
                patente: this.patente,
                color: this.color,
                precio: this.precio
            };
            return JSON.stringify(autoJson);
        }
    }
    Dominguez.auto = auto;
})(Dominguez || (Dominguez = {}));
//# sourceMappingURL=auto.js.map