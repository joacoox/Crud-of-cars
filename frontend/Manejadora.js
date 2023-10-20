"use strict";
var PrimerParcial;
(function (PrimerParcial) {
    class Manejadora {
        static AgregarAutoJSON() {
            let form = Manejadora.PedirDatos();
            Manejadora.xhr.open('POST', "../backend/AltaAutoJSON.php", true);
            Manejadora.xhr.send(form);
            Manejadora.xhr.onreadystatechange = function () {
                if (Manejadora.xhr.readyState === XMLHttpRequest.DONE) {
                    if (Manejadora.xhr.status === 200) {
                        console.log('Éxito:', Manejadora.xhr.responseText);
                        alert('Éxito:' + Manejadora.xhr.responseText);
                    }
                    else {
                        console.error('Error:', Manejadora.xhr.status);
                        alert('Error: ' + PrimerParcial.ManejadoraAutoFotos.xhr.status);
                    }
                }
            };
        }
        static MostrarAutosJSON() {
            Manejadora.xhr.open('GET', '../backend/listadoAutosJSON.php', true);
            Manejadora.xhr.onreadystatechange = function () {
                if (Manejadora.xhr.readyState === XMLHttpRequest.DONE) {
                    if (Manejadora.xhr.status === 200) {
                        let retorno = Manejadora.xhr.responseText;
                        let div = document.getElementById("divTabla");
                        div.innerHTML = retorno;
                    }
                    else {
                        console.error('Error:', Manejadora.xhr.status);
                    }
                }
            };
            Manejadora.xhr.send();
        }
        static VerificarAutoJSON() {
            let form = Manejadora.PedirDatos();
            Manejadora.xhr.open('POST', "../backend/verificarAutoJSON.php", true);
            Manejadora.xhr.send(form);
            Manejadora.xhr.onreadystatechange = function () {
                if (Manejadora.xhr.readyState === XMLHttpRequest.DONE) {
                    if (Manejadora.xhr.status === 200) {
                        console.log('Éxito: ', Manejadora.xhr.responseText);
                        alert('Éxito: ' + Manejadora.xhr.responseText);
                    }
                    else {
                        console.error('Error: ', Manejadora.xhr.status);
                        alert('Error: ' + Manejadora.xhr.status);
                    }
                }
            };
        }
        static PedirDatos() {
            let marcaInput = document.getElementById("marca");
            let patenteInput = document.getElementById("patente");
            let colorInput = document.getElementById("color");
            let precioInput = document.getElementById("precio");
            let marca = marcaInput.value;
            let patente = patenteInput.value;
            let color = colorInput.value;
            let precio = precioInput.value;
            let form = new FormData();
            form.append('marca', marca);
            form.append('patente', patente);
            form.append('color', color);
            form.append('precio', precio);
            return form;
        }
    }
    Manejadora.xhr = new XMLHttpRequest();
    PrimerParcial.Manejadora = Manejadora;
})(PrimerParcial || (PrimerParcial = {}));
//# sourceMappingURL=Manejadora.js.map