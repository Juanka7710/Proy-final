function validateForm() {
    let Name = document.forms["ContactForm"]["NameUser"].value;
    var TypeUser = document.getElementById('usuarios').value;
    let Email = document.forms["ContactForm"]["EmailUser"].value;
    let Phone = document.forms["ContactForm"]["PhoneUser"].value;
    let Message = document.forms["ContactForm"]["mensaje"].value;
    var Terms = document.getElementById('confirma').checked;

    //console.log(Terms);

    if ((TypeUser == "Seleccione una opción") || (Name == "") || (Email == "") || (Phone == "") || (Message == "") || (Terms == false)) {
        swal("", "Los campos obligatorios (*) no pueden estar vacíos.", "error")
        return false;
    }
    else {
        swal("", "La información se ha enviado con éxito.", "success")
        ContactForm.reset();
    }
}