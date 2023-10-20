"use strict";
var Dominguez;
(function (Dominguez) {
    class autoBD extends Dominguez.auto {
        constructor(marca, patente, color, precio, pathfoto) {
            super(marca, patente, color, precio);
            this.pathFoto = pathfoto;
        }
        ToJson() {
            const autoJson = Object.assign(Object.assign({}, JSON.parse(this.ToString())), { pathfoto: this.pathFoto });
            return autoJson;
        }
    }
    Dominguez.autoBD = autoBD;
})(Dominguez || (Dominguez = {}));
//# sourceMappingURL=autoBD.js.map