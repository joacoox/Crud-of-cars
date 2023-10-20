
namespace PrimerParcial
{
    export class Manejadora 
    {    
        static xhr : XMLHttpRequest = new XMLHttpRequest();

        public static AgregarAutoJSON() 
        {
            
            let form : FormData = Manejadora.PedirDatos();

            Manejadora.xhr.open('POST', "../backend/AltaAutoJSON.php", true);
            
            Manejadora.xhr.send(form);

            Manejadora.xhr.onreadystatechange = function()
            {
                if (Manejadora.xhr.readyState === XMLHttpRequest.DONE)
                {
                    if (Manejadora.xhr.status === 200) 
                    {
                    console.log('Éxito:', Manejadora.xhr.responseText);
                    alert('Éxito:'+Manejadora.xhr.responseText);
                    } 
                    else 
                    {
                    console.error('Error:', Manejadora.xhr.status);
                    alert('Error: '+ ManejadoraAutoFotos.xhr.status);
                    }
                }
            };         
        }

      public static MostrarAutosJSON()
      {
          
            Manejadora.xhr.open('GET', '../backend/listadoAutosJSON.php', true);
        
            Manejadora.xhr.onreadystatechange = function () 
            {
            if (Manejadora.xhr.readyState === XMLHttpRequest.DONE) 
            {
                if (Manejadora.xhr.status === 200) {

                let retorno = Manejadora.xhr.responseText; 
                let div = <HTMLDivElement>document.getElementById("divTabla");
                div.innerHTML = retorno;      

                } else {
            
                console.error('Error:', Manejadora.xhr.status);
                }
            }
            };
    
            Manejadora.xhr.send();
        }
  
        public static VerificarAutoJSON()
        {
        
            let form : FormData = Manejadora.PedirDatos();

            Manejadora.xhr.open('POST', "../backend/verificarAutoJSON.php", true);
            
            Manejadora.xhr.send(form);

            Manejadora.xhr.onreadystatechange = function()
            {
                if (Manejadora.xhr.readyState === XMLHttpRequest.DONE)
                {
                    if (Manejadora.xhr.status === 200) 
                    {
                    console.log('Éxito: ', Manejadora.xhr.responseText);
                    alert('Éxito: '+ Manejadora.xhr.responseText);
                    } 
                    else 
                    {
                    console.error('Error: ', Manejadora.xhr.status);
                    alert('Error: '+ Manejadora.xhr.status);
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