import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MagnifyingImage from 'images/magnifying.svg';
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
import Bold from './Bold';
import MagnifyingIcon from './MagnifyingIcon';

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

  onSuggestionSelected = (event, extra) => {
    this.props.handleSelectStore(extra.suggestion);
  };

  cleanSearch = search => {
    if (search && search.length) {
      return search.trim().toLowerCase();
    }

    return '';
  };

  searchInSuggestions = search => store => {
    const decomposed = this.cleanSearch(store.name);
    const stringMatches = decomposed === search;
    const stringContains = decomposed.indexOf(search) >= 0;
    return stringMatches || stringContains;
  };

  getSuggestions = value => {
    const search = this.cleanSearch(value);
    const { stores } = this.props;
    return stores.filter(this.searchInSuggestions(search));
  };

  getSuggestions = value => {
    const search = this.cleanSearch(value);
    const { stores } = this.props;

    return stores.filter(store => {
      const decomposed = this.cleanSearch(store.name);
      const stringMatches = decomposed === search;
      const stringContains = decomposed.indexOf(search) >= 0;
      return stringMatches || stringContains;
    });
  };

  getSuggestionValue = suggestion => suggestion.name;

  renderSuggestion = suggestion => <div>{suggestion.name}</div>;

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Busque por lugares que você ama',
      value,
      onChange: this.onChange,
      className: 'react-autosuggest__input',
    };

    return (
      <HeaderElement>
        <Carousel />

        <NavBar>
          <Container className="container">
            <Logo to="/">Salve a Quebrada</Logo>

            <div>
              <HeaderLink onClick={this.props.handleClickFAQ}>
                Como funciona?
              </HeaderLink>
              <Button onClick={this.props.handleClick}>Adicionar Local</Button>
            </div>
          </Container>
        </NavBar>

        <Hero>
          <Content>
            <Title>
              Seu lugar favorito na cidade pode fechar pra sempre. Ajude a
              salvá-lo!
            </Title>

            <SubTitle>
              Doe um vale-presente pra impedir demissões e falências de bares,
              botecos, padarias, baladas, cafés e restaurantes da sua quebrada
              por conta do{' '}
              <NoWrap>
                <Bold>COVID-19</Bold>
              </NoWrap>
            </SubTitle>

            <InputWrapper>
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
                onSuggestionSelected={this.onSuggestionSelected}
              />

              <MagnifyingIcon src={MagnifyingImage} />
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
  handleSelectStore: PropTypes.func,
  handleClickFAQ: PropTypes.func,
  stores: PropTypes.array,
};

export default Header;
