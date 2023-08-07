$(document).ready(function() {
    $('#form-tarefas').submit(function(e) {
        e.preventDefault();

        const inputNomeTarefa = $('#nome-tarefa');
        const linha = `<li>${inputNomeTarefa.val()}</li>`;

        $('.lista').append(linha);

        inputNomeTarefa.val('');
    });

    $(document).on('click', 'li', function() {
        $(this).toggleClass('feito');
    });
});
