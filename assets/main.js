function criaCartao(tema,pergunta,resposta) {
   const conteiner  =  document.getElementById('conteiner');
   let cartao = document.createElement('article');
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

criaCartao('portugues','o que é uma paroxítona?','uma paroxítona é uma palavra cuja sílaba tônica é penúltima')
