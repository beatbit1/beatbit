import React, { useState, useEffect, useRef } from 'react';
import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu";
import {getChartData, 
    reward, 
    getReelByTitle, 
    getTokenDetails, 
    stakeTokens,
    getAllUploads,
    getWalletAddress
    } from "../services/apiCall";

const eminem = [
    {
      audioUrl: 'http://blownaija.com/wp-content/uploads/2018/09/KILLSHOT-Official-Audio-Blownaija.com_.mp3',
      imageUrl: '/Images/Play (1).png',
      title: 'Eminem - killshot',
      type: 'audio/mpeg',
    },
]

function SubChart () {
    const [chartData, setChartData] = useState({});
    const [uploads, setUploads] = useState([]);
    const [walletAddress, setWalletAddress] = useState(""); // State to store wallet address
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('')
    const [userReward, setUserReward] = useState(null); // State to store reward data
    const [reelData, setReelData] = useState(null); // State for dynamic reel data
    const [tokenDetails, setTokenDetails] = useState({ stakedTokens: 0, rewards: 0 });
    const [currentAudio, setCurrentAudio] = useState(null);  // State to store the current audio being played
    const [isPlaying, setIsPlaying] = useState(false);  // To track if audio is playing
    const [stakeAmount, setStakeAmount] = useState("");
    const audioRefs = useRef([]); // Refs to all audio elements


    // Fetch wallet address
    useEffect(() => {
        const fetchWalletAddress = async () => {
            try {
                const response = await getWalletAddress(); // Fetch wallet address from backend
                setWalletAddress(response.data.walletAddress);
            } catch (error) {
                console.error("Error fetching wallet address:", error);
            }
        };

        fetchWalletAddress();
    }, []);

    // Fetch token details when walletAddress is available
    useEffect(() => {
        if (walletAddress) {
            const fetchTokenDetails = async () => {
                try {
                    const response = await getTokenDetails(walletAddress);
                    setTokenDetails(response.data);
                } catch (error) {
                    console.error("Error fetching token details:", error);
                }
            };

            fetchTokenDetails();
        }
    }, [walletAddress]);



    // Fetch all uploaded songs
    useEffect(() => {
        const fetchUploads = async () => {
            try {
                const response = await getAllUploads();
                setUploads(response.data);
            } catch (error) {
                console.error('Error fetching uploads:', error);
            }
        };
        fetchUploads();
    }, []);


    const handleStake = async () => {
        if (!stakeAmount || isNaN(stakeAmount)) {
            alert("Enter a valid amount to stake.");
            return;
        }

        try {
            const response = await stakeTokens(walletAddress, Number(stakeAmount));
            setTokenDetails((prev) => ({
                ...prev,
                stakedTokens: response.data.stakedTokens,
            }));
            setStakeAmount("");
            alert("Tokens staked successfully!");
        } catch (error) {
            console.error("Error staking tokens:", error);
            alert("Failed to stake tokens.");
        }
    };

    // Fetch chart data from the backend
    useEffect(() => {
        const fetchChartData = async () => {
            try {

                const response = await getChartData({ query: searchQuery });
                setChartData(response.data.musicData || []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching chart data:", error);
                setLoading(false);
            }
        };
        fetchChartData();

    }, [searchQuery]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };



    
  // Fetch user reward dynamically
  useEffect(() => {

    if (walletAddress) {
        const fetchReward = async () => {
            try {
                const response = await reward({ walletAddress });
                setUserReward(response.data || { dailyReward: 0 });
            } catch (error) {
                console.error("Error fetching user reward:", error);
            }
        };

        fetchReward();
    }
}, [walletAddress]);

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


// Function to handle image click and play audio
const handlePlayAudio = (audioUrl) => {
    if (currentAudio && currentAudio !== audioUrl) {
        audioRef.current.pause();  // Pause the previous audio if a new one is selected
    }

    setCurrentAudio(audioUrl);
    setIsPlaying(true);

    // Start playing the new audio
    audioRef.current.src = audioUrl;
    audioRef.current.play();
};

// Function to pause the audio
const handlePauseAudio = () => { //Not implemented
    audioRef.current.pause();
    setIsPlaying(false);
};

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
            {/*Search element section*/}
            <div className="flex justify-center items-center pt-[100px]">
                <input 
                className="border-2 py-[5px] px-[30px] w-[30%] outline-none rounded-md bg-transparent text-white text-[18px] text-center sm:w-[90%] md:w-[90%] lg:w-[30%]" 
                type="text" 
                placeholder="Search song title price" 
                value={searchQuery}
                onChange={handleSearch}/>
            </div>
            <section className="pl-[300px] pt-[10px] mt-[10px] sm:pl-[20px] md:pl-[30px] lg:pl-[300px]">
                <div className="charts px-[50px] pt-[10px] pb-[33px]">
                    <div className="flex justify-center items-center sm:flex-col md:flex-col lg:flex-row">
                        <button className="text-white py-[15px] px-[30px] mr-[90px] text-[20px] bg-transparent border-2 w-[27%] outline-none sm:text-[17px] md:text-[19px] lg:text-[20px] sm:w-[60%] md:w-[60%] lg:w-[27%] sm:mt-[10px] md:mt-[10px] lg:mt-0 sm:mr-[10px] md:mr-[10px] lg:mr-[90px]">TOP 23</button>
                        <div>
                            {/*Daily Reward section - from User(Model)*/}
                            <div className="text-white bg-[#D9D9D9] mr-[20px] ml-[80px] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px] w-[60%]  sm:w-full md:w-full lg:w-[60%] sm:mr-[5px] md:mr-[5px] lg:mr-[5px] md sm:ml-[5px] md:ml-[5px] lg:ml-[80px]">
                                <p>Daily reward</p>
                                <p>{userReward?.dailyReward || "0"} BTD</p>
                                <p>${chartData[0]?.marketCaps || "0"} </p>
                            </div>
                            {/* Trending section - from MusicData(Model)*/}
                            <div className="text-white bg-[#D9D9D9] ml-[80px] mr-[70px] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px] w-[60%] sm:w-full md:w-full lg:w-[60%] sm:mr-[5px] md:mr-[5px] lg:mr-[70px] md sm:ml-[5px] md:ml-[5px] lg:ml-[80px]">
                            <p>Trending</p>
                            <p>{chartData[0]?.trendingPercentage || "0.00"}%</p>
                            </div>
                        </div>
                        {/* Active Listener section*/}
                        <div className="text-white bg-[#D9D9D9] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px] w-[15%] sm:w-[90%] md:w-[90%] lg:w-[15%] sm:mr-[5px] md:mr-[5px] lg:mr-[5px] md sm:ml-[5px] md:ml-[5px] lg:ml-[80px]">
                            <p>Active  listener</p>
                            <p>{chartData?.activeListeners || "0"}</p>
                        </div>
                        </div>

                        {/*HERO COVER IMAGE WITH SONG */}
                        {eminem && (
                        <div className="flex justify-left items-center ml-[20px] mt-[70px] sm:mt-[20px] md:mt-[20px] lg:mt-[70px] cursor-pointer">
                            <img className="w-[2.5%] mr-[20px]" 
                            src={eminem.imageUrl}
                            alt={`Cover for ${eminem.title}`} 
                            onClick={() => handlePlayAudio(eminem.audioUrl)}  // Play audio on image click
                            />
                    </div>
                    )}
                </div>
                {/*Artist, Category, Price section*/}
                <div className="text-white grid grid-cols-3 gap-4 text-[19px] mt-[30px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                        <h2>Artist: {chartData[0]?.artist || "N/A"}</h2>

                        <h2>Category: {chartData?.category}</h2>
                        <h2>Price: {chartData[0]?.price || "0"} BTB<span className="text-[#02DF18]">+4</span></h2>
                    </div>
                    {/*Listeners, Market caps section*/}
                    <div className="flex justify-left items-center mt-[20px] text-[19px] text-white sm:mb-[10px] md:mb-[10px]">
                        <h2 className="mr-[30px]">Listeners: {chartData[0]?.listeners || "0"}</h2>
                        <h2>Market caps: ${chartData[0]?.marketCaps || "0"}</h2>
                    </div>
                    {/*Token Amount button and Staking button*/}
                    <div className="flex justify-center items-center sm:flex-col md:flex-col lg:flex-row">

                        {/* <button  
                        className='text-white border border-white mr-[30px] bg-transparent py-[5px] px-[30px] rounded-md text-[20px]' 
                        type='button'>Token Amount</button> */}
                        <h2 className="text-white sm:mb-[10px] md:mb-[10px] lg:mb-0">Token Amount</h2>
                        <input
                            type="number"
                            value={stakeAmount}
                            onChange={(e) => setStakeAmount(e.target.value)}
                            placeholder="Enter amount to stake"
                            className="stake-input ml-[20px] outline-none px-[10px] py-[5px] rounded-md sm:mb-[10px] md:mb-[10px] lg:mb-0"
                        />
                        <button 
                        onClick={handleStake}
                        className='text-white bg-[#DE0808] py-[5px] px-[25px] rounded-md text-[16px]' 
                        type='button'>Stake</button>
                    </div>
                    <div>
                        <div className="grid grid-cols-5 gap-4 mt-[40px] text-white text-[18px] mb-[20px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
                            <h2>*</h2>
                            <h2>Songs</h2>
                            <h2>Price</h2>
                            <h2>Listeners</h2>
                            <h2>market caps </h2>
                        </div>

                        {/*Mapping List of songs from upload.jsx Songs(audioUrl - uploadModel), title(uploadModel), imageUrl(uploadModel) - section*/}
                        {uploads.map((song) => (
                        <div className="grid grid-cols-5 gap-4 text-white text-[19px] mb-[20px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5"
                         key={song._d}>
                            <img
                            className="w-[25%]"
                            src={song?.imageUrl}
                            alt={song?.title}
                            />
                            <p>{song?.title}</p>
                            {/*The price, trending, listeners, marketCaps from MusicData(Model)*/}
                            <p>{song.chartData?.price || "0.00"} BTB
                                <span className={song.chartData?.trending >= 0 ? "text-[#02DF18]" : "text-[#DE0808]"}>
                                    {song.chartData?.trending >= 0 ? `+${song.chartData?.trending}` : song.chartData?.trendingPercentage}%
                                </span>
                            </p>
                            <p>{song.chartData?.listeners}</p>
                            <p>${song.chartData?.marketCaps}</p>
                        </div>
                        ))}
                    </div>
            </section>
        </>
    )
}
export default SubChart

