import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
import React, { useState, useEffect, useRef } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import {getChartData, reward, getReelByTitle} from "../services/apiCall"
// const eminem = [
//     {
//       songUrl: 'http://blownaija.com/wp-content/uploads/2018/09/KILLSHOT-Official-Audio-Blownaija.com_.mp3',
=======
import {getChartData, reward, getReelByTitle} from "../services/apiCall"
// const eminem = [
//     {
//       src: 'http://blownaija.com/wp-content/uploads/2018/09/KILLSHOT-Official-Audio-Blownaija.com_.mp3',
>>>>>>> 3f97725 (fourth commit from backend)
//       image: '/Images/Play (1).png',
//       title: 'Eminem - killshot',
//       type: 'audio/mpeg',
//     },
// ]
<<<<<<< HEAD
=======
import {getChartData, reward} from "../services/apiCall"
const eminem = [
    {
      src: 'http://blownaija.com/wp-content/uploads/2018/09/KILLSHOT-Official-Audio-Blownaija.com_.mp3',
      image: '/Images/Play (1).png',
      title: 'Eminem - killshot',
      type: 'audio/mpeg',
    },
]
>>>>>>> 3cbad28 (third commit for update)
=======
>>>>>>> 3f97725 (fourth commit from backend)
function Chart () {
    const [chartData, setChartData] = useState({});
    const [loading, setLoading] = useState(true);
    const [currentReelIndex, setCurrentReelIndex] = useState(null);
    const [userReward, setUserReward] = useState(null); // State to store reward data
    const [reelData, setReelData] = useState(null); // State for dynamic reel data
    const audioRefs = useRef([]); // Refs to all audio elements


    // Fetch chart data from the backend
    useEffect(() => {
        const fetchChartData = async () => {
            try {
                const response = await getChartData();
                setChartData(response.data.musicData || []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching chart data:", error);
                setLoading(false);
            }
        };
        fetchChartData();
    }, []);

    
  // Fetch user reward dynamically
  useEffect(() => {
    const fetchReward = async () => {
      try {
        const response = await reward({ walletAddress }); 
        setUserReward(response.data || { dailyReward: 0 });
      } catch (error) {
        console.error("Error fetching user reward:", error);
      }
    };

    fetchReward();
  }, []);

   // Fetch specific reel by title
   useEffect(() => {
    const fetchReelData = async () => {
        try {
            const response = await getReelByTitle("Eminem - killshot");
            setReelData(response.data);
        } catch (error) {
            console.error("Error fetching reel data:", error);
        }
    };
    fetchReelData();
}, []);

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

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen text-white">
                Loading charts...
            </div>
        );
    };
    
    return  (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <div className="flex justify-center items-center pt-[100px]">
                <input className="border-2 py-[5px] px-[30px] w-[30%] outline-none rounded-md bg-transparent text-white text-[18px] text-center" type="text" placeholder="Search" />
            </div>
            <section className="pl-[300px] pt-[10px] mt-[10px]">
                <div className="charts px-[50px] pt-[10px] pb-[33px]">
                    <div className="flex justify-left items-center">
                        <button className="text-white py-[15px] px-[30px] mr-[90px] text-[20px] bg-transparent border-2 w-[27%] outline-none">TOP 23</button>
                        <div>
                            <div className="text-white bg-[#D9D9D9] mr-[20px] ml-[80px] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px]">
                                <p>Daily reward</p>
                                <p>{userReward?.dailyReward || "0"} BRD</p>
                                <p>${chartData[0]?.marketCaps || "0"} </p>
                            </div>
                            <div className="text-white bg-[#D9D9D9] ml-[80px] mr-[70px] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px] w-[60%]">
                                <p>Trending</p>
                                <p>{chartData[0]?.trendingPercentage || "0.00"}%</p>
                            </div>
                        </div>
                        <div className="text-white bg-[#D9D9D9] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px] w-[15%]">
                            <p>Active  listener</p>
                            <p>{chartData?.activeListeners || "0"}</p>
                        </div>
                        </div>
                        <div className="flex justify-left items-center ml-[20px] mt-[70px]">
                            {reelData && (
                            <div
                                className="reel flex justify-left items-center pt-[80px]"
                                
                            >   
                                <img
                                className="w-[3%] cursor-pointer rounded-2xl"
                                src={reelData.image}
                                alt={`Cover for ${reelData.title}`}
                                onClick={() => 
                                    (audioRefs.current[index].paused ? 
                                        playAudio(0) : pauseAudio(0))}
                                />
                                <h2 className="ml-[10px] text-white text-[20px]"> {reelData.title}</h2>
                                <audio
                                    ref={(el) => (audioRefs.current[0] = el)}
                                    src={reelData.src}
                                    autoPlay={false}
                                    controls={false}
                                />
                            </div>
                            )}
                        </div>
                    </div>
                    <div className="text-white grid grid-cols-3 gap-4 text-[19px] mt-[30px]">
                        <h2>Artist: {chartData[0]?.artist || "N/A"}</h2>
                        <h2>Category: {chartData?.category}</h2>
                        <h2>Price: {chartData[0]?.price || "0"} BRB<span className="text-[#02DF18]">+4</span></h2>
                    </div>
                    <div className="flex justify-left items-center mt-[20px] text-[19px] text-white">
                        <h2 className="mr-[30px]">Listeners:  {chartData[0]?.listeners || "0"}</h2>
                        <h2>Market caps: ${chartData[0]?.marketCaps || "0"}</h2>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className='text-white bg-[#DE0808] py-[5px] px-[30px] rounded-md text-[20px]' type='button'>Stake</button>
                    </div>
                    <div>
                        <div className="grid grid-cols-5 gap-4 mt-[40px] text-white text-[18px] mb-[20px]">
                            <h2>*</h2>
                            <h2>Songs</h2>
                            <h2>Price</h2>
                            <h2>Listeners</h2>
                            <h2>market caps </h2>
                        </div>
                        {chartData.map((song, index) => (
                            <div className="grid grid-cols-5 gap-4 text-white text-[19px] mb-[20px]" key={index}>
                            {/* <img className="w-[25%]" 
                            src="/Images/s1.png" alt="" /> */}
                            <img
                            className="w-[25%]"
                            src={song.coverImage || "/default-song.png"}
                            alt={song.title}
                            />
                            <p>{song.title}</p>
                            <p>{song.price || "0.00"} BRB
                                <span className={song.trend >= 0 ? "text-[#02DF18]" : "text-[#DE0808]"}>
                                    {song.trend >= 0 ? `+${song.trend}` : song.trend}%
                                </span>
                            </p>
                            <p>{song.listeners}</p>
                            <p>${song.marketCaps}</p>
                          </div>
                        ))}
                        
                        {/* <div className="grid grid-cols-5 gap-4 text-white text-[19px] mb-[20px]">
                            <img className="w-[25%]" src="/Images/s2.png" alt="" />
                            <p>kings shall not fall</p>
                            <p>0.2450btb<span className="text-[#DE0808]">-5%</span></p>
                            <p>2.8K</p>
                            <p>$567k</p>
                        </div>
                        <div className="grid grid-cols-5 gap-4 text-white text-[19px] mb-[20px]">
                            <img className="w-[25%]" src="/Images/s3.png" alt="" />
                            <p>mystery on thy</p>
                            <p>0.2300btb<span className="text-[#DE0808]">-8%</span></p>
                            <p>2.4K</p>
                            <p>$898k</p>
                        </div>
                        <div className="grid grid-cols-5 gap-4 text-white text-[19px] mb-[20px]">
                            <img className="w-[25%]" src="/Images/s4.png" alt="" />
                            <p>Demon is no</p>
                            <p> 0.1300btb<span className="text-[#02DF18]">+9%</span></p>
                            <p>2K</p>
                            <p>$989k</p>
                        </div> */}
                    </div>
            </section>
        </>
    )
}
export default Chart