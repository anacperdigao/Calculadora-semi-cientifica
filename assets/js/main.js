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
        
        if(Number.isInteger(conta)){
            document.querySelector(".resultado-aproximado").value = String(conta);
        }else{
            document.querySelector(".resultado-aproximado").value = String(conta.toFixed(1));
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
            let conta = this.display.value;
            document.querySelector(".resultado-grande").value = conta*conta;
            this.display.focus();
          }

          if(el.classList.contains('cubo')){
            let conta = this.display.value;
            document.querySelector(".resultado-grande").value = conta*conta*conta;
            this.display.focus();
          }

          if(el.classList.contains('raiz-quadrada')){
            let conta = this.display.value;
            document.querySelector(".resultado-grande").value = Math.sqrt(conta);
            this.display.focus();
          }

          if(el.classList.contains('raiz-cubica')){
            let conta = this.display.value;
            document.querySelector(".resultado-grande").value = Math.cbrt(conta);
            this.display.focus();
          }
  
          if(el.classList.contains('seno')){
            let conta = this.display.value;
            document.querySelector(".resultado-grande").value = `${Math.sin(conta)} rad.`;
            this.display.focus();
          }

          if(el.classList.contains('ln')){
            let conta = this.display.value;
            document.querySelector(".resultado-grande").value = Math.log(conta);
            this.display.focus();
          }

          if(el.classList.contains('coseno')){
            let conta = this.display.value;
            document.querySelector(".resultado-grande").value = `${Math.cos(conta)} rad.`;
            this.display.focus();
          }

          if(el.classList.contains('fatorial')){
            let conta = this.display.value;
            document.querySelector(".resultado-grande").value = fazFatorial(conta);
            this.display.focus();
            
                function fazFatorial(conta){
                    let fat = 1
                    for(let c = conta; c > 1; c--){
                        fat *= c;
                    }
                    return fat
                }
            }

          if(el.classList.contains('tangente')){
            let conta = this.display.value;
            document.querySelector(".resultado-grande").value = `${Math.tan(conta)} rad.`;
            this.display.focus();
          }

          if(el.classList.contains('pi')){
            let conta = this.display.value;
            document.querySelector(".resultado-grande").value = conta * 3.14159265359;
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

        }.bind(this));
      },
      btnParaDisplay(valor){
        this.display.value += valor;
      },
  
    };
  }
  
  const calculadora = criaCalculadora();
  calculadora.inicia();