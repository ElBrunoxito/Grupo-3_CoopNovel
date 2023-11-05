
document.addEventListener('DOMContentLoaded',()=>{
    const btnEmpizaYa = document.querySelector('.contenido .btn-empieza');
    const btnIS = document.querySelector('.btn-IniciarSesion');
    const btnRe = document.querySelector('.btn-Registro');
    btnEmpizaYa.addEventListener('click',()=>{
        alert("Gracias por confiar en CoopNovel\nEste boton esta en desarrollo");
    });
    btnIS.addEventListener('click',()=>{
        alert("Gracias, pero la opcion no esta disponible\n:( Inicio de sesion en construccion");
    });
    btnRe.addEventListener('click',()=>{
        alert("Gracias, pero la opcion no esta disponible\n:( Registro en construccion");
    });
});