$(document).ready(function () {

  $(".send-button").click(function () {
    const value = "E-mail: " + $("#email-input").val() + " | CPF: " + $("#cpf-input").val();

    console.log(value);
    alert("Sua carteirinha aparecerá em alguns minutos em seu email");
  });

var invocation = new XMLHttpRequest();
var url = 'http://localhost:8080/api'; 
function callOtherDomain() {
  if(invocation) {    
    invocation.open('GET', url, true);
    invocation.onreadystatechange = handler;
    invocation.send(); 
  }
}
 
  $("button").click(function () {
    var email = $("#email-input").val();
    var cpf = $("#cpf-input").val();
    //console.log("enviou");
    $.ajax({
      url: url,
      type: "POST",
      data:JSON.stringify( {
        email: email,
        cpf:cpf
      }),
      contentType: "application/json; charset=utf-8",
      
    })
  });
});