import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Main.css';

import noSignal from './backgrounds/noSignal.mp4'
import VHS from './backgrounds/VHS.mp4'



import { useIdleTimer } from 'react-idle-timer/legacy'

import Header from '../header/header';
import IdleContent from '../IdleContent';
import ActivityContent from '../ActivityContent';
import Audio from '../Audio/Audio';
import SoundBar from '../soundBar/soundBar';



const Main = () => {

    const audioRef = useRef()
    let timer_1Ref = useRef()
    let timer_2Ref = useRef()

    const [stage, setStage] = useState(1)
    const [sound, setSound] = useState(false)
    const [idleStage, setIdleStage] = useState(1)
    const [activity, setActivity] = useState(true)

    const timeout = 60000 + 4000*Math.random()

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

    const changeSlideFromAnimation = (num) => {
        setActivity(false)
        idleFinish(num)
    }

    const idleFinish = useCallback((num = stage + 1)=>{
            changeSlide(num)
            setIdleStage(1)
            timer_2Ref.current = setTimeout(()=>{
                setActivity(true)
                activate()   
                clearTimeout(timer_2Ref.current)
            }, 2000)


    })

    const goSecondIdleStages = useCallback(()=>{
            timer_1Ref.current = setTimeout(()=>{
                setIdleStage(2)
                clearTimeout(timer_1Ref.current)
            }, 2000 + 2000*Math.random())
    })

    const onIdle = () => {
        setActivity(false)
        goSecondIdleStages()
    }


    // more details about the library here https://idletimer.dev/docs/api/methods
    const {activate} = useIdleTimer({
            onIdle,
            timeout: timeout,
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

    console.log(timeout);

    return (
        <div className={
            activity?
                stage === 1 ? 'main main_1': stage === 2 ? 'main main_2' : 'main main_3'
                :
                idleStage === 1 ? 'idle idle_1' : 'idle idle_2'
        }>

            <Header stage={stage} />

            <div className={stage === 1 ? 'coral arrow go-prev-slide' : stage === 2 ? 'green arrow go-prev-slide' : 'purple arrow go-prev-slide'}
            style={stage === 1 ? { display: 'none' }: {}}
            onClick={()=>{changeSlideFromAnimation(stage-1)}}
            >
                <svg viewBox="0 0 40 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.8" d="M23.0302 1.0162C23.6903 0.566216 24.7604 0.566216 25.4205 1.0162L39.505 10.6183C40.165 11.0683 40.165 11.7978 39.505 12.2478L25.4205 21.8499C24.7604 22.2999 23.6903 22.2999 23.0302 21.8499C22.3702 21.3999 22.3702 20.6703 23.0302 20.2204L34.2295 12.5853H1.69014C0.756702 12.5853 0 12.0694 0 11.433C0 10.7967 0.756702 10.2808 1.69014 10.2808H34.2295L23.0302 2.64572C22.3702 2.19574 22.3702 1.46618 23.0302 1.0162Z" />
                </svg>
            </div>
            <div className={stage === 1 ? 'coral arrow go-next-slide' : stage === 2 ? 'green arrow go-next-slide' : 'purple arrow go-next-slide'}
            style={stage === 3 ? { display: 'none' }: {}}
            onClick={()=>{changeSlideFromAnimation(stage+1)}}
            >
                <svg viewBox="0 0 40 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.8" d="M23.0302 1.0162C23.6903 0.566216 24.7604 0.566216 25.4205 1.0162L39.505 10.6183C40.165 11.0683 40.165 11.7978 39.505 12.2478L25.4205 21.8499C24.7604 22.2999 23.6903 22.2999 23.0302 21.8499C22.3702 21.3999 22.3702 20.6703 23.0302 20.2204L34.2295 12.5853H1.69014C0.756702 12.5853 0 12.0694 0 11.433C0 10.7967 0.756702 10.2808 1.69014 10.2808H34.2295L23.0302 2.64572C22.3702 2.19574 22.3702 1.46618 23.0302 1.0162Z" />
                </svg>
            </div>
                
            <main className='wrapper'>  
            {activity?

                    <ActivityContent stage={stage} changeSlide={changeSlide}/>
                    :
                    <IdleContent stage={stage} idleStage={idleStage} videoSrc={noSignal} idleFinish={idleFinish}/>
                    }
            </main>

            <SoundBar sound={sound} setSound={setSound} stage={stage} />
            

           <Audio activity={activity} stage={stage} idleStage={idleStage} audioRef={audioRef}/>
            
            

        </div>
    );
};

export default Main;