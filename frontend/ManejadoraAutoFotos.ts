namespace PrimerParcial
{
    export class ManejadoraAutoFotos
    {    
        static xhr : XMLHttpRequest = new XMLHttpRequest();

        static AgregarAutoFoto(): void
        {
            let formData : FormData = ManejadoraAutoFotos.PedirDatos();
            let foto: any = (<HTMLInputElement>document.getElementById("foto"));

            if (foto.files && foto.files[0])
            {
                formData.append('foto', foto.files[0]);
                ManejadoraAutoFotos.xhr.open('POST', "../backend/agregarAutoBD.php", true); 
                ManejadoraAutoFotos.xhr.send(formData);
                ManejadoraAutoFotos.xhr.onreadystatechange = function()
                {
                    if (ManejadoraAutoFotos.xhr.readyState === XMLHttpRequest.DONE)
                    {
                        if (ManejadoraAutoFotos.xhr.status === 200) 
                        {
                        console.log('Éxito: ', ManejadoraAutoFotos.xhr.responseText);
                        alert('Éxito: '+ ManejadoraAutoFotos.xhr.responseText);
                        } 
                        else 
                        {
                        console.error('Error: ', ManejadoraAutoFotos.xhr.status);
                        alert('Error: '+ ManejadoraAutoFotos.xhr.status);
                        }
                    }
                };
            }
        }

        static BorrarAutoFoto(auto : any): void 
        {                 
            const confirmacion = confirm(`¿Seguro que deseas eliminar el auto de patente ${auto.patente} y marca ${auto.marca}?`);

            if(confirmacion)
            {               
                    let info = {
                        marca: auto.marca,
                        patente: auto.patente,
                        color: auto.color,
                        precio: auto.precio,
                        foto: auto.foto
                }; 
                alert(auto.foto);
                let form : FormData = new FormData();
                form.append('auto_json', JSON.stringify(info));

                ManejadoraAutoFotos.xhr.open('POST', "../backend/eliminarAutoBDFoto.php", true);          
                ManejadoraAutoFotos.xhr.send(form);
                ManejadoraAutoFotos.xhr.onreadystatechange = function()
                {
                    if (ManejadoraAutoFotos.xhr.readyState === XMLHttpRequest.DONE)
                    {
                        if (ManejadoraAutoFotos.xhr.status === 200) 
                        {
                            console.log('Éxito: ', ManejadoraAutoFotos.xhr.responseText);
                            alert('Éxito: '+ ManejadoraAutoFotos.xhr.responseText);
                        } 
                        else 
                        {
                        console.error('Error: ', ManejadoraAutoFotos.xhr.status);
                        alert('Error: '+ ManejadoraAutoFotos.xhr.status);
                        }
                    }
                };

              
                
            }   
        }
        static ModificarAutoBDFoto(auto : any): void 
        { 
            let foto: any = (<HTMLInputElement>document.getElementById("foto"));

            if (foto.files && foto.files[0])
            {
                let form : FormData = new FormData();
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
                ManejadoraAutoFotos.xhr.onreadystatechange = function()
                {
                    if (ManejadoraAutoFotos.xhr.readyState === XMLHttpRequest.DONE)
                    {
                        if (ManejadoraAutoFotos.xhr.status === 200) 
                        {
                            console.log('Éxito: ', ManejadoraAutoFotos.xhr.responseText);
                            alert('Éxito: '+ ManejadoraAutoFotos.xhr.responseText);
                        } 
                        else 
                        {
                        console.error('Error: ', ManejadoraAutoFotos.xhr.status);
                        alert('Error: '+ ManejadoraAutoFotos.xhr.status);
                        }
                    }
                };
            }
        }       
        public static ListarAutosBDFoto() : void
        {
            ManejadoraAutoFotos.xhr.open('GET', '../backend/listadoAutosBDFoto.php?tabla=mostrar', true);
         
            ManejadoraAutoFotos.xhr.send();

            ManejadoraAutoFotos.xhr.onreadystatechange = function () 
            {
            if (ManejadoraAutoFotos.xhr.readyState === XMLHttpRequest.DONE) 
            {
                if (ManejadoraAutoFotos.xhr.status === 200) {

                let retorno = ManejadoraAutoFotos.xhr.responseText;      
                let div = <HTMLDivElement>document.getElementById("divTablaAutoFotos");        
                div.innerHTML = retorno;  

                } else {
            
                console.error('Error:', ManejadoraAutoFotos.xhr.status);
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