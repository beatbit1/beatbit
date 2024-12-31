import React, {useState, useEffect} from "react"
import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu";
import {getChartData, reward, getReelByTitle} from "../services/apiCall"
function SubChart () {
    const [chartData, setChartData] = useState({});
    const [loading, setLoading] = useState(true);
    const [userReward, setUserReward] = useState(null); // State to store reward data
    const [reelData, setReelData] = useState(null); // State for dynamic reel data


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
                <input className="border-2 py-[5px] px-[30px] w-[30%] outline-none rounded-md bg-transparent text-white text-[18px] text-center sm:w-[90%] md:w-[90%] lg:w-[30%]" type="text" placeholder="Search" />
            </div>
            <section className="pl-[300px] pt-[10px] mt-[10px] sm:pl-[20px] md:pl-[30px] lg:pl-[300px]">
                <div className="charts px-[50px] pt-[10px] pb-[33px]">
                    <div className="flex justify-center items-center sm:flex-col md:flex-col lg:flex-row">
                        <button className="text-white py-[15px] px-[30px] mr-[90px] text-[20px] bg-transparent border-2 w-[27%] outline-none sm:text-[17px] md:text-[19px] lg:text-[20px] sm:w-[60%] md:w-[60%] lg:w-[27%] sm:mt-[10px] md:mt-[10px] lg:mt-0 sm:mr-[10px] md:mr-[10px] lg:mr-[90px]">TOP 23</button>
                        <div>
                            <div className="text-white bg-[#D9D9D9] mr-[20px] ml-[80px] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px] w-[60%]  sm:w-full md:w-full lg:w-[60%] sm:mr-[5px] md:mr-[5px] lg:mr-[5px] md sm:ml-[5px] md:ml-[5px] lg:ml-[80px]">
                                <p>Daily reward</p>
                                <p>{userReward?.dailyReward || "0"} BRD</p>
                                <p>${chartData[0]?.marketCaps || "0"} </p>
                            </div>
                            <div className="text-white bg-[#D9D9D9] ml-[80px] mr-[70px] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px] w-[60%] sm:w-full md:w-full lg:w-[60%] sm:mr-[5px] md:mr-[5px] lg:mr-[70px] md sm:ml-[5px] md:ml-[5px] lg:ml-[80px]">
                            <p>Trending</p>
                            <p>{chartData[0]?.trendingPercentage || "0.00"}%</p>
                            </div>
                        </div>
                        <div className="text-white bg-[#D9D9D9] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px] w-[15%] sm:w-[90%] md:w-[90%] lg:w-[15%] sm:mr-[5px] md:mr-[5px] lg:mr-[5px] md sm:ml-[5px] md:ml-[5px] lg:ml-[80px]">
                        <p>Active  listener</p>
                        <p>{chartData?.activeListeners || "0"}</p>
                        </div>
                        </div>
                        {reelData && (
                        <div className="flex justify-left items-center ml-[20px] mt-[70px] sm:mt-[20px] md:mt-[20px] lg:mt-[70px]">
                            <img className="w-[2.5%] mr-[20px]" 
                            src={reelData.image}
                            alt={`Cover for ${reelData.title}`} />
                            <p className="text-white text-[20px]">{reelData.title}</p>
                        </div>
                         ) }
                    </div>
                    <div className="text-white grid grid-cols-3 gap-4 text-[19px] mt-[30px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                        <h2>Artist: {chartData[0]?.artist || "N/A"}</h2>
                        <h2>Category: {chartData?.category}</h2>
                        <h2>Price: {chartData[0]?.price || "0"} BRB<span className="text-[#02DF18]">+4</span></h2>
                    </div>
                    <div className="flex justify-left items-center mt-[20px] text-[19px] text-white sm:mb-[10px] md:mb-[10px]">
                        <h2 className="mr-[30px]">Listeners: {chartData[0]?.listeners || "0"}</h2>
                        <h2>Market caps: ${chartData[0]?.marketCaps || "0"}</h2>
                    </div>
                    <div className="flex justify-center items-center">
                        <button  className='text-white border border-white mr-[30px] bg-transparent py-[5px] px-[30px] rounded-md text-[20px]' type='button'>Token Amount</button>
                        <button className='text-white bg-[#DE0808] py-[5px] px-[30px] rounded-md text-[20px]' type='button'>Stake</button>
                    </div>
                    <div>
                        <div className="grid grid-cols-5 gap-4 mt-[40px] text-white text-[18px] mb-[20px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
                            <h2>*</h2>
                            <h2>Songs</h2>
                            <h2>Price</h2>
                            <h2>Listeners</h2>
                            <h2>market caps </h2>
                        </div>
                        {chartData.map((song, index) => (
                        <div className="grid grid-cols-5 gap-4 text-white text-[19px] mb-[20px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
                            className="w-[25%]"
                            src={song.coverImage || "/default-song.png"}
                            alt={song.title}
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
                        {/* <div className="grid grid-cols-5 gap-4 text-white text-[19px] mb-[20px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
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
                        <div className="grid grid-cols-5 gap-4 text-white text-[19px] mb-[20px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
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
export default SubChart