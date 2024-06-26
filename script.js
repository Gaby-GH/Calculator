// RECUP TOUCHE

// BTNS

let buttons = document.querySelectorAll("button")

// BTN INDIVIDUEL
let reset = document.querySelector("#btn_reset")
let del = document.querySelector("#btn_del")

let plus = document.querySelector("#btn_plus")
let moins = document.querySelector("#btn_moins")
let multiplication = document.querySelector("#btn_multiplication")
let division = document.querySelector("#btn_division")
let egal = document.querySelector("#btn_egal")

let virgule = document.querySelector("#btn_point")
let zero = document.querySelector("#btn_zero")
let un = document.querySelector("#btn_1")
let deux = document.querySelector("#btn_2")
let trois = document.querySelector("#btn_3")
let quatre = document.querySelector("#btn_4")
let cinque = document.querySelector("#btn_5")
let six = document.querySelector("#btn_6")
let sept = document.querySelector("#btn_7")
let huit = document.querySelector("#btn_8")
let neuf = document.querySelector("#btn_9")

// SCREEN

let screen = document.querySelector("#p_div_2")
let screen_content = ""

// SCRIPT

let number = ["btn_0", "btn_1", "btn_2", "btn_3", "btn_4", "btn_5", "btn_6", "btn_7", "btn_8", "btn_9", "btn_,"]
let operation = ["btn_plus", "btn_moins", "btn_division", "btn_multiplication", "btn_egal"]
let calcul = []
let nombre = ""
let operateur = undefined
let n = undefined

function Operation(btn){
    // Ajouter chiffre ou virgul
    if (number.includes(btn) && (btn[4] != "," || !screen_content.includes(","))){
        
        nombre += btn[4]
        screen_content += btn[4]
        screen.textContent = screen_content
    }

    // Operateur
    if (operation.includes(btn)){
        if (calcul.length == 0 && btn != "btn_egal"){
            calcul.push(nombre)
            nombre = ""

            if (btn == "btn_plus"){
                screen_content += "+"
            }else if (btn == "btn_moins"){
                screen_content += "-"
            }else if (btn == "btn_multiplication"){
                screen_content += "x"
            }else if (btn == "btn_division"){
                screen_content += "/"
            }

            operateur = screen_content[screen_content.length - 1]
            screen.textContent = screen_content

        }else if(calcul.length == 1){
            if (operateur == "+"){
                let nbr_1 = calcul[0] - 0
                let nbr_2 = nombre - 0
                screen_content = nbr_1 + nbr_2
                console.log(nbr_1, nbr_2)
            }else if (operateur == "-"){
                let nbr_1 = calcul[0] - 0
                let nbr_2 = nombre - 0
                screen_content = nbr_1 - nbr_2
                console.log(nbr_1, nbr_2)
            }else if (operateur == "/"){
                let nbr_1 = calcul[0] - 0
                let nbr_2 = nombre - 0
                screen_content = nbr_1 / nbr_2
                console.log(nbr_1, nbr_2)
            }else if (operateur == "x"){
                let nbr_1 = calcul[0] - 0
                let nbr_2 = nombre - 0
                screen_content = nbr_1 * nbr_2
                console.log(nbr_1, nbr_2)
            }

            screen.textContent = screen_content
            nombre = ""
            calcul = [screen_content]
            operateur = undefined
            
        }
    }

    // Supprimer
    if (btn == "btn_del"){
        let msg = ""
        for (i=0; i<screen_content.length - 1; i++){
            msg += screen_content[i]
        }

        screen_content = msg
        screen.textContent = screen_content
    }else if (btn == "btn_reset"){
        screen_content = ""
        screen.textContent = screen_content
    }
}

/*function Operation(btn){

    if (number.includes(btn)){
        n = btn[4]

    }else if (operation.includes(btn) && screen_content != ""){
        if (`${btn[4]}${btn[5]}` == "pl"){
            n = "+"
        }else if (`${btn[4]}${btn[5]}` == "mo"){
            n = "-"
        }else if (`${btn[4]}${btn[5]}` == "di"){
            n = "/"
        }else if (`${btn[4]}${btn[5]}` == "mu"){
            n = "x"
        }else if (`${btn[4]}${btn[5]}` == "eg" && operateur != undefined){
            operateur = undefined
        }

        if (calcul.length == 0){
            calcul.push(screen_content)
        }else if (calcul.length == 1){
            calcul.push(screen_content)
        }

        if (operateur == undefined){
            operateur = n
        }else{
            if (operateur == "+"){
                screen_content = `${calcul[0] + calcul[1]}`
            }

            calcul = []
            operateur = n
        }

    }else if (btn == "btn_point" && !screen_content.includes(",")){
        n = ","
    }else if (btn == "btn_del" && screen_content.length > 0){
        n = undefined

        let mot = ""
        for (let i=0; i<screen_content.length - 1; i++){
            mot += screen_content[i]
        }

        screen_content = `${mot}`
        screen.textContent = mot
    }else if (btn == "btn_reset"){
        n = undefined

        screen_content = ""
        screen.textContent = screen_content
    }else{
        n = undefined
    }

    if (n != undefined){
        screen_content += n
        screen.textContent = screen_content
    }
}*/


for (let i of buttons){
    i.addEventListener("click", () => {
        Operation(i.id)
    })
}

// CHANGEMENT DE THEME

let radio_1 = document.querySelector("#theme_1")
let radio_2 = document.querySelector("#theme_2")
let radio_3 = document.querySelector("#theme_3")

let radios = [radio_1, radio_2, radio_3]

let balise_css = document.querySelector("#link_css")
console.log(balise_css)

for (let i of radios){
    i.addEventListener("click", () => {
        theme = i.id[i.id.length - 1]

        if (theme == 1){
            balise_css.href = "style.css"
            radio_1.setAttribute("checked", undefined)
            
            if (radio_2.checked = undefined){
                radio_2.removeAttribute("checked")
            }

            if (radio_3.checked = undefined){
                radio_3.removeAttribute("checked")
            }
        }else if (theme == 2){
            balise_css.href = "style_2.css"
            radio_2.setAttribute("checked", undefined)

            if (radio_1.checked = undefined){
                radio_1.removeAttribute("checked")
            }

            if (radio_3.checked = undefined){
                radio_3.removeAttribute("checked")
            }
        }else if (theme == 3){
            balise_css.href = "style_3.css"
            radio_3.setAttribute("checked", undefined)

            if (radio_1.checked = undefined){
                radio_1.removeAttribute("checked")
            }

            if (radio_2.checked = undefined){
                radio_2.removeAttribute("checked")
            }
        }

        
    })
}