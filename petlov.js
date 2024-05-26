

let pet = document.getElementById('pet')
let horaData = document.getElementById('inputDateNow')
let select = document.getElementById('servico');

pet.addEventListener('change', function(){
    (pet.value + horaData.value)
})



btn.addEventListener('change', function(){
    (select.value) 
   })

function btn(){
    let mensagem = alert(`Sua consulta foi marcada com sucesso! Raça: ` + pet.value + " " + `Serviço: ` + " "  + select.value + " " + horaData.value);
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
    document.getElementById('inputDateNow').value = getDateNow();
});


