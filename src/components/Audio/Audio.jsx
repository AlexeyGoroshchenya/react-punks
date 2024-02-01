import React from 'react';
import '../main/Main.css';

import first from './sounds/first.m4a'
import second from './sounds/second.m4a'
import third from './sounds/third.m4a'
import idleFirst from './sounds/idleFirst.m4a'
import idleSecond from './sounds/idleSecond.wav'

const Audio = ({activity, stage, idleStage, audioRef}) => {
    return (
        <>
            {
            activity?
            <audio ref={audioRef} preload="auto" src={
                stage === 1 ? first: stage === 2 ? second : third
            }></audio>
            :
            <audio ref={audioRef} preload="auto" src={
                idleStage === 1 ? idleFirst : idleSecond
            }></audio>  
            }
        </>
    );
};

export default Audio;