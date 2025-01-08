import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
import React, { useState, useEffect, useRef } from 'react';
import debounce from "lodash.debounce"
import {getAllReelMusicians, searchMusicians} from "../services/apiCall"; // Import Axios for API calls




function Dashboard () {
    const [currentReelIndex, setCurrentReelIndex] = useState(null);
    const [reels, setReels] = useState([]); // Dynamic reels data
    const [searchQuery, setSearchQuery] = useState(""); // Search query state
    const audioRefs = useRef([]); // Refs to all audio elements

    
    // Fetch reels from the backend
    const fetchReels = async () => {
      try {
        const response = await getAllReelMusicians();
        setReels(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching reels:", error);
      }
    };
  
 
  
   // Fetch reels based on search query
  const handleSearch = debounce(async () => {
    if (searchQuery.trim() === "") {
      fetchReels();
    } else {
      try {
        const response = await searchMusicians(searchQuery); // Search API call
        setReels(Array.isArray(response.data) ? response.data : []); // Ensure reels is an array
      } catch (error) {
        console.error("Error searching reels:", error);
      }
    }
  }, 300); // 300ms debounce to optimize API calls


    useEffect(() => {
      fetchReels();
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

    useEffect(() => {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5, // Trigger when 50% of the element is visible
        };
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.dataset.index, 10);
              handleReelVisibility(index);
            }
          });
        }, options);
        const reelElements = document.querySelectorAll('.reel');
        reelElements.forEach((element) => observer.observe(element));

        return () => {
        reelElements.forEach((element) => observer.unobserve(element));
        };
    }, []);
    return (
        <>
        <ReelsNavBar />
        <Sidemenu />
        <div className="flex justify-center items-center pt-[100px]">
          <input className="border-2 py-[5px] px-[25px] w-[30%] outline-none rounded-md bg-transparent text-white text-[18px] text-center sm:w-[90%] md:w-[90%] lg:w-[30%]"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>
        <section>
          <div className="reels-container">
            {reels.map((reel, index) => (
              <div
                className="reel flex justify-center items-center flex-col pt-[80px]"
                key={index}
                data-index={index}
              >
                <img
                  className="w-[22%] cursor-pointer rounded-2xl sm:w-[50%] md:w-[60%] lg:w-[22%]"
                  src={reel?.imageUrl}
                  alt={reel?.title}
                  onClick={() =>
                    audioRefs.current[index].paused ? playAudio(index) : pauseAudio(index)
                  }
                />
                <div className="flex space-x-4 mt-4">
                  <button className="flex items-center justify-center bg-green-500 p-2 rounded-full hover:bg-green-600">
                    <img src={reel?.likeIcon} alt="like-icon" className="w-6 h-6" />
                  </button>
                  <button className="flex items-center justify-center bg-red-500 p-2 rounded-full hover:bg-red-600">
                    <img src={reel?.dislikeIcon} alt="dislike-icon" className="w-6 h-6" />
                  </button>
                </div>
                <h2 className="mt-[30px] text-white text-[20px] sm:text-[16px] md:text-[17px] lg:text-[20px]">{reel?.title}</h2>
                <audio
                  ref={(el) => (audioRefs.current[index] = el)}
                  src={reel?.audioUrl}
                  controls={false}
                  autoPlay={false}
                />
              </div>
            ))}
          </div>
        </section>
                
        </>
    )
}
export default Dashboard