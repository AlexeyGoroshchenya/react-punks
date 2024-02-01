import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Main.css';

import noSignal from './backgrounds/noSignal.mp4'
import VHS from './backgrounds/VHS.mp4'



import { useIdleTimer } from 'react-idle-timer/legacy'

import Header from '../header/header';
import IdleContent from '../IdleContent';
import ActivityContent from '../ActivityContent';
import Audio from '../Audio/Audio';



const Main = () => {

    const audioRef = useRef()
    let timer_1Ref = useRef()
    let timer_2Ref = useRef()

    const [stage, setStage] = useState(1)
    const [sound, setSound] = useState(false)
    const [idleStage, setIdleStage] = useState(1)
    const [activity, setActivity] = useState(true)

    const timeout = 3000 + 3000*Math.random()

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

    const idleFinish = ()=>{
            changeSlide(stage + 1)
            setActivity(true)
            setIdleStage(1)
            clearTimeout(timer_1Ref.current)
            clearTimeout(timer_2Ref.current)
            activate()
    }

    const onIdle = useCallback(() => {
        setActivity(false)
        

        timer_1Ref.current = setTimeout(()=>{
            setIdleStage(2)
        }, timeout)

            timer_2Ref.current = setTimeout(()=>{
                idleFinish()
            }, timeout*2)

    })

    //if you need to let the user interrupt the animation and return to the slides,
    // this is included here. more details about the library here https://idletimer.dev/docs/api/methods
    // const onActive = useCallback(() => {
        // idleFinish()
    // })
    
    const {activate} = useIdleTimer({
            onIdle,
            // onActive,
            timeout: 6000,
            throttle: 500,
            startOnMount: true,
      })


    useEffect(()=>{

        if(sound) {
            audioRef.current.play()
        } else{
            audioRef.current.pause()
        }


    }, [sound, stage, idleStage, activity])


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
            <IdleContent stage={stage} idleStage={idleStage} videoSrc={noSignal}/>
            }

           <Audio activity={activity} stage={stage} idleStage={idleStage} audioRef={audioRef}/>
            
            

        </div>
    );
};

export default Main;