// Función auto ejecutable
(function () {

    /* ----------------------------- */
    /* Variables y objetos generales */
    /* ----------------------------- */

    let app = document.getElementById("app"),
        inputCaracteres = document.getElementById("numero-caracteres"),
        btnPlus = app.elements.namedItem("btn-mas-uno"),
        btnMinus = app.elements.namedItem("btn-menos-uno")


    let configuracion = {
        caracteres: parseInt(inputCaracteres.value),
        simbolos: true,
        numeros: true,
        mayusculas: true,
        minusculas: true
    }

    let caracteres = {
        numeros: "0 1 2 3 4 5 6 7 8 9",
        simbolos: "# % & / ( ) = * !",
        mayusculas: "A B C D E F G H I J K L N Ñ O P Q R S T V W Z",
        minusculas: "a b c d e f g h i j k l n ñ o p q r s t w v z"
    }

    // console.log(configuracion)


    /* ------- */
    /* Eventos */
    /* ------- */

    app.addEventListener("submit", e => {
        e.preventDefault()
    })

    // console.log(btnPlus)

    btnPlus.addEventListener('click', () => {
        configuracion.caracteres++
        inputCaracteres.value = configuracion.caracteres

        // console.log(configuracion.caracteres)
    })

    btnMinus.addEventListener('click', () => {
        if (configuracion.caracteres > 1) {
            configuracion.caracteres--
            inputCaracteres.value = configuracion.caracteres
        }

        // console.log(configuracion.caracteres)
    })

    /* --------- */
    /* Funciones */
    /* --------- */
    



}())


