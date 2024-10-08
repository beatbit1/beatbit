import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
import React, { useState, useEffect, useRef } from 'react';
const reels = [
    {
      src: 'https://cdn.trendybeatz.com/audio/347aidan-Memories-(TrendyBeatz.com).mp3',
      title: '347aidan-Memories',
      image: '/Images/music1.png',
      icon: '/Images/play.png',
      type: 'audio/mpeg',
    },
    {
      src: 'https://xclusivepop.work/wp-content/uploads/2022/11/Burna_Boy_-_Alone.mp3',
      title: 'Alone by Burnaboy',
      image: '/Images/music2.png',
      type: 'audio/mpeg',
    },
    {
      src: 'https://cdn3.justnaija.me/uploads/music/2020/08/Burna-Boy-Monsters-You-Made-ft-Chris-Martin-(JustNaija.com).mp3',
      title: 'Monster you made by Burnaboy',
      image: '/Images/music1.png',
      type: 'audio/mpeg',
    },
    {
        src: 'https://cdn.val9ja.com/wp-content/uploads/2024/04/Burna_Boy_Ft_Prince_Swanny_-_Tested_Approved_Trusted.mp3',
        title: 'Tested, Approved & Trusted (feat. Prince Swanny)',
        image: '/Images/music1.png',
        type: 'audio/mpeg',
      },
  ];
  
function Dashboard () {
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
            <ReelsNavBar/>
            <Sidemenu/>
            <div className="flex justify-center items-center pt-[100px]">
                <input className="border-2 py-[5px] px-[30px] w-[30%] outline-none rounded-md bg-transparent text-white text-[18px] text-center" type="text" placeholder="Search" />
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
                        className="w-[22%] cursor-pointer rounded-2xl"
                        src={reel.image}
                        alt={`Cover for ${reel.title}`}
                        onClick={() => (audioRefs.current[index].paused ? playAudio(index) : pauseAudio(index))}
                        />
                        <h2 className="mt-[30px] text-white text-[20px]">{reel.title}</h2>
                        <audio
                          ref={(el) => (audioRefs.current[index] = el)}
                          src={reel.src}
                          autoPlay={false}
                          controls={false}
                        />
                    </div>
                    ))}
                </div>
            </section>
        </>
    )
}
export default Dashboard