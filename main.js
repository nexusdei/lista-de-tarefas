const form = document.getElementById('form-tarefas');

let linhas = '';

form.addEventListener('submit' ,function(e) {

    e.preventDefault();

    const inputNomeTarefa = document.getElementById('nome-tarefa');

    let linha = '<ul>';

    linha += `<li>${inputNomeTarefa.value}</li>`;

    linha += '</ul>';

    

    linhas += linha;

    const corpoTabela = document.querySelector('.lista');

    corpoTabela.innerHTML = linhas

    inputNomeTarefa.value = '';

    

    })

$(document).ready(function() { 

    $('.cadastra').on('click', function() {

        const nomeTarefa = $('#nomeTarefa').val()

        const li = document.createElement('li')

            li.innerHTML = `${nomeTarefa}`

            $('ul').on('click', 'li', function() {
                $(this).addClass('feito');
            });

    })

})