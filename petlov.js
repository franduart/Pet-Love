

let pet = document.getElementById('pet')
let horaData = document.getElementById('meeting-time')
let select = document.getElementById('servico');


pet.addEventListener('change', function(){
    (pet.value + horaData.value)
})


let marcar = document.getElementById("marcar");
marcar.addEventListener('change', function(){
    (select.value) 
   })

function btn(){
    let mensagem = alert(`Sua consulta foi marcada com sucesso! Raça: ` + pet.value + " " + `Serviço: ` + " "  + 
    select.value + " " + horaData.value);

    const message = encodeURIComponent("Quero agendar consulta para: ")
    const phone = "12992025492"
    window.open(`https://wa.me/${phone}?text=${message} Raça: ${pet.value} Serviço: ${select.value} Data e Hora: ${horaData.value}` , "_blank");

}



function getDateNow() {
    let today = new Date();
    let date = today.getFullYear() +
        (today.getMonth() + 1).toString().padStart(2, '0') +
        today.getDate().toString().padStart(2, '0');
    let time = today.getHours().toString().padStart(2, '0') + today.getMinutes().toString().padStart(2, '0');
    return date +  `Data `  + time;
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('meeting-time').value = getDateNow();
});



let menu = document.querySelector(".menu");
let botao = document.getElementById("botao");

botao.addEventListener("click", function(event) {
   menu.style.display = "flex";
   botao.style.display = "none";
   
} )

let fechar = document.getElementById("fechar");

fechar.addEventListener("click", function(event){
    menu.style.display = "none";
    botao.style.display = "flex";
})


