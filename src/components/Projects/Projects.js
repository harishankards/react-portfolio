import React, {Component} from 'react';
import Zoomy from 'react-zoomy';

class Projects extends Component{
  render(){
    return(
      <div>
      <Zoomy
          imageUrl={require('../../assets/hero.png')}
          renderThumbnail={({ showImage }) => <button onClick={showImage}>Show Image</button>}
          scale={[1.1, 1.1]}
          imageProps={{
          style: {
            width: '100vw',
            height: 'auto'
          }
          }}
          />
      </div>
    );
  }
}

export default Projects;
