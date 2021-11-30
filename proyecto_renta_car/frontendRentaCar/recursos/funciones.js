(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
              RegistrarAdministrador();
              event.preventDefault()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  function RegistrarAdministrador(){
    let documento = document.querySelector("#txtdocumento").value;
    let nombre = document.querySelector("#txtnombre").value;
    let apellido = document.querySelector("#txtapellido").value;
    let direccion = document.querySelector("#txtdireccion").value;
    let telefono = document.querySelector("#txttelefono").value;
    let correo = document.querySelector("#txtcorreo").value;
    let sede = document.querySelector("#txtsede").value;
    let clave = document.querySelector("#txtclave").value;
    let roles = document.querySelector("#txtrol").value;
   
    let url = `http://localhost:3000/administradors`;
    let datos = {
        documento : documento,
        nombre : nombre,
        apellido : apellido,
        direccion : direccion,
        telefono : telefono,
        correo : correo,
        sede : sede,
        clave : clave,
        rolesId : "1"
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res => res.json())
    .then(mensaje =>{
        console.log(mensaje)
    })
  }