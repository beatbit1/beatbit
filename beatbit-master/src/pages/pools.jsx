import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
import React, { useState, useEffect, useRef } from 'react';
const playlist = [
    {
      src: 'https://files.ceenaija.com/wp-content/uploads/music/2021/03/NF_-_The_Search_CeeNaija.com_.mp3',
      image: '/Images/Play (1).png',
      title: 'NF',
      type: 'audio/mpeg',
    },
]
function Pools () {
    const [currentReelIndex, setCurrentReelIndex] = useState(null);
    const audioRefs = useRef([]); // Refs to all audio elements

  // Function to handle when a reel becomes visible
    const handleReelVisibility = (index) => {
        setCurrentReelIndex(index); // Update current reel index to the visible one
    };
    const playAudio = (index) => {
        if (audioRefs.current[index]) {
          audioRefs.current[index].play();
        }
    };
    
      // Function to pause the audio for the current reel
    const pauseAudio = (index) => {
    if (audioRefs.current[index]) {
        audioRefs.current[index].pause();
    }
  };
    
      // Effect to handle autoplay when the current reel changes
      useEffect(() => {
        if (currentReelIndex !== null) {
          playAudio(currentReelIndex);
    
          // Pause other audio elements
          audioRefs.current.forEach((audio, idx) => {
            if (idx !== currentReelIndex) {
              audio.pause();
            }
          });
        }
    }, [currentReelIndex]);
    return (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <div className="flex justify-center items-center pt-[100px]">
                <input className="border-2 py-[5px] px-[30px] w-[30%] outline-none rounded-md bg-transparent text-white text-[18px] text-center sm:w-[90%] md:w-[90%] lg:w-[30%]" type="text" placeholder="Search" />
            </div>
            <section className="pl-[300px] pt-[20px] mt-[10px] sm:pl-[20px] md:pl-[30px] lg:pl-[300px]">
                <div className="pools px-[50px] pt-[2px] pb-[33px] sm:px-[10px]">
                    <div className="flex justify-center items-center sm:flex-col md:flex-col lg:flex-row">
                        <button className="text-white py-[15px] px-[30px] mr-[90px] text-[20px] bg-transparent border-2 w-[27%] outline-none sm:text-[17px] md:text-[19px] lg:text-[20px] sm:w-[40%] md:w-[60%] lg:w-[27%] sm:mt-[10px] md:mt-[10px] lg:mt-0 sm:mr-[10px] md:mr-[10px] lg:mr-[90px]">TOP 1 HIT</button>
                        <div>
                            <div className="text-white bg-[#D9D9D9] mr-[20px] ml-[80px] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px] sm:mr-[5px] md:mr-[5px] lg:mr-[5px] md sm:ml-[5px] md:ml-[5px] lg:ml-[80px]">
                                <p>Daily reward</p>
                                <p>0.9231MUS</p>
                                <p>$2.05</p>
                            </div>
                            <div className="text-white bg-[#D9D9D9] ml-[80px] mr-[70px] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px] sm:mr-[5px] md:mr-[5px] lg:mr-[70px] sm:ml-[5px] md:ml-[5px] lg:ml-[80px]">
                                <p>Daily reward</p>
                                <p>0.9231MUS</p>
                                <p>$2.05</p>
                            </div>
                        </div>
                        <div className="text-white bg-[#D9D9D9] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px] w-[15%] sm:w-[70%] md:w-[60%] lg:w-[15%]">
                            <p>Active  listener</p>
                            <p>100K</p>
                        </div>
                    </div>
                    <div className="flex justify-left items-left ml-[20px] flex-col mt-[10px] w-full">
                    {playlist.map((reel, index) => (
                    <div
                        className="reel flex justify-left items-center pt-[80px] sm:pt-[20px] md:pt-[20px] lg:pt-[80px]"
                        key={index}
                        data-index={index}
                    >   
                        <img
                        className="w-[3%] cursor-pointer rounded-2xl"
                        src={reel.image}
                        alt={`Cover for ${reel.title}`}
                        onClick={() => (audioRefs.current[index].paused ? playAudio(index) : pauseAudio(index))}
                        />
                        <h2 className="ml-[10px] text-white text-[20px]">{reel.title}</h2>
                        <audio
                            ref={(el) => (audioRefs.current[index] = el)}
                            src={reel.src}
                            autoPlay={false}
                            controls={false}
                        />
                    </div>
                    ))}
                    </div>
                </div>
                <div className="text-white mt-[20px] flex justify-center items-center flex-col">
                    <h1 className="text-[25px] mb-[12px]">Album Liqudity Pools</h1>
                    <p className="w-[50%] text-[17px] sm:w-[90%] md:w-[80%] lg:w-[50%]">Musicians turn your albums in earnings, albums are turned into liquidity pools. Fans stake tokens in these pools, earning a share of the streaming revenue.</p>
                </div>
                <div>
                    <div className="mt-[25px]">
                        <button className="border-2 border-neutral-800 rounded-md text-white px-[12px] py-[10px] mr-[20px]">All Albums</button>
                        <input className="border-2 py-[5px] px-[30px] w-[30%] outline-none rounded-md bg-transparent text-white text-[18px] text-center sm:mt-[10px] md:mt-[10px] lg:m-0 sm:w-[70%] md:w-[70%] lg:w-[30%]" type="text" placeholder="Search" />
                   
                        <div className="grid grid-cols-5 gap-4 mt-[25px] text-[17px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                            <button className="border-2 border-neutral-800 rounded-md text-white px-[12px] py-[10px] mr-[20px]">Hippop</button>
                            <button className="border-2 border-neutral-800 rounded-md text-white px-[12px] py-[10px] mr-[20px]">Jazz</button>
                            <button className="border-2 border-neutral-800 rounded-md text-white px-[12px] py-[10px] mr-[20px]">Pop</button>
                            <button className="border-2 border-neutral-800 rounded-md text-white px-[12px] py-[10px] mr-[20px]">Gospel</button>
                            <button className="border-2 border-neutral-800 rounded-md text-white px-[12px] py-[10px] mr-[20px]">Afro</button>
                            <button className="border-2 border-neutral-800 rounded-md text-white px-[12px] py-[10px] mr-[20px]">Reggae</button>
                            <button className="border-2 border-neutral-800 rounded-md text-white px-[12px] py-[10px] mr-[20px]">Rap</button>
                            <button className="border-2 border-neutral-800 rounded-md text-white px-[12px] py-[10px] mr-[20px]">Trap</button>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-6 gap-4 mt-[40px] text-white text-[18px] mb-[20px] sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
                            <h2>*</h2>
                            <h2>Name of Alb</h2>
                            <h2>Artist</h2>
                            <h2>Price</h2>
                            <h2>Listeners</h2>
                            <h2>Market caps</h2>
                        </div>
                        <div className="grid grid-cols-6 gap-4 text-white mb-[20px] sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
                            <img className="w-[25%]" src="/Images/Rectangle 112.png" alt="" />
                            <p>The king of tear</p>
                            <p>Kevin</p>
                            <p>0.185btb</p>
                            <p>89k</p>
                            <p>$3.5M</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 text-white mb-[20px] sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
                            <img className="w-[25%]" src="/Images/Rectangle 113.png" alt="" />
                            <p>Hallows</p>
                            <p>Shane</p>
                            <p>0.0345btb</p>
                            <p>85k</p>
                            <p>$3.3M</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 text-white mb-[20px] sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
                            <img className="w-[25%]" src="/Images/Rectangle 114.png" alt="" />
                            <p>Why the way</p>
                            <p>lil burk</p>
                            <p>0.0340btb</p>
                            <p>75k</p>
                            <p>$3.0M</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 text-white mb-[20px] sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
                            <img className="w-[25%]" src="/Images/Rectangle 115.png" alt="" />
                            <p>Men of Honours</p>
                            <p>sheler</p>
                            <p>0.0325btb</p>
                            <p>60k</p>
                            <p>$2.9M</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 text-white mb-[20px] sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
                            <img className="w-[25%]" src="/Images/Rectangle 116.png" alt="" />
                            <p> The Shallows</p>
                            <p>wale</p>
                            <p>0.0045btb</p>
                            <p>55k</p>
                            <p>$2.8M</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Pools