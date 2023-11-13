const boton = document.querySelectorAll("button")
boton.forEach(button => {
    button.addEventListener("click", function() {
        alert("Añadido al carro");
    })
});

const link = document.querySelectorAll("a")
link.forEach(a => {
    a.addEventListener("click", function() {
        alert("ERROR 404 - SITE NOT FOUND")
    })
})
