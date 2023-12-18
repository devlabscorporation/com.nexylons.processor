window.addEventListener('load', e=>{

    fetch('http://10.80.10.100/nexylons/com.nexylons.processor/com.resources/default/com.main.style.css')
        .then(response => response.css())
        .then(GetFile =>{

            const SetStyles = document.createElement('style');
            SetStyles.innerHTML = GetFile;
            document.body.appendChild(SetStyles);

        })
        .catch(TransError =>  console.error('No se pudo establecer conexión con el archivo de configuración por defecto.'));

})