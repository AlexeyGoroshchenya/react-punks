import React from 'react';
import './main/Main.css';

const IdleContent = ({stage, idleStage, videoSrc}) => {
    return (
        <>
           <video className='video' autoPlay controls muted loop  src={videoSrc} type="video/mp4"></video>

           <div className='titlebox'>
                <div className='title'>
                    <p>
                        {idleStage === 1 ? 'signal lost.' : 'BlastPunks.'}
                    </p>
                    
                    <div className={stage === 1 ? 'coral title-color' : stage === 2 ? 'green title-color' : 'purple title-color'}>
                        <p className='typewriter'>
                            {idleStage === 1 ? 'reconnecting...' : 'Wake up now.'}
                        </p>
                    </div>


                </div>
                {idleStage === 1 ?

                    <div className='noize'>
                        XZ4!9*&#fr@tZL -- 01001100 01101111 01110011 11100001ng S!gn@L --  ທາດ01101101 01100001 01110100 01110010 01101001 01111000-- <br />
                         -- ɹoɹɹıW, ɹoɹɹıW, oɥW?</div>
                    :
                    <div className='escape'>
                        <p>COming to blast
                        </p>
                    </div>}
            </div> 
        </>
    );
};

export default IdleContent;