var button_regras = document.getElementById('regras')
var plano_de_fundo = document.getElementById('plano-de-fundo')
var close = document.getElementsByClassName('close')[0] 
var papel = document.getElementsByClassName('papel')[0]
var tesoura = document.getElementsByClassName('tesoura')[0]
var pedra = document.getElementsByClassName('pedra')[0] 
var caixa_game = document.getElementById('caixa-game')
var caixa_game2 = document.getElementById('caixa-game2') 
var caixa_escolha_usuario = document.getElementsByClassName('caixa-escolha-usuario')[0] 
var caixa_escolha_maquina = document.getElementsByClassName('caixa-escolha-maquina')[0] 
var caixa_resultado = document.getElementsByClassName('caixa-resultado')[0] 
var resultado = document.getElementsByClassName('resultado')[0] 
var painel_superior = document.getElementById('painel-superior') 
var caixa_referencia = document.getElementById('caixa-referencia') 
var button_recomecar = document.getElementById('button-recomecar')
var score = document.getElementById('numero')
var escolha_usuario
var element_clicado
var element_pai
var figura_usuario
var figura_maquina
var element2
var element3
var elementos_game = ['pedra','papel','tesoura']

var numero_maquina =  Math.floor(Math.random() * 2)
    
button_regras.addEventListener("click",function(){
    plano_de_fundo.style.display = 'block'
})
close.addEventListener("click", function(){
    plano_de_fundo.style.display = 'none'
})


 function jogar(event){

  painel_superior.style.marginBottom = '186px'
  //Capturar o nome do elemento que escolhi, através da classe, olhando para o elemento pai ou avô.
  escolha_usuario = event
  console.log(escolha_usuario)
  
      caixa_game.style.display = 'none'
      caixa_game2.style.display = 'flex'
// Cria um novo array com as duas opções não escolhidas pelo usuário
   if(escolha_usuario==='pedra')  {

    var escolha_maquina =  elementos_game.filter((element)=>{
      return element != 'pedra'
    })
        
  // Transformar o nome de português para inglês.
    if(escolha_maquina[numero_maquina]=='papel' ){
     var  escolha_maquina_ingles = "paper"
     
    }else{
      var escolha_maquina_ingles = "scissors"
    }
    
    if(escolha_usuario==='pedra' && escolha_maquina[numero_maquina]==='tesoura'){
        resultado.innerHTML = 'VOCÊ GANHOU'
      
//Adicionando na página o elemento escolhido pelo usuário
        caixa_escolha_usuario.innerHTML=` <span class="escolha">SUA ESCOLHA</span> 
          <div class="pedra">
          <div class="parte-interna">
            <img src="images/icon-rock.svg" alt=""> 
            <div class="circle1"> </div>
            <div class="circle2"> </div>
          </div>`
//Adicionando outros dois elementos não escolhidos pelo usuário para animação
          caixa_escolha_maquina.innerHTML=` <div class="tesoura" >
          <div class="parte-interna" >
            <img src="images/icon-scissors.svg" alt="" >
          </div>
        </div>
        <div class="papel" >
        <div class="parte-interna" for="papel" >
          <img src="images/icon-paper.svg" alt="" for="papel" >
        </div>
      </div> `  
          tesoura = document.getElementsByClassName(`tesoura`)[1]
          papel = document.getElementsByClassName(`papel`)[1]
          tesoura.style.position = 'absolute'
          tesoura.style.top = '0'
          tesoura.style.left = '0'
          papel.style.position = 'absolute'
          papel.style.top = '0'
          papel.style.left = '0'
          tesoura.style.animation = 'move 0.4s linear forwards'
          papel.style.animation = 'move 0.4s linear forwards'   
           figura_usuario = document.getElementsByClassName(`${escolha_usuario}`)[1]
            figura_usuario.style.position = 'relative'
            figura_usuario.style.top = '0px'
            figura_usuario.style.left = '0px'
// Mostrar o elemento escolhido pela máquina e se o usuário venceu ou não.
           setTimeout(() => {
      
        caixa_escolha_maquina.innerHTML=` <span class="escolha">MÁQUINA</span> 
        <div class="${escolha_maquina[numero_maquina]}">
        <div class="parte-interna">
          <img src="images/icon-${escolha_maquina_ingles}.svg" alt="">
        </div>`
          figura_maquina = document.getElementsByClassName(`${escolha_maquina[numero_maquina]}`)[1]
          circle1 = document.getElementsByClassName(`circle1`)[0]
          circle2 = document.getElementsByClassName(`circle2`)[0]

          figura_maquina.style.position = 'relative'
          figura_maquina.style.top = '0px'
          figura_maquina.style.left = '0px'
          caixa_escolha_maquina.style.animation = 'aparecer 0.8s linear forwards' 
          figura_maquina.style.animation = 'scale 0.8s linear forwards'
          figura_usuario.style.animation = 'scale 0.8s linear forwards' 
          caixa_referencia.style.display = 'none'
          caixa_resultado.style.opacity = '1'
          circle1.style.opacity = '1'
          circle2.style.opacity = '1'
          // Adicionando o placar
          if(resultado.innerHTML == "VOCÊ GANHOU"){
            var placar = Number(score.innerHTML) + 1
            score.innerHTML = placar
            console.log(placar)
        }
        }, 1000);
          
            setTimeout(() => {
              caixa_escolha_usuario.style.animation = 'usuario 0.5s linear forwards'
            }, 1);
      
    }else if(escolha_usuario==='pedra' && escolha_maquina[numero_maquina]==='papel'){
        resultado.innerHTML = 'VOCÊ PERDEU'
        caixa_escolha_usuario.innerHTML=` <span class="escolha">SUA ESCOLHA</span> 
        <div class="pedra">
        <div class="parte-interna">
          <img src="images/icon-rock.svg" alt=""> 
        </div>`
//Adicionando outros dois elementos não escolhidos pelo usuário para animação
        caixa_escolha_maquina.innerHTML=` <div class="tesoura" >
        <div class="parte-interna" >
          <img src="images/icon-scissors.svg" alt="" >
        </div>
      </div>
      <div class="papel" >
      <div class="parte-interna" for="papel" >
        <img src="images/icon-paper.svg" alt="" for="papel" >
      </div>
    </div> `  
    tesoura = document.getElementsByClassName(`tesoura`)[1]
    papel = document.getElementsByClassName(`papel`)[1]
    tesoura.style.position = 'absolute'
    tesoura.style.top = '0'
    tesoura.style.left = '0'
    papel.style.position = 'absolute'
    papel.style.top = '0'
    papel.style.left = '0'
    tesoura.style.animation = 'move 0.4s linear forwards'
    papel.style.animation = 'move 0.4s linear forwards'   
     figura_usuario = document.getElementsByClassName(`${escolha_usuario}`)[1]
      figura_usuario.style.position = 'relative'
      figura_usuario.style.top = '0px'
      figura_usuario.style.left = '0px'
      // Mostrar o elemento escolhido pela máquina e se o usuário venceu ou não.
      setTimeout(() => {
      
        caixa_escolha_maquina.innerHTML=` <span class="escolha">MÁQUINA</span> 
        <div class="${escolha_maquina[numero_maquina]}">
        <div class="parte-interna">
          <img src="images/icon-${escolha_maquina_ingles}.svg" alt="">
          <div class="circle1"> </div>
          <div class="circle2"> </div>
        </div>`
          figura_maquina = document.getElementsByClassName(`${escolha_maquina[numero_maquina]}`)[1]
          circle1 = document.getElementsByClassName(`circle1`)[0]
          circle2 = document.getElementsByClassName(`circle2`)[0]

          figura_maquina.style.position = 'relative'
          figura_maquina.style.top = '0px'
          figura_maquina.style.left = '0px'
          caixa_escolha_maquina.style.animation = 'aparecer 0.8s linear forwards' 
          figura_maquina.style.animation = 'scale 0.8s linear forwards'
          figura_usuario.style.animation = 'scale 0.8s linear forwards' 
          caixa_referencia.style.display = 'none'
          caixa_resultado.style.opacity = '1'
          circle1.style.opacity = '1'
          circle2.style.opacity = '1'
          if(resultado.innerHTML == "VOCÊ PERDEU"){
            console.log(score.innerHTML)
            if(Number(score.innerHTML)>0){
              var placar = Number(score.innerHTML) - 1
              score.innerHTML = placar
            }else{
            score.innerHTML = score.innerHTML
          }
              
          }
        }, 1000);
  } 
        setTimeout(() => {
          caixa_escolha_usuario.style.animation = 'usuario 0.5s linear forwards'
        }, 1);

       
    }
  
//Caso escolha papel
   if(escolha_usuario==='papel'){
    
    var escolha_maquina =  elementos_game.filter((element)=>{
      return element != 'papel'
    })
        
// Transformar o nome de português para inglês.
    if(escolha_maquina[numero_maquina]=='pedra' ){
     var  escolha_maquina_ingles = "rock"
     
    }else{
      var escolha_maquina_ingles = "scissors"
    }
    
    console.log(escolha_maquina_ingles)
if(escolha_usuario==='papel' && escolha_maquina[numero_maquina]==='pedra'){
      resultado.innerHTML = 'VOCÊ GANHOU'
//Adicionando na página o elemento escolhido pelo usuário
      caixa_escolha_usuario.innerHTML=` <span class="escolha">SUA ESCOLHA</span> 
      <div class="papel">
      <div class="parte-interna">
        <img src="images/icon-paper.svg" alt=""> 
        <div class="circle1"> </div>
        <div class="circle2"> </div>
      </div>`
//Adicionando outros dois elementos não escolhidos pelo usuário para animação
      caixa_escolha_maquina.innerHTML=` <div class="tesoura" >
      <div class="parte-interna" >
        <img src="images/icon-scissors.svg" alt="" >
      </div>
    </div>
    <div class="pedra" >
    <div class="parte-interna"  >
      <img src="images/icon-rock.svg" alt=""  >
    </div>
  </div> `  
  tesoura = document.getElementsByClassName(`tesoura`)[1]
  pedra = document.getElementsByClassName(`pedra`)[1]
  tesoura.style.position = 'absolute'
  tesoura.style.top = '0'
  tesoura.style.left = '0'
  pedra.style.position = 'absolute'
  pedra.style.top = '0'
  pedra.style.left = '0'
  tesoura.style.animation = 'move 0.4s linear forwards'
  pedra.style.animation = 'move 0.4s linear forwards'   
   figura_usuario = document.getElementsByClassName(`${escolha_usuario}`)[1]
    figura_usuario.style.position = 'relative'
    figura_usuario.style.top = '0px'
    figura_usuario.style.left = '0px'

      // Mostrar o elemento escolhido pela máquina e se o usuário venceu ou não.
      setTimeout(() => {
      
        caixa_escolha_maquina.innerHTML=` <span class="escolha">MÁQUINA</span> 
        <div class="${escolha_maquina[numero_maquina]}">
        <div class="parte-interna">
          <img src="images/icon-${escolha_maquina_ingles}.svg" alt="">
        </div>`
          figura_maquina = document.getElementsByClassName(`${escolha_maquina[numero_maquina]}`)[1]
          circle1 = document.getElementsByClassName(`circle1`)[0]
          circle2 = document.getElementsByClassName(`circle2`)[0]

          figura_maquina.style.position = 'relative'
          figura_maquina.style.top = '0px'
          figura_maquina.style.left = '0px'
          caixa_escolha_maquina.style.animation = 'aparecer 0.8s linear forwards' 
          figura_maquina.style.animation = 'scale 0.8s linear forwards'
          figura_usuario.style.animation = 'scale 0.8s linear forwards' 
          caixa_referencia.style.display = 'none'
          caixa_resultado.style.opacity = '1'
          circle1.style.opacity = '1'
          circle2.style.opacity = '1'
           // Adicionando o placar
           if(resultado.innerHTML == "VOCÊ GANHOU"){
            var placar = Number(score.innerHTML) + 1
            score.innerHTML = placar
            console.log(placar)
        }
        }, 1000);
          
            setTimeout(() => {
              caixa_escolha_usuario.style.animation = 'usuario 0.5s linear forwards'
            }, 1);

    }else if(escolha_usuario==='papel' && escolha_maquina[numero_maquina]==='tesoura'){
      resultado.innerHTML = 'VOCÊ PERDEU'

//Adicionando na página o elemento escolhido pelo usuário
caixa_escolha_usuario.innerHTML=` <span class="escolha">SUA ESCOLHA</span> 
<div class="papel">
<div class="parte-interna">
  <img src="images/icon-paper.svg" alt=""> 
</div>`

//Adicionando outros dois elementos não escolhidos pelo usuário para animação
caixa_escolha_maquina.innerHTML=` <div class="tesoura" >
<div class="parte-interna" >
  <img src="images/icon-scissors.svg" alt="" >
</div>
</div>
<div class="pedra" >
<div class="parte-interna"  >
<img src="images/icon-rock.svg" alt=""  >
</div>
</div> `  

tesoura = document.getElementsByClassName(`tesoura`)[1]
  pedra = document.getElementsByClassName(`pedra`)[1]
  tesoura.style.position = 'absolute'
  tesoura.style.top = '0'
  tesoura.style.left = '0'
  pedra.style.position = 'absolute'
  pedra.style.top = '0'
  pedra.style.left = '0'
  tesoura.style.animation = 'move 0.4s linear forwards'
  pedra.style.animation = 'move 0.4s linear forwards'   
   figura_usuario = document.getElementsByClassName(`${escolha_usuario}`)[1]
    figura_usuario.style.position = 'relative'
    figura_usuario.style.top = '0px'
    figura_usuario.style.left = '0px'
   // Mostrar o elemento escolhido pela máquina e se o usuário venceu ou não.
   setTimeout(() => {
      
    caixa_escolha_maquina.innerHTML=` <span class="escolha">MÁQUINA</span> 
    <div class="${escolha_maquina[numero_maquina]}">
    <div class="parte-interna">
      <img src="images/icon-${escolha_maquina_ingles}.svg" alt="">
      <div class="circle1"> </div>
      <div class="circle2"> </div>
    </div>`
      figura_maquina = document.getElementsByClassName(`${escolha_maquina[numero_maquina]}`)[1]
      circle1 = document.getElementsByClassName(`circle1`)[0]
      circle2 = document.getElementsByClassName(`circle2`)[0]

      figura_maquina.style.position = 'relative'
      figura_maquina.style.top = '0px'
      figura_maquina.style.left = '0px'
      caixa_escolha_maquina.style.animation = 'aparecer 0.8s linear forwards' 
      figura_maquina.style.animation = 'scale 0.8s linear forwards'
      figura_usuario.style.animation = 'scale 0.8s linear forwards' 
      caixa_referencia.style.display = 'none'
      caixa_resultado.style.opacity = '1'
      circle1.style.opacity = '1'
      circle2.style.opacity = '1'
      if(resultado.innerHTML == "VOCÊ PERDEU"){
        console.log(score.innerHTML)
        if(Number(score.innerHTML)>0){
          var placar = Number(score.innerHTML) - 1
          score.innerHTML = placar
        }else{
        score.innerHTML = score.innerHTML
      }
          
      }
    }, 1000);
      
        setTimeout(() => {
          caixa_escolha_usuario.style.animation = 'usuario 0.5s linear forwards'
        }, 1);



    }
   
    painel_superior.style.marginBottom = '186px'
    
    
}

 //Caso escolha tesoura

 if(escolha_usuario==='tesoura'){

  //Caso escolha papel
  if(escolha_usuario==='tesoura'){
    var escolha_maquina =  elementos_game.filter((element)=>{
      return element != 'tesoura'
    })}
        
// Transformar o nome de português para inglês.
    if(escolha_maquina[numero_maquina]=='pedra' ){
     var  escolha_maquina_ingles = "rock"
     
    }else{
      var escolha_maquina_ingles = "paper"
    }
    
  console.log(escolha_maquina[numero_maquina])
  if(escolha_usuario==='tesoura' && escolha_maquina[numero_maquina]==='papel'){
    resultado.innerHTML = 'VOCÊ GANHOU'
//Adicionando na página o elemento escolhido pelo usuário
    caixa_escolha_usuario.innerHTML=` <span class="escolha">SUA ESCOLHA</span> 
    <div class="tesoura">
    <div class="parte-interna">
      <img src="images/icon-scissors.svg" alt=""> 
      <div class="circle1"> </div>
      <div class="circle2"> </div>
    </div>`
//Adicionando outros dois elementos não escolhidos pelo usuário para animação
    caixa_escolha_maquina.innerHTML=` <div class="papel" >
    <div class="parte-interna" >
      <img src="images/icon-paper.svg" alt="" >
    </div>
  </div>
  <div class="pedra" >
  <div class="parte-interna"  >
    <img src="images/icon-rock.svg" alt=""  >
  </div>
</div> `  
papel = document.getElementsByClassName(`papel`)[1]
pedra = document.getElementsByClassName(`pedra`)[1]
papel.style.position = 'absolute'
papel.style.top = '0'
papel.style.left = '0'
pedra.style.position = 'absolute'
pedra.style.top = '0'
pedra.style.left = '0'
papel.style.animation = 'move 0.4s linear forwards'
pedra.style.animation = 'move 0.4s linear forwards'   
 figura_usuario = document.getElementsByClassName(`${escolha_usuario}`)[1]
  figura_usuario.style.position = 'relative'
  figura_usuario.style.top = '0px'
  figura_usuario.style.left = '0px'

    // Mostrar o elemento escolhido pela máquina e se o usuário venceu ou não.
    setTimeout(() => {
    
      caixa_escolha_maquina.innerHTML=` <span class="escolha">MÁQUINA</span> 
      <div class="${escolha_maquina[numero_maquina]}">
      <div class="parte-interna">
        <img src="images/icon-${escolha_maquina_ingles}.svg" alt="">
      </div>`
        figura_maquina = document.getElementsByClassName(`${escolha_maquina[numero_maquina]}`)[1]
        circle1 = document.getElementsByClassName(`circle1`)[0]
        circle2 = document.getElementsByClassName(`circle2`)[0]

        figura_maquina.style.position = 'relative'
        figura_maquina.style.top = '0px'
        figura_maquina.style.left = '0px'
        caixa_escolha_maquina.style.animation = 'aparecer 0.8s linear forwards' 
        figura_maquina.style.animation = 'scale 0.8s linear forwards'
        figura_usuario.style.animation = 'scale 0.8s linear forwards' 
        caixa_referencia.style.display = 'none'
        caixa_resultado.style.opacity = '1'
        circle1.style.opacity = '1'
        circle2.style.opacity = '1'
         // Adicionando o placar
         if(resultado.innerHTML == "VOCÊ GANHOU"){
          var placar = Number(score.innerHTML) + 1
          score.innerHTML = placar
          console.log(placar)
      }
      }, 1000);
        
          setTimeout(() => {
            caixa_escolha_usuario.style.animation = 'usuario 0.5s linear forwards'
          }, 1);
 }else if(escolha_usuario==='tesoura' && escolha_maquina[numero_maquina]==='pedra'){

  resultado.innerHTML = 'VOCÊ PERDEU'
//Adicionando na página o elemento escolhido pelo usuário
caixa_escolha_usuario.innerHTML=` <span class="escolha">SUA ESCOLHA</span> 
<div class="tesoura">
<div class="parte-interna">
  <img src="images/icon-scissors.svg" alt=""> 
</div>`
//Adicionando outros dois elementos não escolhidos pelo usuário para animação
caixa_escolha_maquina.innerHTML=` <div class="papel" >
<div class="parte-interna" >
  <img src="images/icon-paper.svg" alt="" >
</div>
</div>
<div class="pedra" >
<div class="parte-interna"  >
<img src="images/icon-rock.svg" alt=""  >
</div>
</div> `  

papel = document.getElementsByClassName(`papel`)[1]
pedra = document.getElementsByClassName(`pedra`)[1]
papel.style.position = 'absolute'
papel.style.top = '0'
papel.style.left = '0'
pedra.style.position = 'absolute'
pedra.style.top = '0'
pedra.style.left = '0'
papel.style.animation = 'move 0.4s linear forwards'
pedra.style.animation = 'move 0.4s linear forwards'   
 figura_usuario = document.getElementsByClassName(`${escolha_usuario}`)[1]
  figura_usuario.style.position = 'relative'
  figura_usuario.style.top = '0px'
  figura_usuario.style.left = '0px'


 // Mostrar o elemento escolhido pela máquina e se o usuário venceu ou não.
 setTimeout(() => {
    
  caixa_escolha_maquina.innerHTML=` <span class="escolha">MÁQUINA</span> 
  <div class="${escolha_maquina[numero_maquina]}">
  <div class="parte-interna">
    <img src="images/icon-${escolha_maquina_ingles}.svg" alt="">
    <div class="circle1"> </div>
  <div class="circle2"> </div>
  </div>`
    figura_maquina = document.getElementsByClassName(`${escolha_maquina[numero_maquina]}`)[1]
    circle1 = document.getElementsByClassName(`circle1`)[0]
    circle2 = document.getElementsByClassName(`circle2`)[0]

    figura_maquina.style.position = 'relative'
    figura_maquina.style.top = '0px'
    figura_maquina.style.left = '0px'
    caixa_escolha_maquina.style.animation = 'aparecer 0.8s linear forwards' 
    figura_maquina.style.animation = 'scale 0.8s linear forwards'
    figura_usuario.style.animation = 'scale 0.8s linear forwards' 
    caixa_referencia.style.display = 'none'
    caixa_resultado.style.opacity = '1'
    circle1.style.opacity = '1'
    circle2.style.opacity = '1'
    if(resultado.innerHTML == "VOCÊ PERDEU"){
      console.log(score.innerHTML)
      if(Number(score.innerHTML)>0){
        var placar = Number(score.innerHTML) - 1
        score.innerHTML = placar
      }else{
      score.innerHTML = score.innerHTML
    }
        
    }
  }, 1000);

  setTimeout(() => {
    caixa_escolha_usuario.style.animation = 'usuario 0.5s linear forwards'
  }, 1);

 }

}
}

function recomecar(){
  caixa_game2.style.display = 'none'
  caixa_game.style.display = 'flex'
  painel_superior.style.marginBottom = '50px'
  caixa_referencia.style.display = 'flex'
  //caixa_escolha_usuario.style.left = '50px'
  caixa_escolha_maquina.style.animation = 'none'
  caixa_escolha_maquina.style.left = '0'
  caixa_resultado.style.opacity = '0'
}

