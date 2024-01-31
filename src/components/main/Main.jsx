import React, { useEffect, useState } from 'react';
import './Main.css';

import noSignal from './backgrounds/noSignal.mp4'
import VHS from './backgrounds/VHS.mp4'

import { useIdleTimer } from 'react-idle-timer/legacy'

import Header from '../header/header';
import IdleContent from '../IdleContent';
import ActivityContent from '../ActivityContent';



const Main = () => {




    const [stage, setStage] = useState(1)
    const [sound, setSound] = useState(true)
    const [idleStage, setIdleStage] = useState(1)
    const [activity, setActivity] = useState(true)

    const timeout = 5000 + 3000*Math.random()

    const onIdle = () => {
        setActivity(false)
        
        setTimeout(()=>{
            setIdleStage(2)
            
            setTimeout(()=>{
                changeSlide(stage + 1)
            setActivity(true)
            setIdleStage(1)
            
        }, timeout)
        }, timeout)
    }

    const onActive = () => {
        setActivity(true)
        setIdleStage(1)
    }


    const changeSlide = (num) => {
        if (num < stage) {
            if (num > 0) {
                setStage(num)
            } else { setStage(3) }
        } else {
            if (num <= 3) {
                setStage(num)
            } else { setStage(1) }
        }
    }

    useIdleTimer({
            onIdle,
            onActive,
            timeout: 3000,
            throttle: 500,
      })





    return (
        <div className={
            activity?
                stage === 1 ? 'main main_1': stage === 2 ? 'main main_2' : 'main main_3'
                :
                idleStage === 1 ? 'main idle idle_1' : 'main idle idle_2'
        }>

            <Header stage={stage} />
            {activity?
            <ActivityContent sound={sound} setSound={setSound} stage={stage} changeSlide={changeSlide}/>
            :
            <IdleContent stage={stage} idleStage={idleStage} videoSrc={VHS}/>
            }
            


        </div>
    );
};

export default Main;