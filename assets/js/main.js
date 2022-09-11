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
        this.display.value=' ';
        document.querySelector(".resultado-grande").value=' ';
        //document.querySelector(".conta-atual").placeholder = 'Digite aqui seu cálculo';
        //document.querySelector(".resultado-grande").placeholder="Resultado";
        document.querySelector(".resultado-aproximado").innerHTML="Aprox.";

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
  
          document.querySelector(".resultado-grande").value = conta;
          document.querySelector(".resultado-aproximado").innerHTML = conta.toFixed(1);

        }catch(e){
          alert('Conta inválida');
          return;
        }
      },
      cliqueBotoes(){
        document.addEventListener('click',function(e){
          const el = e.target;
          if(el.classList.contains('botao-num')){
            this.btnParaDisplay(el.innerText);
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