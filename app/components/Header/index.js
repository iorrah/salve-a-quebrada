import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'styles.scss';

import Button from 'components/Button';

import Container from './Container';
import Carousel from './Carousel';
import NavBar from './NavBar';
import HeaderElement from './HeaderElement';
import HeaderLink from './HeaderLink';
import Logo from './Logo';
import Hero from './Hero';
import Content from './Content';
import Title from './Title';
import SubTitle from './SubTitle';
import InputWrapper from './InputWrapper';
import NoWrap from './NoWrap';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
    };

    this.getSuggestions = this.getSuggestions.bind(this);
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const { stores } = this.props;

    if (inputLength === 0) {
      return [];
    }

    return stores.filter(
      lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue,
    );
  };

  getSuggestionValue = suggestion => suggestion.name;

  renderSuggestion = suggestion => <div>{suggestion.name}</div>;

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Busque por lugares que você ama',
      value,
      onChange: this.onChange,
      className: 'auto-complete__input',
    };

    return (
      <HeaderElement>
        <Carousel />

        <NavBar>
          <Container className="container">
            <Logo to="/">Salve a Quebrada</Logo>

            <div>
              <HeaderLink to="/">Como funciona?</HeaderLink>
              <Button onClick={this.props.handleClick}>Adicionar Local</Button>
            </div>
          </Container>
        </NavBar>

        <Hero>
          <Content>
            <Title>
              Seu lugar favorito na cidade pode fechar pra sempre. Ajude a
              salvá-lo.
            </Title>

            <SubTitle>
              Doe um vale-presente pra impedir demissões e falências{' '}
              <NoWrap>causadas pelo COVID-19</NoWrap>
            </SubTitle>

            <InputWrapper>
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
              />
            </InputWrapper>
          </Content>
        </Hero>
      </HeaderElement>
    );
  }
}

Header.defaultProps = {
  stores: [],
};

Header.propTypes = {
  handleClick: PropTypes.func,
  stores: PropTypes.array,
};

export default Header;
