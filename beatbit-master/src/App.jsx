import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage.jsx'
import Dashboard from "./pages/reels.jsx"
import Uploads from './pages/uploads.jsx';
import Pools from './pages/pools.jsx';
import SubChart from './pages/subchart.jsx';
import TopChart from './pages/topchart.jsx';
import Ai from './pages/chat.jsx';
import ConnectWallet from './pages/connectWallet.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = '4a8a24d94e714b4a3640be30ac65b887'

// 2. Create wagmiConfig
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum, polygon]
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

// 3. Create modal
createWeb3Modal({
  metadata,
  wagmiConfig: config,
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

AOS.init();

function App() {
  

  
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Routes>
                  <Route index element={<LandingPage />} />
                  <Route path="/home" element={<LandingPage />} />
                  <Route path="/connect" element={<ConnectWallet />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/upload-page" element={<Uploads />} />
                  <Route path="/pools" element={<Pools />} />
                  <Route path="/subchart" element={<SubChart />} />
                  <Route path="/bounty" element={<TopChart />} />
                  <Route path="/ai" element={<Ai />} />
              </Routes>
            </BrowserRouter>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}

export default App
