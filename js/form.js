$(document).ready(function(){
    $("#tformcadastro").validate({
        rules:{
            tnome: {
                required: true,
                maxlength: 25,
                minlength: 3,
                minWords: 2
            },
            temail: {
                required: true,
                email: true
            },
            ttelefone: {
                required: false
            },
            tmensagem:{
                required: true,
                maxlength: 150,
                minlength: 10,
                minWords: 2
            }
        },
        submitHandler: function(form){
            alert("Enviado")						
        }
    })
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })
})