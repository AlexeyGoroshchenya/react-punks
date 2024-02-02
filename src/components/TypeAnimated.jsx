import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeAnimated = ({sequence, speed}) => {

    
    return (
        <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={speed}
      style={{display: 'inline-block' }}
      repeat={3}
      cursor={false}
    />
    );
};

export default TypeAnimated;