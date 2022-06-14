let main = document.getElementById('AreaItens');
let input = document.getElementById('campoentrada');
let btnAdd = document.getElementById('add_btn');
let contador = 0;
let texto = "";


function adicionar() {
    if ((input.value !== "") && (input.value !== null) && (input.value !== undefined)) {

        let texto = input.value;
        let novoItem = `<div id="${contador}" class="tarefa">
    <div class="icone">
    <i id="icone_${contador}" onclick="marcarTarefa(${contador})" class="mdi mdi-check-bold"></i>
       
    </div>
    

   <div style="text-align:left" class="textoTarefa">
   <div id="texto_${contador}">
    <p style="color:white"> ${texto}</p>
    </div>
   </div>

   <div  class="Deletar">
       <button onclick="deletar(${contador})" class="deletar">Deletar</button>
   </div>
   </div>

`;
        
        main.innerHTML += novoItem;
        
        input.focus(); //método para a pessoa digitar sem clicar de novo no input
        ++contador;
       
       input.value = "";
       console.log(contador+texto);
       
    }
}



function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();

}

input.addEventListener("keyup", function (event) {
    //SE TECLOU ENTER (13)
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})



function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if (classe == "tarefa") {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-mdi-check-bold');
        icone.classList.add('mdi-check-bold-clicado');

        

    } else {
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-bold-clicado');
        icone.classList.add('mdi-mdi-check-bold');
    }
}


