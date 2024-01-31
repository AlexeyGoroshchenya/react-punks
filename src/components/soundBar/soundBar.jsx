import React, { useEffect, useRef } from 'react';
import styles from './soundBar.module.css'
import first from './sounds/first.m4a'
import second from './sounds/second.m4a'
import third from './sounds/third.m4a'


const SoundBar = ({sound, setSound, stage}) => {




const changeSound = ()=>{
    setSound(!sound)
}

    return (
        <div className={styles.body}>
            <div 
            className={styles.button}
            onClick={(e)=>{
                
                changeSound()
            }}
            style={sound?{ 
                backgroundImage: `url(${process.env.PUBLIC_URL}/icons/mute-${stage}.png)` 
              }:
              { 
                backgroundImage: `url(${process.env.PUBLIC_URL}/icons/unmute-${stage}.png)` 
              }
            }
            >
            </div>
        </div>
    );
};

export default SoundBar;