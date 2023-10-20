"use strict";
var PrimerParcial;
(function (PrimerParcial) {
    class ManejadoraAutoFotos {
        static AgregarAutoFoto() {
            let formData = ManejadoraAutoFotos.PedirDatos();
            let foto = document.getElementById("foto");
            if (foto.files && foto.files[0]) {
                formData.append('foto', foto.files[0]);
                ManejadoraAutoFotos.xhr.open('POST', "../backend/agregarAutoBD.php", true);
                ManejadoraAutoFotos.xhr.send(formData);
                ManejadoraAutoFotos.xhr.onreadystatechange = function () {
                    if (ManejadoraAutoFotos.xhr.readyState === XMLHttpRequest.DONE) {
                        if (ManejadoraAutoFotos.xhr.status === 200) {
                            console.log('Éxito: ', ManejadoraAutoFotos.xhr.responseText);
                            alert('Éxito: ' + ManejadoraAutoFotos.xhr.responseText);
                        }
                        else {
                            console.error('Error: ', ManejadoraAutoFotos.xhr.status);
                            alert('Error: ' + ManejadoraAutoFotos.xhr.status);
                        }
                    }
                };
            }
        }
        static BorrarAutoFoto(auto) {
            const confirmacion = confirm(`¿Seguro que deseas eliminar el auto de patente ${auto.patente} y marca ${auto.marca}?`);
            if (confirmacion) {
                let info = {
                    marca: auto.marca,
                    patente: auto.patente,
                    color: auto.color,
                    precio: auto.precio,
                    foto: auto.foto
                };
                alert(auto.foto);
                let form = new FormData();
                form.append('auto_json', JSON.stringify(info));
                ManejadoraAutoFotos.xhr.open('POST', "../backend/eliminarAutoBDFoto.php", true);
                ManejadoraAutoFotos.xhr.send(form);
                ManejadoraAutoFotos.xhr.onreadystatechange = function () {
                    if (ManejadoraAutoFotos.xhr.readyState === XMLHttpRequest.DONE) {
                        if (ManejadoraAutoFotos.xhr.status === 200) {
                            console.log('Éxito: ', ManejadoraAutoFotos.xhr.responseText);
                            alert('Éxito: ' + ManejadoraAutoFotos.xhr.responseText);
                        }
                        else {
                            console.error('Error: ', ManejadoraAutoFotos.xhr.status);
                            alert('Error: ' + ManejadoraAutoFotos.xhr.status);
                        }
                    }
                };
            }
        }
        static ModificarAutoBDFoto(auto) {
            let foto = document.getElementById("foto");
            if (foto.files && foto.files[0]) {
                let form = new FormData();
                alert(auto.patente);
                let info = {
                    marca: auto.marca,
                    patente: auto.patente,
                    color: auto.color,
                    precio: auto.precio,
                    foto: foto.files[0]
                };
                form.append('auto_json', JSON.stringify(info));
                ManejadoraAutoFotos.xhr.open('POST', "../backend/modificarAutoBDFoto.php", true);
                ManejadoraAutoFotos.xhr.send(form);
                ManejadoraAutoFotos.xhr.onreadystatechange = function () {
                    if (ManejadoraAutoFotos.xhr.readyState === XMLHttpRequest.DONE) {
                        if (ManejadoraAutoFotos.xhr.status === 200) {
                            console.log('Éxito: ', ManejadoraAutoFotos.xhr.responseText);
                            alert('Éxito: ' + ManejadoraAutoFotos.xhr.responseText);
                        }
                        else {
                            console.error('Error: ', ManejadoraAutoFotos.xhr.status);
                            alert('Error: ' + ManejadoraAutoFotos.xhr.status);
                        }
                    }
                };
            }
        }
        static ListarAutosBDFoto() {
            ManejadoraAutoFotos.xhr.open('GET', '../backend/listadoAutosBDFoto.php?tabla=mostrar', true);
            ManejadoraAutoFotos.xhr.send();
            ManejadoraAutoFotos.xhr.onreadystatechange = function () {
                if (ManejadoraAutoFotos.xhr.readyState === XMLHttpRequest.DONE) {
                    if (ManejadoraAutoFotos.xhr.status === 200) {
                        let retorno = ManejadoraAutoFotos.xhr.responseText;
                        let div = document.getElementById("divTablaAutoFotos");
                        div.innerHTML = retorno;
                    }
                    else {
                        console.error('Error:', ManejadoraAutoFotos.xhr.status);
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
    ManejadoraAutoFotos.xhr = new XMLHttpRequest();
    PrimerParcial.ManejadoraAutoFotos = ManejadoraAutoFotos;
})(PrimerParcial || (PrimerParcial = {}));
//# sourceMappingURL=ManejadoraAutoFotos.js.map