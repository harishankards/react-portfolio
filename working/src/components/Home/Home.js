import React, {Component, PropTypes} from 'react';
import {Container} from '../../theme/grid';
import {Image, HeroImage, RevealP} from './Home.style';


export default class Home extends Component {
  static propTypes = {};



  render(){
    return(
      <Container>
        <HeroImage>
          <h1>HS</h1>
          <h2>React developer</h2>
        </HeroImage>
        {/*<Image src={require('../assets/hero.jpg')} alt = "octodex-image" />*/}
        <RevealP >
          Hi Guys! This is HS. Just a random blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          guy in the world and also in the internet
        </RevealP>

      </Container>
    );
  }


}
