// Variaveis
const page1 = document.querySelector(".page1")
const page2 = document.querySelector(".page2")
const btnOpen = document.querySelector("#btnOpen")
const btnBack =document.querySelector("#btnBack")

//Eventos
btnOpen.addEventListener('click',toggleScreen)
btnBack.addEventListener('click',toggleScreen)
document.addEventListener('keydown', enterReturn)

//Funções
function toggleScreen() {
    page1.classList.toggle("hide")
    page2.classList.toggle("hide")
}

function enterReturn(e) {
    if (e.key == 'Enter' && page1.classList.contains('hide')) {
        toggleScreen()
    }
}