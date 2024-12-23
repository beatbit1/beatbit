import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';
function NavBar () {
    const navigate = useNavigate();
    const { address, isConnecting} = useAccount();
    useEffect(() => {
        if (address && !isConnecting) {
          navigate('/dashboard');
        }
      }, [address, isConnecting, history]);
    return (
        <>
            <div className="fixed w-full z-[1000] p-[5px] py-2 bg-[#1E1E1E] shadow-md">
                <nav className="flex justify-between items-center  my-[10px] mx-10 h-10 pb-13 sm:mx-2 lg:mx-10">
                    <div className="flex justify-between items-center sm:w-[50%] md:w-[50%] lg:w-[20%]">
                        <div className="flex justify-start items-center self-center">
                            <img className="w-[15%] sm:w-[25%]" src="/Images/logo.png" alt="" />
                            <a className="text-[25px] text-white font-medium  sm:mt-[5px] sm:text-[17px] md:text-[20px] lg:text-[25px]" href="/">BEATBOX</a>
                        </div>
                    </div>
                    <ul className="flex justify-center items-center text-[16px] space-x-5 text-white">
                        <li className="text-center text-md font-md sm:hidden md:flex lg:flex"><a className='pr-3' href="/home">How it works</a></li>
                        <button onClick={navigate}><w3m-button /></button>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default NavBar