import React from 'react';
import { useState } from 'react';
import './App.css';

import Main from './components/main/Main';

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'

//more about libriry https://docs.walletconnect.com/web3modal/react/about?platform=wagmi1
// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.PUBLIC_PROJECT_ID


const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})


createWeb3Modal({ wagmiConfig, projectId, chains })


function App() {

  return <WagmiConfig config={wagmiConfig}>
    <div className="App">
      <Main/>
    </div>
  </WagmiConfig>

}

export default App;
