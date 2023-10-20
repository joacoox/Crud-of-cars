"use strict";
var PrimerParcial;
(function (PrimerParcial) {
    class ManejadoraAutoBD {
        static AgregarAutoSinFoto() {
            ManejadoraAutoBD.xhr.open('POST', "../backend/agregarAutoSinFoto.php", true);
            let formData = ManejadoraAutoBD.PedirDatos();
            let info = '{"marca":"' + formData.get("marca") + '","patente":"' + formData.get("patente") + '","color":"' + formData.get("color") + '","precio":"' + formData.get("precio") + '"}';
            let form = new FormData();
            form.append('auto_json', info);
            ManejadoraAutoBD.xhr.send(form);
            ManejadoraAutoBD.xhr.onreadystatechange = function () {
                if (ManejadoraAutoBD.xhr.readyState === XMLHttpRequest.DONE) {
                    if (ManejadoraAutoBD.xhr.status === 200) {
                        console.log('Éxito: ', ManejadoraAutoBD.xhr.responseText);
                        alert('Éxito: ' + ManejadoraAutoBD.xhr.responseText);
                    }
                    else {
                        console.error('Error: ', ManejadoraAutoBD.xhr.status);
                        alert('Error: ' + ManejadoraAutoBD.xhr.status);
                    }
                }
            };
        }
        static ListarAutosBD() {
            ManejadoraAutoBD.xhr.open('GET', '../backend/listadoAutosBD.php?tabla=mostrar', true);
            ManejadoraAutoBD.xhr.send();
            ManejadoraAutoBD.xhr.onreadystatechange = function () {
                if (ManejadoraAutoBD.xhr.readyState === XMLHttpRequest.DONE) {
                    if (ManejadoraAutoBD.xhr.status === 200) {
                        let retorno = ManejadoraAutoBD.xhr.responseText;
                        let div = document.getElementById("divTabla");
                        div.innerHTML = retorno;
                    }
                    else {
                        console.error('Error:', ManejadoraAutoBD.xhr.status);
                    }
                }
            };
        }
        static EliminarAutoBD(auto) {
            let info = '{"marca":"' + auto.marca + '","patente":"' + auto.patente + '","color":"' + auto.color + '","precio":"' + auto.precio + '"}';
            const confirmacion = confirm(`¿Seguro que deseas eliminar el auto de patente ${auto.patente} y marca ${auto.marca}?`);
            if (confirmacion) {
                let form = new FormData();
                form.append('auto_json', info);
                ManejadoraAutoBD.xhr.open('POST', "../backend/eliminarAutoBD.php", true);
                ManejadoraAutoBD.xhr.send(form);
                ManejadoraAutoBD.xhr.onreadystatechange = function () {
                    if (ManejadoraAutoBD.xhr.readyState === XMLHttpRequest.DONE) {
                        if (ManejadoraAutoBD.xhr.status === 200) {
                            console.log('Éxito: ', ManejadoraAutoBD.xhr.responseText);
                            alert('Éxito: ' + ManejadoraAutoBD.xhr.responseText);
                            ManejadoraAutoBD.ListarAutosBD();
                        }
                        else {
                            console.error('Error: ', ManejadoraAutoBD.xhr.status);
                            alert('Error: ' + ManejadoraAutoBD.xhr.status);
                        }
                    }
                };
            }
        }
        static ModificarAuto(auto) {
            let formData = ManejadoraAutoBD.PedirDatos();
            let info = {
                marca: formData.get("marca"),
                patente: auto.patente,
                color: formData.get("color"),
                precio: formData.get("precio")
            };
            let infoString = JSON.stringify(info);
            let form = new FormData();
            form.append('auto_json', infoString);
            ManejadoraAutoBD.xhr.open('POST', "../backend/modificarAutoBD.php", true);
            ManejadoraAutoBD.xhr.send(form);
            ManejadoraAutoBD.xhr.onreadystatechange = function () {
                if (ManejadoraAutoBD.xhr.readyState === XMLHttpRequest.DONE) {
                    if (ManejadoraAutoBD.xhr.status === 200) {
                        console.log('Éxito: ', ManejadoraAutoBD.xhr.responseText);
                        alert('Éxito: ' + ManejadoraAutoBD.xhr.responseText);
                        ManejadoraAutoBD.ListarAutosBD();
                    }
                    else {
                        console.error('Error: ', ManejadoraAutoBD.xhr.status);
                        alert('Error: ' + ManejadoraAutoBD.xhr.status);
                    }
                }
            };
        }
        static VerificarAutoBD() {
            let patenteInput = document.getElementById("patente");
            let patente = patenteInput.value;
            let info = {
                patente: patente
            };
            let infoString = JSON.stringify(info);
            let form = new FormData();
            form.append('obj_auto', infoString);
            ManejadoraAutoBD.xhr.open('POST', "../backend/verificarAutoBD.php", true);
            ManejadoraAutoBD.xhr.send(form);
            ManejadoraAutoBD.xhr.onreadystatechange = function () {
                if (ManejadoraAutoBD.xhr.readyState === XMLHttpRequest.DONE) {
                    if (ManejadoraAutoBD.xhr.status === 200) {
                        console.log('Éxito: ', ManejadoraAutoBD.xhr.responseText);
                        alert('Éxito: ' + ManejadoraAutoBD.xhr.responseText);
                    }
                    else {
                        console.error('Error: ', ManejadoraAutoBD.xhr.status);
                        alert('Error: ' + ManejadoraAutoBD.xhr.status);
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
    ManejadoraAutoBD.xhr = new XMLHttpRequest();
    PrimerParcial.ManejadoraAutoBD = ManejadoraAutoBD;
})(PrimerParcial || (PrimerParcial = {}));
//# sourceMappingURL=ManejadoraAutoBD.js.map