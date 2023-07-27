$(document).ready(function(){
    $('#cep').mask('000000-000');
    $('#cpf').mask('000.000.000-00');
    $('#campo-telefone').mask('(00) 00000-0000');
    $('form').validate({
        rules:{
            nome:{
                required: true,
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            },

            cpf:{
                required: true,
                cpf: true
            },
            cep:{
                required: true,
                cpf: true
            },
            endereço:{
                required: true,
                cpf: true
            }
            
            },
            messages: {
                nome: 'Por favor insira seu nome',
                telefone: 'Por favor insira seu telefone',
                email: 'Por favor insira seu Email',
                cpf: 'Por favor Insira Seu CPF',
                endereço: 'Por favor insira seu endereço',
                cep: 'Por favor insira seu cep'
            },

            submitHandles: function(form){
                console.log(form);

            },
            invalidHandler: function(evento, validador){
                let camposIncorretos = validador.numberOfInvalids();
                if(camposIncorretos)
                alert(`Existem ${camposIncorretos} campos Incorretos`);
            }
    })
})