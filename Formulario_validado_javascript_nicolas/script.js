function validarForma(forma){
    var usuario= forma.usuario;
    if (usuario.value == "" || usuario.value == "Escribir usuario"){
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false;
    }
    var contraseña = forma.password;

    if (contraseña.value =="" || contraseña.value.length <8){
        alert("Debe proporcionar una contraseña de al menos 8 caracteres");
        contraseña.focus();
        contraseña.select();
        return false;
    }

    var tecnologias = forma.tecnologia;
    var checkSeleccionado = false;

    for (i = 0; i < tecnologias.length; i++) {
        if (tecnologias[i].checked) {
            checkSeleccionado = true;
        }
    }

    if (!checkSeleccionado) {
        alert("Debe proporcionar una Tecnologia");
        return false;
    }

    var generos = forma.radio;
    var radioSeleccionado = false;


    for (i = 0; i < generos.length; i++) {
        if (generos[i].checked) {
            radioSeleccionado = true;
        }
    }
    if (!radioSeleccionado) {
        alert("Debe seleccionar el Genero");
        return false;
    }

    var ocupacion = forma.ocupacion;
    if (ocupacion.value == "") {
        alert("Debe seleccionar una ocupacion");
        return false;
    }


    alert("Formulario valido, enviando datos...");
    return true;
}
