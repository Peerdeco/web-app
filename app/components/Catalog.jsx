import React, { Component } from 'react';
import { Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import _ from 'lodash';

import { data } from '../data.js';

const categories = {
  1: {
    category: 'Banken',
    subcategories: [
      'Hoekbanken',
      'Tweezitsbank',
      'Driezitsbank',
      'Chaise Longue',
      'Slaapbank',
      'Eetkamerbank'
    ]
  },
  2: {
    category: 'Stoelen',
    subcategories: [
      'Armstoelen',
      'Eetkamerstoelen',
      'Krukken',
      'Barkrukken',
      'Bureaustoelen',
      'Poefen'
    ]
  },
  3: {
    category: 'Tafels',
    subcategories: [
      'Salontafels',
      'Eetkamertafels',
      'Bartafels',
      'Bureaus',
      'Sidetable',
      'Bijzettafels'
    ]
  },
  4: {
    category: 'Bedden',
    subcategories: [
      'Bedden',
      'Boxsprings',
      'Bedbanken',
      'Hoogslapers',
      'Stapelbedden',
      'Kinderbedden'
    ]
  },
  5: {
    category: 'Kasten',
    subcategories: [
      'Ladekasten',
      'Schoenenkasten',
      'Opbergkasten',
      'Boekenkasten',
      'Vitrinekasten',
      'Wandkasten',
      'Buffetkasten',
      'Tv Meubels',
      'Dressiors'
    ]
  },
  6: {
    category: 'Verlichting',
    subcategories: [
      'Kroonluchters',
      'Hanglampen',
      'Plafondlampen',
      'Tafellampen',
      'Wandlampen',
      'Vloerlampen',
      'Spots',
      'Inbouwlampen'
    ]
  },
  7: {
    category: 'Decoratie',
    subcategories: [
      'Vloerkleden',
      'Kapstokken',
      'Krantenbakken',
      'Spiegels',
      'Boekenplanken',
      'Opbergen',
      'Woonkussen'
    ]
  },
  8: {
    category: 'Kindermeubilair',
    subcategories: [
      'Bedden',
      'Boxen',
      'Commodes',
      'Kasten',
      'Kinderstoelen',
      'Stapelbedden'
    ]
  }
};

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {show: ''};
  }

  handleMouseOver(e) {
    this.setState({show: e.target.id});
  }

  handleOnClick(e) {
    if (this.state.show) {
      this.setState({show: ''});
    } else {
      this.setState({show: e.target.id});
    }
  }

  renderCategories() {
    return _.map(categories, ({category, subcategories}, i) => {
      return (
        <LinkContainer key={i} to={{pathname: `/shop/${category}`}}>
          <NavDropdown
            className='catalog-category'
            title={category}
            id={category}
            onMouseOver={this.handleMouseOver.bind(this)}
            onClick={this.handleOnClick.bind(this)}
            onToggle={() => {}}
            open={this.state.show === category}
            noCaret>
            {this.renderSubcategories(subcategories)}
          </NavDropdown>
        </LinkContainer>
      );
    });
  }

  renderSubcategories(subcategories) {
    return _.map(subcategories, (subcategory, i) => {
      return (
        <LinkContainer key={i} to={{pathname: `/shop/${subcategory}`}}>
          <MenuItem
            className='catalog-subcategory'
            onClick={this.handleOnClick.bind(this)}
            eventKey={subcategory}>
            {subcategory}
          </MenuItem>
        </LinkContainer>
      );
    });
  }

  render() {
    console.log(data);
    return (
      <div className='container catalog'>
        <Nav bsStyle='tabs' justified>
          <LinkContainer to={{pathname: '/shop/Nieuw'}}>
            <NavItem className='catalog-category' title='Nieuw'>Nieuw</NavItem>
          </LinkContainer>
          {this.renderCategories()}
        </Nav>
      </div>
    );
  }
}

export default Catalog;