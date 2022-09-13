function criaCalculadora() {
    return {
      
      display: document.querySelector('.conta-atual'),
      
      inicia(){
        this.cliqueBotoes();
        this.pressionaEnter();
      },

      pressionaEnter(){
          this.display.addEventListener('keyup', (e)=>{
          if(e.keyCode === 13){
            this.realizaConta();
          }
        })
      },

      clearDisplay(){
        this.display.value="";
        document.querySelector(".resultado-grande").innerHTML="Resultado";
        document.querySelector(".resultado-aproximado").innerHTML="Aprox.";
        document.querySelector(".calculo-memoria").innerHTML="Cálculo anterior"
      },

      apagaUm(){
        this.display.value = this.display.value.slice(0, -1);
      },

      realizaConta(){
        let conta = this.display.value;

        try{
          conta = eval(conta);
  
          if(!conta){
            alert('Conta inválida');
            return;
          }

        }catch(e){
          alert('Conta inválida');
          return;
        }
        
        document.querySelector(".resultado-grande").innerHTML = conta;
        this.aproximaResultado(conta);
      },

      aproximaResultado(conta){

        if(Number.isInteger(conta)){
            document.querySelector(".resultado-aproximado").innerHTML = conta;
        }else{
            document.querySelector(".resultado-aproximado").innerHTML = conta.toFixed(1);
        }
      },

      cliqueBotoes(){
        document.addEventListener('click',(e) => {
          const el = e.target;
          let valor = this.display.value;
          
          
          if(el.classList.contains('botao-num')){
            this.btnParaDisplay(el.innerText);
            this.display.focus();
          }

          if(el.classList.contains('quadrado')){
            let conta = valor*valor
            this.display.value = `${this.display.value}²`;
            document.querySelector(".resultado-grande").innerHTML = conta;
            this.aproximaResultado(conta);
            this.display.focus();
          }

          if(el.classList.contains('cubo')){
            let conta = valor*valor*valor;
            this.display.value = `${this.display.value}³`;
            document.querySelector(".resultado-grande").innerHTML = conta;
            this.aproximaResultado(conta);
            this.display.focus();
          }

          if(el.classList.contains('raiz-quadrada')){
            let conta = Math.sqrt(valor);
            this.display.value = `√${this.display.value}`;
            document.querySelector(".resultado-grande").innerHTML = conta;
            this.aproximaResultado(conta);
            this.display.focus();
          }

          if(el.classList.contains('raiz-cubica')){
            let conta = Math.cbrt(valor)
            this.display.value = `∛${this.display.value}`;
            document.querySelector(".resultado-grande").innerHTML = conta;
            this.aproximaResultado(conta);
            this.display.focus();
          }
  
          if(el.classList.contains('seno')){
            let conta = Math.sin(valor);
            this.display.value = `sen ${this.display.value}`;
            document.querySelector(".resultado-grande").innerHTML = conta;
            this.aproximaResultado(conta);
            this.display.focus();
          }

          if(el.classList.contains('ln')){
            let conta = Math.log(valor);
            this.display.value = `ln ${this.display.value}`;
            document.querySelector(".resultado-grande").innerHTML = conta;
            this.aproximaResultado(conta);
            this.display.focus();
          }

          if(el.classList.contains('coseno')){
            let conta = Math.cos(valor);
            this.display.value = `cos ${this.display.value}`;
            document.querySelector(".resultado-grande").innerHTML = conta;
            this.aproximaResultado(conta);
            this.display.focus();
          }

          if(el.classList.contains('fatorial')){
            let conta = fazFatorial(valor);
            this.display.value = `${this.display.value}!`;
            document.querySelector(".resultado-grande").innerHTML = conta;
            this.aproximaResultado(conta);
            this.display.focus();
            
                function fazFatorial(valor){
                    let fat = 1
                    for(let c = valor; c > 1; c--){
                        fat *= c;
                    }
                    return fat
                }
            }

          if(el.classList.contains('tangente')){
            let conta = Math.tan(valor);
            this.display.value = `tan ${this.display.value}`;
            document.querySelector(".resultado-grande").innerHTML = conta;
            this.aproximaResultado(conta);
            this.display.focus();
          }

          if(el.classList.contains('pi')){
            let conta = valor * 3.14159265359;
            document.querySelector(".resultado-grande").innerHTML = conta;
            this.display.value = `${this.display.value} π`;
            this.aproximaResultado(conta);
            this.display.focus();
          }

          if(el.classList.contains('botao-clear')){
            this.clearDisplay();
          }
  
          if(el.classList.contains('botao-del')){
            this.apagaUm();
          }
  
          if(el.classList.contains('botao-eq')){
            this.realizaConta();
          }

          if(el.classList.contains('seta-up')){
            document.querySelector(".calculo-memoria").innerHTML = this.display.value
            this.display.value = document.querySelector(".resultado-grande").innerHTML
            document.querySelector(".resultado-grande").innerHTML = "Resultado"
            document.querySelector(".resultado-aproximado").innerHTML = "Aprox." 
          }
        });
      },

      btnParaDisplay(valor){
        this.display.value += valor;
      },

    };
  }
  
  const calculadora = criaCalculadora();
  calculadora.inicia();