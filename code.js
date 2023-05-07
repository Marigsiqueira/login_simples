  
   function logar(){
         var login= (document.getElementById("login").value) //pegando o texto do input pelo id e guardando na variável login
         var senha= (document.getElementById("senha").value)
         
         if (login == "mari" && senha == "mari"){ //atribuindo condição com a senha desejada
                window.alert("Logado")
                location.href= "home.html"; // redirecionar para outra página se o usuário for logado
            
            } else {
                window.alert("Senha incorreta")
            }
     }


     