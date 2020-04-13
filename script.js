$(document).ready(() => {
	$('#documentacao').on('click', ()=>{
        $('#pagina').load('./documentacao.html')
        // $.get('documentacao.html',data=>{
        //     console.log(data)
        // })
        // $.post('documentacao.html',data=>{
        //     console.log(data)
        // })
    })
    $('#suporte').on('click', ()=>{
        $('#pagina').load('./suporte.html')
        // $.get('suporte.html',data=>{
        //     console.log(data)
        // })
        // $.post('documentacao.html',data=>{
        //     console.log(data)
        // })
    })

    $('#competencia').on('change',e=>{

        let competencia = $(e.target).val()

        $.ajax({
            type: 'GET',
            url: 'app.php',
            data: `competencia=${competencia}`, //igual passar parametro via GET
            dataType: 'json',
            success: dados=>{
                $('#numero_vendas').html(dados.numeroVendas)
                $('#total_de_vendas').html(dados.TotalVendas)
            },
            error:erro=>{console.log(erro)}
        })
        //metodo, url, dados, sucesso, erro
    })
})