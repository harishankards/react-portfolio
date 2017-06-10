import React, {Component} from 'react';
import Zoomy from 'react-zoomy';

import {ImageButton, Index, ImageContainer} from './Projects.style';
import {Container, Relative, Flex} from '../../theme/grid';
import {A} from '../../theme/types';
import ParallaxImage from 'react-image-parallax2';

class Projects extends Component{
  render(){
    return(
      <Container>
        <Relative marginBottom="100px">
          <Index>
              <h1>01</h1>
          </Index>
          <h1>My first <A href=""> project</A></h1>

        </Relative>

        <Flex justify={'center'}>
          <Zoomy
              imageUrl={require('../../assets/hero.png')}
              renderThumbnail={({ showImage }) =>
               <ImageButton onClick={showImage}>
                   <img
                      src={require('../../assets/hero_thumbnail.png')}
                   alt="Hero" />
               </ImageButton>
             }
              scale={[1.1, 1.1]}
              imageProps={{
              style: {
                width: '100vw',
                height: 'auto'
              }
              }}
              />
        </Flex>
        <Relative marginBottom="100px">
          <Index>
              <h1>02</h1>
          </Index>
          <h1>My second <A href=""> project</A></h1>

        </Relative>
        <ImageContainer>
          <ParallaxImage
            reduceHeight={1/3}
            src={require('../../assets/hero2.png')}/>    
        </ImageContainer>
      </Container>
    );
  }
}

export default Projects;
