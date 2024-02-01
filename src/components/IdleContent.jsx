import React from 'react';
import './main/Main.css';

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
                            <p className='dots'> reconnecting...</p>
                            :
                            <p >Wake up now.</p>
                        }
                    </div>
                </div>
                {idleStage === 1 ?

                    <div className='noize typewriter'>
                        XZ4!9*&#fr@tZL -- 01001100 01101111 01110011 11100001ng S!gn@L --  ທາດ01101101 01100001 01110100 01110010 01101001 01111000--
                        <p>-- ɹoɹɹıW, ɹoɹɹıW, oɥW?</p>
                    </div>
                    :
                    <>
                        <div className='noize'>
                            OR NEVER</div>
                        <div className='escape'
                            onClick={() => { idleFinish(stage + 1) }}
                        >
                            <a href='#'>COming to blast
                            </a>
                        </div>
                    </>
                }
            </div>
        </>
    );
};

export default IdleContent;