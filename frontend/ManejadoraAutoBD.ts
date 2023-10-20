namespace PrimerParcial
{
    export class ManejadoraAutoBD 
    {    
        static xhr : XMLHttpRequest = new XMLHttpRequest();

        public static AgregarAutoSinFoto()
        {                          
            ManejadoraAutoBD.xhr.open('POST', "../backend/agregarAutoSinFoto.php", true);

            let formData : FormData = ManejadoraAutoBD.PedirDatos();

            let info: string = '{"marca":"' + formData.get("marca") + '","patente":"' + formData.get("patente") + '","color":"' + formData.get("color") + '","precio":"' + formData.get("precio") + '"}';
            let form : FormData = new FormData();
            form.append('auto_json', info);

            ManejadoraAutoBD.xhr.send(form);

            ManejadoraAutoBD.xhr.onreadystatechange = function()
            {
                if (ManejadoraAutoBD.xhr.readyState === XMLHttpRequest.DONE)
                {
                    if (ManejadoraAutoBD.xhr.status === 200) 
                    {
                    console.log('Éxito: ', ManejadoraAutoBD.xhr.responseText);
                    alert('Éxito: '+ ManejadoraAutoBD.xhr.responseText);
                    } 
                    else 
                    {
                    console.error('Error: ', ManejadoraAutoBD.xhr.status);
                    alert('Error: '+ ManejadoraAutoBD.xhr.status);
                    }
                }
            };
        }

        public static ListarAutosBD() : void
        {
            ManejadoraAutoBD.xhr.open('GET', '../backend/listadoAutosBD.php?tabla=mostrar', true);
         
            ManejadoraAutoBD.xhr.send();

            ManejadoraAutoBD.xhr.onreadystatechange = function () 
            {
            if (ManejadoraAutoBD.xhr.readyState === XMLHttpRequest.DONE) 
            {
                if (ManejadoraAutoBD.xhr.status === 200) {

                let retorno = ManejadoraAutoBD.xhr.responseText;      
                let div = <HTMLDivElement>document.getElementById("divTabla");        
                div.innerHTML = retorno;  

                } else {
            
                console.error('Error:', ManejadoraAutoBD.xhr.status);
                }
            }
            };
        }
       
        static EliminarAutoBD(auto : any): void
        {                
            let info: string = '{"marca":"' + auto.marca + '","patente":"' + auto.patente + '","color":"' + auto.color + '","precio":"' + auto.precio + '"}';
            const confirmacion = confirm(`¿Seguro que deseas eliminar el auto de patente ${auto.patente} y marca ${auto.marca}?`);
            if(confirmacion)
            {
                let form : FormData = new FormData();
                form.append('auto_json', info);

                ManejadoraAutoBD.xhr.open('POST', "../backend/eliminarAutoBD.php", true);          
                ManejadoraAutoBD.xhr.send(form);
                ManejadoraAutoBD.xhr.onreadystatechange = function()
                {
                    if (ManejadoraAutoBD.xhr.readyState === XMLHttpRequest.DONE)
                    {
                        if (ManejadoraAutoBD.xhr.status === 200) 
                        {
                            console.log('Éxito: ', ManejadoraAutoBD.xhr.responseText);
                            alert('Éxito: '+ ManejadoraAutoBD.xhr.responseText);
                            ManejadoraAutoBD.ListarAutosBD();
                        } 
                        else 
                        {
                        console.error('Error: ', ManejadoraAutoBD.xhr.status);
                        alert('Error: '+ ManejadoraAutoBD.xhr.status);
                        }
                    }
                };
            }       
        }
        
        static ModificarAuto(auto : any): void
        {
            
            let formData : FormData = ManejadoraAutoBD.PedirDatos();

            let info = {
                marca: formData.get("marca"),
                patente: auto.patente,
                color: formData.get("color"),
                precio: formData.get("precio")
              };       
              
            let infoString = JSON.stringify(info);
            let form : FormData = new FormData();
            form.append('auto_json', infoString);

            ManejadoraAutoBD.xhr.open('POST', "../backend/modificarAutoBD.php", true);          
            ManejadoraAutoBD.xhr.send(form);
            ManejadoraAutoBD.xhr.onreadystatechange = function()
            {
                if (ManejadoraAutoBD.xhr.readyState === XMLHttpRequest.DONE)
                {
                    if (ManejadoraAutoBD.xhr.status === 200) 
                    {
                        console.log('Éxito: ', ManejadoraAutoBD.xhr.responseText);
                        alert('Éxito: '+ ManejadoraAutoBD.xhr.responseText);
                        ManejadoraAutoBD.ListarAutosBD();
                    } 
                    else 
                    {
                    console.error('Error: ', ManejadoraAutoBD.xhr.status);
                    alert('Error: '+ ManejadoraAutoBD.xhr.status);
                    }
                }
            };
        }

        static  VerificarAutoBD(): void
        {
            let patenteInput: HTMLInputElement = <HTMLInputElement>document.getElementById("patente");
            let patente: string = patenteInput.value;

            let info = {
                patente: patente
            };      

            let infoString = JSON.stringify(info);
            let form : FormData = new FormData();
            form.append('obj_auto', infoString);

            ManejadoraAutoBD.xhr.open('POST', "../backend/verificarAutoBD.php", true);          
            ManejadoraAutoBD.xhr.send(form);
            ManejadoraAutoBD.xhr.onreadystatechange = function()
            {
                if (ManejadoraAutoBD.xhr.readyState === XMLHttpRequest.DONE)
                {
                    if (ManejadoraAutoBD.xhr.status === 200) 
                    {
                        console.log('Éxito: ', ManejadoraAutoBD.xhr.responseText);
                        alert('Éxito: '+ ManejadoraAutoBD.xhr.responseText);
                    } 
                    else 
                    {
                    console.error('Error: ', ManejadoraAutoBD.xhr.status);
                    alert('Error: '+ ManejadoraAutoBD.xhr.status);
                    }
                }
            };
        }

        public static PedirDatos() 
        {
            let marcaInput: HTMLInputElement = <HTMLInputElement>document.getElementById("marca");
            let patenteInput: HTMLInputElement = <HTMLInputElement>document.getElementById("patente");
            let colorInput: HTMLInputElement = <HTMLInputElement>document.getElementById("color");
            let precioInput: HTMLInputElement = <HTMLInputElement>document.getElementById("precio");
            
            let marca: string = marcaInput.value;
            let patente: string = patenteInput.value;
            let color: string = colorInput.value;
            let precio: string = precioInput.value;
    
            let form : FormData = new FormData()
            form.append('marca', marca);
            form.append('patente', patente);
            form.append('color', color);
            form.append('precio', precio);

            return form;
           
        }
    }
}