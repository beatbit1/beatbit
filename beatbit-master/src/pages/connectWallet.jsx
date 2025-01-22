import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';
import Navbar from '../components/nav.jsx';
import {connectWallet} from "../services/apiCall.js";


function ConnectWallet () {
    const navigate = useNavigate();
    const { address, isConnecting, isDisconnected } = useAccount();
    
    useEffect(() => {
        const connectWalletToBackend = async () => {
            if (address && !isConnecting) {
                try {
                    const response = await connectWallet({ walletAddress: address });
                    console.log('Wallet connected:', response.data);
                    navigate('/dashboard'); // Navigate to Dashboard
                } catch (error) {
                    console.error('Error connecting wallet:', error);
                }
            }
        };

        connectWalletToBackend();
    }, [address, isConnecting]);
    
    return (
        <>
            <Navbar/>
            <div className="flex justify-center items-center self-center pt-[140px]">
                <img className="w-[6%]" src="/Images/logo.png" alt="" />
                <a className="text-[35px] text-white font-medium" href="/">BEATBIT</a>
            </div>
            <h1 className='text-center mt-[20px] text-white text-[30px]'>JOIN BEATBIT BY CONNECTING  WALLET</h1>
            <div className='connect text-black rounded-sm flex justify-center items-center mt-[30px]'>
                <button onClick={navigate}><w3m-button /></button>
            </div>
        </>
    )
}
export default ConnectWallet