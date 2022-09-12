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
        document.querySelector(".resultado-grande").value="";
        document.querySelector(".resultado-aproximado").value="";
        document.querySelector(".calculo-memoria").value=""
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
        
        document.querySelector(".resultado-grande").value = conta;
        this.aproximaResultado(conta);
      },

      aproximaResultado(conta){

        if(Number.isInteger(conta)){
            document.querySelector(".resultado-aproximado").value = conta;
        }else{
            document.querySelector(".resultado-aproximado").value = conta.toFixed(1);
        }
      },

      cliqueBotoes(){
        document.addEventListener('click',function(e){
          const el = e.target;
          
          if(el.classList.contains('botao-num')){
            this.btnParaDisplay(el.innerText);
            this.display.focus();
          }

          if(el.classList.contains('quadrado')){
            let valor = this.display.value;
            let conta = valor*valor
            document.querySelector(".resultado-grande").value = conta;
            this.aproximaResultado(conta);
            this.display.focus();
          }

          if(el.classList.contains('cubo')){
            let valor = this.display.value;
            let conta = valor*valor*valor;
            document.querySelector(".resultado-grande").value = conta;
            this.aproximaResultado(conta);
            this.display.focus();
          }

          if(el.classList.contains('raiz-quadrada')){
            let valor = this.display.value;
            let conta = Math.sqrt(valor);
            document.querySelector(".resultado-grande").value = conta;
            this.aproximaResultado(conta);
            this.display.focus();
          }

          if(el.classList.contains('raiz-cubica')){
            let valor = this.display.value;
            let conta = Math.cbrt(valor)
            document.querySelector(".resultado-grande").value = conta;
            this.aproximaResultado(conta);
            this.display.focus();
          }
  
          if(el.classList.contains('seno')){
            let valor = this.display.value;
            let conta = Math.sin(valor);
            document.querySelector(".resultado-grande").value = conta;
            this.aproximaResultado(conta);
            this.display.focus();
          }

          if(el.classList.contains('ln')){
            let valor = this.display.value;
            let conta = Math.log(valor);
            document.querySelector(".resultado-grande").value = conta;
            this.aproximaResultado(conta);
            this.display.focus();
          }

          if(el.classList.contains('coseno')){
            let valor = this.display.value;
            let conta = Math.cos(valor);
            document.querySelector(".resultado-grande").value = conta;
            this.aproximaResultado(conta);
            this.display.focus();
          }

          if(el.classList.contains('fatorial')){
            let valor = this.display.value;
            let conta = fazFatorial(valor);
            document.querySelector(".resultado-grande").value = conta;
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
            let valor = this.display.value;
            let conta = Math.tan(valor);
            document.querySelector(".resultado-grande").value = conta;
            this.aproximaResultado(conta);
            this.display.focus();
          }

          if(el.classList.contains('pi')){
            let valor = this.display.value;
            let conta = valor * 3.14159265359;
            document.querySelector(".resultado-grande").value = conta;
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
            document.querySelector(".calculo-memoria").value = this.display.value
            this.display.value = document.querySelector(".resultado-grande").value
            document.querySelector(".resultado-grande").value = ""
            document.querySelector(".resultado-aproximado").value = ""
            
          }

        }.bind(this));
      },

      btnParaDisplay(valor){
        this.display.value += valor;
      }, 
    };
  }
  
  const calculadora = criaCalculadora();
  calculadora.inicia();