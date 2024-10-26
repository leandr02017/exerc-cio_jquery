$(document).ready(function(){
    $('form').on('submit',function(e){
        e.preventDefault()
       
        const criarTarefa = $('#tarefa').val();
        const incluirLinha = $('<li></li>')
        
        const botaolinha = $('<button id="bLinha" class="botao">  </button>')

        incluirLinha.append('<img src="./imagem/seta.jpg" alt="seta">')
        incluirLinha.append(`<p> Tarefa : ${criarTarefa}</p>`)
        incluirLinha.append(botaolinha)
        $(incluirLinha).appendTo('ul')

        botaolinha.on('click', function() {
            if ($(this).css('background-color') === 'rgb(211, 211, 211)' || $(this).css('background-color') === '') {
                $(this).css('background-color', 'green'); // Muda para verde
                $(this).css('color', 'white'); // Muda o texto para branco
                incluirLinha.css('text-decoration', 'line-through'); // Risco na tarefa
                incluirLinha.css('color', '#075515'); // Cor da tarefa
            } else {
                $(this).css('background-color', ''); // Volta para branco
                $(this).css('color', ''); // Remove a cor do texto
                $(this).css('border', ''); // Remove a borda do texto
                incluirLinha.css('text-decoration', ''); // Remove o risco
                incluirLinha.css('color', ''); // Restaura a cor do texto
            }
        });

        $('#tarefa').val('')
    })
})