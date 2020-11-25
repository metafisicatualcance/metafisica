
function comenta(){
    var correo = document.form.correo.value;;
    var comentarios = `¡Gracias  ${correo} Por tus comentarios!`
    var validarCorreo = document.forms["form"]["correo"].value;
      
      if (validarCorreo == "") {
        alert("Debes llenar el campo de correo");
        return false;
      }
    
      document.getElementById('p').innerHTML = comentarios;
    
  }

//   function cerrar() {
//     window.location="index.html";	

// }
