import React from 'react';
import PropTypes from 'prop-types';

import storeFront from 'images/store-front.png';

import Button from 'components/Button';

import Container from './Container';
import Content from './Content';
import Img from './Img';
import Details from './Details';
import H3 from './H3';
import P from './P';

function Store(props) {
  const { store } = props;

  return (
    <Container className="col-md-6 col-lg-4">
      <Content>
        <Img src={storeFront} alt="Foto do Restaurante" />

        <Details>
          <H3>{store.name}</H3>

          <div className="mb-3">
            <P>
              {store.rua}, {store.numero}
            </P>

            <P>
              {store.bairro}, {store.cidade} - {store.estado}
            </P>
          </div>

          <Button type="hollow" onClick={() => {}}>
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
