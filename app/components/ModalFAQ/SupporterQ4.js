import React from 'react';
import Accordion from './Accordion';
import Link from './Link';

function SupporterQ4() {
  const answer = (
    <span>
      Meu nome é Iorrah, eu moro em Berlim e sou apaixonado por bares, butecos,
      padarias, baladas, cafés e restaurantes locais onde moro. Inspirado pelo
      projeto <Link label="SaveOurFaves" href="https://saveourfaves.org" />{' '}
      criado em São Francisco nos EUA, eu decidi criar uma versão voltada para
      estabelecimentos do Brasil. Uma forma que eu encontrei de ajudar os meus
      lugares favoritos do meu bairro foi comprar vale-presentes pra quando eles
      abrirem de novo, eu poder voltar a tomar meus cafés favoritos ou comer o
      melhor sanduba da região. Salve a Quebrada é um projeto de código aberto e
      você pode clonar e criar o seu se quiser, é só clicar{' '}
      <Link label="aqui" href="https://github.com/iorrah/salve-a-quebrada" />.
    </span>
  );

  return (
    <Accordion
      question="Quem construiu esse site? E por quê?"
      answer={answer}
    />
  );
}

export default SupporterQ4;
