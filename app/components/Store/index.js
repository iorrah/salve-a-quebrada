import React from 'react';
import PropTypes from 'prop-types';

import placeholder from 'images/placeholder.jpg';

import Button from 'components/Button';

import Container from './Container';
import Content from './Content';
import ImgWrapper from './ImgWrapper';
import Background from './Background';
import Img from './Img';
import Details from './Details';
import H3 from './H3';
import P from './P';

function Store(props) {
  const { store } = props;
  let href = placeholder;

  if (store.image !== '' && store.image !== undefined) {
    href = store.image;
  }

  return (
    <Container className="col-md-6 col-lg-4">
      <Content>
        <ImgWrapper>
          <Background src={href} alt="Imagem de fundo" />
          <Img src={href} alt="Foto do Restaurante" />
        </ImgWrapper>

        <Details>
          <H3>{store.name}</H3>

          <div className="mb-3">
            <P>{store.address}</P>
          </div>

          <Button type="hollow" target="_blank" href={store.donation}>
            Abrir Doações
          </Button>
        </Details>
      </Content>
    </Container>
  );
}

Store.propTypes = {
  store: PropTypes.object,
};

export default Store;
