let quant = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    proximagem();
},3000);

function proximagem(){
    quant++;
    if(quant>6){
        quant=1 ;
    }
    
    document.getElementById("radio"+quant).checked = true;
    
}

document.getElementById("form").addEventListener("submit", function (a) {
a.preventDefault()

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";    

    const mensagem = window.alert("MENSAGEM ENVIADA");
    mensagem.insertbefore(document.getElementById("form"));
    
});