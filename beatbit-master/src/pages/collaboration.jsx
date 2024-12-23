import React, { useState, useEffect } from 'react';
import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu";
import axios from "axios";

function Collaboration () {
    const [musicians, setMusicians] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');


    // Fetch musicians from the backend
    const fetchMusicians = async () => {
        try {
            const response = await axios.get("/api/v2/musicians", {
                params: { query: searchQuery }, // Pass search query as a parameter
            });
            setMusicians(response.data); // Update state with fetched data
        } catch (error) {
            console.error("Error fetching musicians:", error);
        }
    };

    // Call fetchMusicians when the component mounts or searchQuery changes
    useEffect(() => {
        fetchMusicians();
    }, [searchQuery]);
    
    return (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <div className="flex justify-center items-center pt-[100px]">
                <input className="border-2 py-[5px] px-[30px] w-[30%] outline-none rounded-md bg-transparent text-white text-[18px] text-center" type="text" placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                 />
            </div>
            <section className="pl-[300px] pt-[20px] mt-[10px]">
                <div className="collab px-[50px] pt-[120px] pb-[120px] text-white flex justify-center items-center flex-col">
                    <h1 className="text-[35px]">Collaboration</h1>
                    <p className="text-[20px] w-[50%] text-center">Govern and participate in remix communities through DAOs, shaping the future of music together.</p>
                </div>

                <div className="text-white mt-[40px]">
                    <h1 className="text-[20px] mb-[40px]">Musicians</h1>
                    {/* Display Musicians */}
                    {/* {musicians.length > 0 ? ( )} */}
                    {/* musicians.map((musician, index) =>()) */}
                    <div className="grid grid-cols-5 gap-4 text-[18px]">
                        <div className="flex">
                            <img className="w-[30%] mr-[10px]" src="/Images/mu1.png" alt="" />
                            <h2>wale the wave</h2>
                        </div>
                        <div>
                            <h2>Status</h2>
                            <div className="flex justify-left items-center">
                                <h2>Active</h2>
                                <img className=" ml-[5px] w-[3.2%]" src="/Images/Ellipse 8.png" alt="" srcset="" />
                            </div>
                        </div>
                        <div>
                            <h2>Fanbase</h2>
                            <h2>67k</h2>
                        </div>
                        <div className="text-center">
                            <h2>Releases</h2>
                            <h2>8</h2>
                        </div>
                        <a href="/connect" rel="noopener noreferrer"><button  className="flex py-[10px] px-[70px] rounded-md text-[15px] font-medium shadow-md text-white hover:bg-[#ff014f] hover:text-white bg-[#DE0808] sm:hidden md:hidden lg:flex" type="button">Message</button></a>
                    </div>
                    
                   
                    <div className="grid grid-cols-5 gap-4 text-[18px] mt-[20px]">
                        <div className="flex">
                            <img className="w-[30%] mr-[10px]" src="/Images/mu2.png" alt="" />
                            <h2>Tracy</h2>
                        </div>
                        <div>
                            <h2>Status</h2>
                            <div className="flex justify-left items-center">
                                <h2>Active</h2>
                                <img className=" ml-[5px] w-[3.2%]" src="/Images/Ellipse 8.png" alt="" srcset="" />
                            </div>
                        </div>
                        <div>
                            <h2>Fanbase</h2>
                            <h2>57k</h2>
                        </div>
                        <div className="text-center">
                            <h2>Releases</h2>
                            <h2>7</h2>
                        </div>
                        <a href="/connect" rel="noopener noreferrer"><button  className="flex py-[10px] px-[70px] rounded-md text-[15px] font-medium shadow-md text-white hover:bg-[#ff014f] hover:text-white bg-[#DE0808] sm:hidden md:hidden lg:flex" type="button">Message</button></a>
                    </div>
                    <div className="grid grid-cols-5 gap-4 text-[18px] mt-[20px]">
                        <div className="flex">
                            <img className="w-[30%] mr-[10px]" src="/Images/mu3.png" alt="" />
                            <h2>Alisha</h2>
                        </div>
                        <div>
                            <h2>Status</h2>
                            <div className="flex justify-left items-center">
                                <h2>Active</h2>
                                <img className=" ml-[5px] w-[3.2%]" src="/Images/Ellipse 8.png" alt="" srcset="" />
                            </div>
                        </div>
                        <div>
                            <h2>Fanbase</h2>
                            <h2>63k</h2>
                        </div>
                        <div className="text-center">
                            <h2>Releases</h2>
                            <h2>7</h2>
                        </div>
                        <a href="/connect" rel="noopener noreferrer"><button  className="flex py-[10px] px-[70px] rounded-md text-[15px] font-medium shadow-md text-white hover:bg-[#ff014f] hover:text-white bg-[#DE0808] sm:hidden md:hidden lg:flex" type="button">Message</button></a>
                    </div>
                    <div className="grid grid-cols-5 gap-4 text-[18px] mt-[20px]">
                        <div className="flex">
                            <img className="w-[30%] mr-[10px]" src="/Images/mu4.png" alt="" />
                            <h2>Benboy</h2>
                        </div>
                        <div>
                            <h2>Status</h2>
                            <div className="flex justify-left items-center">
                                <h2>Active</h2>
                                <img className=" ml-[5px] w-[3.2%]" src="/Images/Ellipse 8.png" alt="" srcset="" />
                            </div>
                        </div>
                        <div>
                            <h2>Fanbase</h2>
                            <h2>56k</h2>
                        </div>
                        <div className="text-center">
                            <h2>Releases</h2>
                            <h2>5</h2>
                        </div>
                        <a href="/connect" rel="noopener noreferrer"><button  className="flex py-[10px] px-[70px] rounded-md text-[15px] font-medium shadow-md text-white hover:bg-[#ff014f] hover:text-white bg-[#DE0808] sm:hidden md:hidden lg:flex" type="button">Message</button></a>
                    </div>
                    <div className="grid grid-cols-5 gap-4 text-[18px] mt-[20px]">
                        <div className="flex">
                            <img className="w-[30%] mr-[10px]" src="/Images/mu5.png" alt="" />
                            <h2>Mr Davies</h2>
                        </div>
                        <div>
                            <h2>Status</h2>
                            <div className="flex justify-left items-center">
                                <h2>Active</h2>
                                <img className=" ml-[5px] w-[3.2%]" src="/Images/Ellipse 8.png" alt="" srcset="" />
                            </div>
                        </div>
                        <div>
                            <h2>Fanbase</h2>
                            <h2>46k</h2>
                        </div>
                        <div className="text-center">
                            <h2>Releases</h2>
                            <h2>4</h2>
                        </div>
                        <a href="/connect" rel="noopener noreferrer"><button  className="flex py-[10px] px-[70px] rounded-md text-[15px] font-medium shadow-md text-white hover:bg-[#ff014f] hover:text-white bg-[#DE0808] sm:hidden md:hidden lg:flex" type="button">Message</button></a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Collaboration