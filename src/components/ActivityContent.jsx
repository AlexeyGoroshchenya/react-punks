import React from 'react';
import './main/Main.css';

import Person1 from './main/backgrounds/Person-1.png'
import Person2 from './main/backgrounds/Person-2.png'


const ActivityContent = ({stage, changeSlide}) => {
    return (
        <>


            <div className='imagebox'><img src={stage !== 3 ? Person1 : Person2} alt="" /></div>

            <div className='titlebox'>
                <div className='title'>
                    <p>
                        {stage === 1 ?
                            'This is your last'
                            : stage === 2 ?
                                'Your last'
                                :
                                'To escape the'}
                    </p>
                    <div className={stage === 1 ? 'coral title-color' : stage === 2 ? 'green title-color' : 'purple title-color'}>
                        <span className='prev-slide'
                        style={stage === 1 ? { display: 'none' }: {}}
                            onClick={() => changeSlide(stage - 1)}>
                            <svg viewBox="0 0 42 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.7049 31.6108C17.0337 32.2821 15.9455 32.2821 15.2742 31.6108L0.951328 17.2879C0.280117 16.6167 0.280117 15.5285 0.951328 14.8573L15.2742 0.534338C15.9455 -0.136875 17.0337 -0.136875 17.7049 0.534338C18.3761 1.20555 18.3761 2.2938 17.7049 2.96502L6.3161 14.3538L39.4063 14.3538C40.3555 14.3538 41.125 15.1234 41.125 16.0726C41.125 17.0218 40.3555 17.7913 39.4063 17.7913L6.3161 17.7913L17.7049 29.1802C18.3761 29.8514 18.3761 30.9396 17.7049 31.6108Z" />
                            </svg>
                        </span>
                        <p>
                            {stage === 1 ?
                                'chance.'
                                : stage === 2 ?
                                    'opportunity.'
                                    :
                                    'matrix.'}

                        </p>
                        <span className='next-slide'
                        style={stage === 3 ? { display: 'none' }: {}}
                            onClick={() => changeSlide(stage + 1)}>
                            <svg viewBox="0 0 42 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.7049 31.6108C17.0337 32.2821 15.9455 32.2821 15.2742 31.6108L0.951328 17.2879C0.280117 16.6167 0.280117 15.5285 0.951328 14.8573L15.2742 0.534338C15.9455 -0.136875 17.0337 -0.136875 17.7049 0.534338C18.3761 1.20555 18.3761 2.2938 17.7049 2.96502L6.3161 14.3538L39.4063 14.3538C40.3555 14.3538 41.125 15.1234 41.125 16.0726C41.125 17.0218 40.3555 17.7913 39.4063 17.7913L6.3161 17.7913L17.7049 29.1802C18.3761 29.8514 18.3761 30.9396 17.7049 31.6108Z" />
                            </svg>
                        </span>
                    </div>

                </div>

            </div>




        </>
    );
};

export default ActivityContent;