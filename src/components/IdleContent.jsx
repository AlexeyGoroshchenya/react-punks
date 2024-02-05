import React from 'react';
import './main/Main.css';
import TypeAnimated from './TypeAnimated';

const IdleContent = ({ stage, idleStage, videoSrc, idleFinish }) => {
    return (
        <>
            <video className='video' autoPlay controls loop muted src={videoSrc} type="video/mp4"></video>

            <div className='titlebox'>
                <div className='title'>
                    <p>
                        {idleStage === 1 ? 'signal lost.' : 'BlastPunks.'}
                    </p>

                    <div className={stage === 1 ? 'coral title-color' : stage === 2 ? 'green title-color' : 'purple title-color'}>
                        {idleStage === 1 ?
                            <p> reconnecting<TypeAnimated sequence={[".", 300, "..", 300, "...", 300]} speed={40} /></p> 
                            :
                            <p >Wake up now.</p>
                        }
                    </div>
                </div>
                {idleStage === 1 ?

                    <div className='notice '>
                        <TypeAnimated sequence ={[`XZ4!9*&#fr@tZL -- 01001100 01101111 01110011 11100001ng S!gn@L -- 
                          ທາດ01101101 01100001 01110100 01110010 01101001 01111000-- -- ɹoɹɹıW, ɹoɹɹıW, oɥW?`]}
                        speed={90}
                        />
                        
                    </div>
                    :
                    <>
                        <div className='notice'>
                            OR NEVER</div>
                        <div className='escape'
                            onClick={() => { idleFinish(stage + 1) }}
                        >
                            <a href='#'>Wake up
                            </a>
                        </div>
                    </>
                }
            </div>
        </>
    );
};

export default IdleContent;