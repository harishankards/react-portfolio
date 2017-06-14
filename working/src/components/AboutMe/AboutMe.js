import React,{Component} from 'react';
import {Container,Flex} from '../../theme/grid';
import {Title} from './AboutMe.style';
import {H2,P} from '../../theme/types';


class AboutMe extends Component{
  render(){
    return(
      <Container>
        <Title>  About me!</Title>
        <H2 align="left">Hey dudes! Do you watch movies? Duck yeah I do!</H2>
        <Flex>
          <P align="right">Do you wanna build a snowman?</P>
        </Flex>
      </Container>
    );
  }
}

export default AboutMe;
