import React from 'react';
import Accordion from './Accordion';
import Link from './Link';

function LocalQ2() {
  const answer = (
    <span>
      O primeiro passo é verificar o seu provedor de loja online. Muitos
      oferecem seus próprios recursos de cartão-presente (por exemplo,
      Wordpress, Magento, Wix, etc.) e outros se integram a fornecedores
      específicos de terceiros. Se o seu provedor de loja online não oferecer
      cartões-presente ou integrar-se a terceiros, considere plataformas de
      crowdfunding como <Link label="Catarse" href="https://www.catarse.me" />,{' '}
      <Link label="Benfeitoria" href="https://benfeitoria.com" /> e{' '}
      <Link label="Apoia-se" href="https://apoia.se" />.
    </span>
  );

  return (
    <Accordion
      question="Como posso começar a oferecer cartões-presente on-line?"
      answer={answer}
    />
  );
}

export default LocalQ2;
