import { useEffect } from 'react';
import Navbar from '../components/nav.jsx';
import Footer from '../components/footer.jsx'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { ReactTyped } from "react-typed";
// import ProgressBar from "@ramonak/react-progress-bar";
// import Video from '../assets/video.mp4';

function LandingPage () {
   
    return (
        <>
            <Navbar/>
            <div className="header flex justify-left pt-[190px] pr-[100px] pb-[150px] pl-[80px] items-center text-white bg-[#1E1E1E] sm:pb-[50px] md:pb-[70px] lg:pb-[150px] sm:pr-[30px] sm:pl-[30px] lg:pr-[100px] lg:pl-[80px]" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className="w-[95%] text-left sm:w-[95%] sm:text-left md:text-left lg:text-left">
                    <h2 className="tracking-widest mb-4 text-[35px] w-[80%] text-white z-1000 font-bold sm:text-[20px] md:text-[27px] lg:text-[35px]">REVOLUTIONIZE  MUSIC CREATION  ENRICHING ARTIST ON THE BLOCKCHAIN</h2>
                    <p className='w-[50%] text-white text-bold text-[20px] mb-7 sm:text-[16px] md:text-[16px] lg:text-[20px] tracking-widest sm:w-full md:w-[70%] lg:w-[60%] lg:text-[20px]'>unleash your creativity : Release,Remix,Collaborate and earn with our blockchain powered platform</p>
                </div>
            </div>
            <section id="" className='flex justify-center items-center text-center flex-col p-20 sm:p-[25px] md:p-[25px] lg:p-20'  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className='text-white bg-red-700 py-4 px-4 rounded-2xl w-[40%] sm:w-full md:w-full lg:w-[40%]'>
                    <h1 className='text-[35px] sm:text-[20px] md:text-[25px] lg:text-[35px]'>Create, Share, and Earn</h1>
                    <p className='text-[20px]'>From NFT releases to collaborative projects, turn every musical endeavor into an earning opportunity.</p>
                </div>
            </section>
            <div>
                <div className='grid grid-cols-3 gap-4 pl-[70px] text-center text-white sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:pl-[20px] md:pl-[20px] lg:pl-[70px]'>
                    <h2 className='border-solid border-2 py-[25px] w-[60%] rounded-2xl border-[#FD3030] cursor-pointer sm:w-[80%] md:w-[80%] lg:w-[60%]'>lyrics writer and beat contructor</h2>
                    <h2 className='border-solid border-2 py-[25px] w-[60%] rounded-2xl border-[#FD3030] cursor-pointer sm:w-[80%] md:w-[80%] lg:w-[60%]'>Music bounty hunt</h2>
                    <h2 className='border-solid border-2 py-[25px] w-[60%] rounded-2xl border-[#FD3030] cursor-pointer sm:w-[80%] md:w-[80%] lg:w-[60%]'>virtual jam Sessions</h2>
                </div>
                <div className='grid mt-[35px] grid-cols-3 gap-4 pl-[70px] text-center text-white sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:pl-[20px] md:pl-[20px] lg:pl-[70px]'>
                    <h2 className='border-solid border-2 py-[25px] w-[60%] rounded-2xl border-[#FD3030] cursor-pointer sm:w-[80%] md:w-[80%] lg:w-[60%]'>Album pools</h2>
                    <h2 className='border-solid border-2 py-[25px] w-[60%] rounded-2xl border-[#FD3030] cursor-pointer sm:w-[80%] md:w-[80%] lg:w-[60%]'>Fan powered A&R</h2>
                    <h2 className='border-solid border-2 py-[25px] w-[60%] rounded-2xl border-[#FD3030] cursor-pointer sm:w-[80%] md:w-[80%] lg:w-[60%]'>Remixes DAOs</h2>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-4 mt-[40px] pl-[70px] text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:pl-[20px] md:pl-[20px] lg:pl-[70px]'>
                <img className='w-[90%] h-[90%] object-contain' src="/Images/artist Images/ar1.png" alt="" srcSet="" />
                <img className='w-[90%] h-[90%] object-contain' src="/Images/artist Images/ar2.png" alt="" srcSet="" />
                <img className='w-[80%] h-[90%] object-contain' src="/Images/artist Images/ar3.png" alt="" srcSet="" />
                <img className='w-[80%] h-[90%] object-contain' src="/Images/artist Images/ar4.png" alt="" srcSet="" />
                <img className='w-[80%] h-[90%] object-contain' src="/Images/artist Images/ar5.png" alt="" srcSet="" />
            </div>
            <p className='pl-[70px] text-white text-[25px] w-[70%] tracking-widest sm:w-[80%] md:w-[80%] lg:w-[70%] sm:text-[17px] md:text-[19px] lg:text-[25px] sm:pl-[20px] md:pl-[20px] lg:pl-[70px]'>unleash your creativity with our Lyrics Writer and Beat Constructor, empowering you to craft captivating lyrics and innovative beats effortlessly, enhancing your musical masterpieces.</p>
            <section id='' className='music flex justify-center items-left flex-col pb-[120px] pt-[90px] text-center text-white pl-[70px] mt-[20px] sm:pb-[50px] md:pb-[50px] lg:pb-[120px] sm:pt-[30px] md:pt-[30px] lg:pt-[90px] sm:pl-[20px] md:pl-[20px] lg:pl-[70px]'  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <h1 className='text-[40px] mb-[40px] sm:text-[27px] md:text-[30px] lg:text-[40px]'>Music Quest Challenges</h1>
                <p className='text-[37px] w-[69%] text-left tracking-widest sm:w-[90%] md:w-[90%] lg:w-[69%] sm:text-[20px] md:text-[27px] lg:text-[37px]'>Launch weekly music quests where users complete specific tasks (like creating remixes, voting in DAOs, or participating in jam sessions) to earn exclusive rewards.</p>
            </section>
            <section className='pl-[70px] text-white flex justify-center items-left flex-col pb-[10px] pt-[50px] sm:pl-[20px] md:pl-[20px] lg:pl-[70px]'>
                <h1 className='flex justify-center items-center pb-[30px] text-[30px] w-[50%] tracking-widest sm:w-[90%] md:w-[80%] lg:w-[50%] sm:text-[20px] md:text-[27px] lg:text-[30px]'>Enjoy your Music content seamlessly with any interruption and provide engagement to your favorite music contents</h1>
                <div className='grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3'>
                    <div className='p1 py-[25px] px-[20px] rounded-xl w-[70%] sm:w-[90%] md:w-[90%] lg:w-[70%]'>
                        <h1 className='text-[30px] pb-[20px] sm:text-[25px] md:text-[27px] lg:text-[30px]'>Remix DAOs</h1>
                        <p className='text-[20px] w-[90%] sm:text-[17px] md:text-[18px] lg:text-[20px]'>Decentralized Autonomous Organizations (DAOs) for remix communities. Members stake tokens to vote on remixes and earn rewards based on the success of the remixes</p>
                    </div>
                    <div className='p3 py-[25px] px-[20px] rounded-xl w-[70%] sm:w-[90%] md:w-[90%] lg:w-[70%]'>
                        <h1 className='text-[30px] pb-[20px] sm:text-[25px] md:text-[27px] lg:text-[30px]'>Music Bounty Hunt</h1>
                        <p className='text-[20px] w-[90%] sm:text-[17px] md:text-[18px] lg:text-[20px]'>Create post "bounties" for remix competitions. Participants stake tokens to enter and winners receive rewars, from a shared pool</p>
                    </div>
                    <div className='p2 py-[25px] px-[20px] rounded-xl w-[70%] sm:w-[90%] md:w-[90%] lg:w-[70%]'>
                        <h1 className='text-[30px] pb-[20px] sm:text-[25px] md:text-[27px] lg:text-[30px]'>Music Album Pools</h1>
                        <p className='text-[20px] w-[90%] sm:text-[17px] md:text-[18px] lg:text-[20px]'>Albums are turned into liquidity pool. Fans stake tokens in these pools, earning a share of the streaming revenue</p>
                    </div>
                </div>
            </section>
            <section className='sg pl-[70px] text-white flex justify-center items-center flex-col pb-[120px] pt-[60px] sm:pb-[90px] md:pb-[95px] lg:pb-[120px] sm:pl-[20px] md:pl-[20px] lg:pl-[70px]'>
                <h1 className='text-[57px] pb-[20px] text-center tracking-widest sm:text-[27px] md:text-[30px] lg:text-[57px]'>SONG MINING</h1>
                <p className='text-[30px] w-[60%] tracking-widest pb-[30px] text-left sm:w-[90%] md:w-[90%] lg:w-[60%] sm:text-[18px] md:text-[25px] lg:text-[30px]'>Creators release tracks as NFTs. Fans mine these NFTs by staking tokens, earning rewards based on the popularity of the track</p>
                <a className='flex justify-center items-center w-[15%] bg-red-600 rounded-md sm:w-[70%] md:w-[70%] lg:w-[15%]' href=""><button className='text-[25px] px-[10px] py-[10px] sm:text-[17px] md:text-[18px] lg:text-[25px]'>Join us</button></a>
            </section>
            <section className='pl-[70px] text-white pb-[120px] pt-[50px] sm:pl-[20px] md:pl-[20px] lg:pl-[70px]'>
                <h1 className='text-[40px] tracking-widest w-[60%] pb-[30px] sm:w-[90%] md:text-[90%] lg:text-[60%] sm:text-[20px] md:text-[29px] lg:text-[40px]'>Beatbit  Enrich creators and audiences Relationship</h1>
                <div className='grid grid-cols-3 gap-4 w-[90%] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <h2 className='bg-red-600 py-[10px] px-[30px] w-[40%] rounded-md text-[20px] sm:text-[16px] md:text-[18px] lg:text-[20px] sm:w-[80%] md:w-[80%] lg:w-[40%]'>Beatbit Studio</h2>
                    <h2 className='bg-red-600 py-[10px] px-[30px] w-[50%] rounded-md text-[20px] sm:text-[16px] md:text-[18px] lg:text-[20px] sm:w-[80%] md:w-[80%] lg:w-[40%]'>DEX Music Exchange</h2>
                    <h2 className='bg-red-600 py-[10px] px-[30px] w-[50%] rounded-md text-[20px]  sm:text-[16px] md:text-[18px] lg:text-[20px] sm:w-[80%] md:w-[80%] lg:w-[40%]'>Trade, learn and Earn</h2>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default LandingPage