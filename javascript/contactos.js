const form = document.getElementById('formulario');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);

    fetch('url_del_servidor', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            console.log('Datos enviados correctamente');
            // Aquí puedes agregar la lógica adicional después de enviar los datos
        } else {
            console.error('Error al enviar los datos');
        }
    })
    .catch(error => console.error('Error de red:', error));
});
