function criaCartao(tema,pergunta,resposta) {
   const conteiner=  document.getElementById('container');
   let cartao =document.createElement('article');
   cartao.className='cartao';
   cartao.innerHTML=    `
   <div class="cartao-conteudo">
                    <h3> ${tema} </h3>
                    <div class="cartao-conteudo-pergunta">
                        ${pergunta}
                    </div>
                    <div class="cartao-conteudo-resposta">
                        ${resposta}
                    </div>
                    </div>


   `
conteiner.appendChild(cartao) 
}

criaCartao('históra','em que ano inicio-se a guerra do vietnã?','em 1955')
criaCartao('Português','o que e uma paroxitona?', 'uma paroxitona e uma palavra cuja silaba tonica é a penultima')
