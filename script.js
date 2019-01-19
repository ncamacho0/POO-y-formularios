
class Usuario {
    constructor (nombre,correo,contrasena) {
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
    }

}

let form1 =  document.getElementById("formulario");


form1.addEventListener('submit', e => {
    e.preventDefault();
    let nombre = e.target.nombre.value;
    let correo = e.target.correo.value;
    let contrasena = e.target.contrasena.value;
 
    let usuario = new Usuario (nombre, correo, contrasena)
    console.log(usuario)

});
