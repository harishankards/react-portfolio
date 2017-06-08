import React, {Component, PropTypes} from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/Container';

const Image = styled.img`
  width: 100%;
`;

export default class Home extends Component {
  static propTypes = {};

  render(){
    return(
      <Container>
        <h1> Hi! Home </h1>
        <Image src={require('../assets/hero.jpg')} alt = "octodex-image" />
        <p> Hi Guys! This is HS. Just a random blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
            guy in the world and also in the internet
        </p>
      </Container>
    );
  }


}
