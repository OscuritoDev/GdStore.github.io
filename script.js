const boton = document.querySelectorAll("button")
boton.forEach(button => {
    button.addEventListener("click", function() {
        alert("Añadido al carro");
    })
});