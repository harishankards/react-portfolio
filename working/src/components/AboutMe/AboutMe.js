import React,{Component} from 'react';
import {Container} from '../../theme/grid';
import {Title} from './AboutMe.style'

class AboutMe extends Component{
  render(){
    return(
      <Container>
        <Title>  About me!</Title>
        <h2>Hey dudes! Do you watch movies? Duck yeah I do!</h2>
      </Container>
    );
  }
}

export default AboutMe;
