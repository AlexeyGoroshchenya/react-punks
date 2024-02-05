import React, { useEffect, useState } from 'react';
import styles from './header.module.css'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'

const Header = ({stage}) => {

    const { open } = useWeb3Modal()
    const { address, isConnecting, isDisconnected } = useAccount()
    const [accountShortName, setAccountShortName] = useState('')

const getAccountShortName = (str)=>{
    return str.slice(0,3)+'...'+str.slice(35)

}

    useEffect(()=>{
        if(address) setAccountShortName(getAccountShortName(address))
        
    },[address])


    

    return (
        <div className={address?styles.body + ' ' + styles.connected: styles.body}>
            <div className={styles.container}>
                <div className={stage===1?'coral ' + styles.logo:stage===2?'green ' + styles.logo:'purple ' + styles.logo}>BLASTPUNKS</div>
                <div className={styles.contacts}>
                    <a href="#"><img src={`${process.env.ASSET_PREFIX}/icons/socials-1.svg`} alt="" /></a>
                    <a href="#"><img src={`${process.env.ASSET_PREFIX}/icons/socials-2.svg`} alt="" /></a>
                    <a href="#"><img src={`${process.env.ASSET_PREFIX}/icons/socials-3.svg`} alt="" /></a>
                    <a href="#"><img src={`${process.env.ASSET_PREFIX}/icons/socials-4.svg`} alt="" /></a>
                </div>
                <div 
                onClick={() => open()}
                className={stage===1?styles.button_1 +' ' + styles.button:stage===2?styles.button_2 +' ' + styles.button: styles.button_3 +' ' + styles.button}>
                    
                    <p >{address? accountShortName: 'connect'}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;