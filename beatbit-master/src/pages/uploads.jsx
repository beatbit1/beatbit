import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
import React, { useState } from 'react';
function Uploads () {
    const [audioFiles, setAudioFiles] = useState([]);
    const [audioTitle, setAudioTitle] = useState('');
    const [audioDescription, setAudioDescription] = useState('');
    const [audioImage, setAudioImage] = useState(null);
    const [audioFile, setAudioFile] = useState(null);
    const handleUpload = (e) => {
        e.preventDefault();
    
        if (!audioFile) {
          alert("Please select an audio file to upload.");
          return;
        }
    
        // Create a new audio object with the provided details
        const newAudio = {
          id: Date.now(),
          title: audioTitle,
          description: audioDescription,
          image: audioImage ? URL.createObjectURL(audioImage) : null,
          file: URL.createObjectURL(audioFile)
        };
        setAudioFiles([...audioFiles, newAudio]);

        // Reset form fields
        setAudioTitle('');
        setAudioDescription('');
        setAudioImage(null);
        setAudioFile(null);
    }
    
    return (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <div className="flex justify-center items-center pt-[100px]">
                <input className="border-2 py-[5px] px-[30px] w-[30%] outline-none rounded-md bg-transparent text-white text-[18px] text-center sm:w-[90%] md:w-[90%] lg:w-[30%]" type="text" placeholder="Search" />
            </div>
            <section className="pl-[300px] pt-[30px] sm:pl-[20px] md:pl-[30px] lg:pl-[300px]">
                <h1 className="text-white text-[20px]">UPLOAD</h1>
                <div className="text-white relative">
                    <div className="border-2 border-neutral-800 mt-[30px] flex justify-center items-center flex-col py-[50px] px-[30px] w-[60%] sm:w-[90%] md:w-[80%] lg:w-[60%]">
                        <img className="w-[15%]" src="/Images/Upload.png" alt="" />
                        <div className="mt-[60px] flex justify-center items-center">
                            <h1 className="text-white text-[20px] mr-[40px]">Drag and drop or</h1>
                            <input
                                className="flex py-[10px] px-[10px] rounded-md text-[15px] font-medium shadow-md text-white hover:bg-[#ff014f] hover:text-white bg-[#DE0808] sm:hidden md:hidden lg:flex"
                                type="file"
                                accept="audio/*"
                                onChange={(e) => setAudioFile(e.target.files[0])}
                                required
                            />
                        </div>
                    </div>
                    <p className="text-white text-[20px] tracking-widest mt-[30px]">Enter Title</p>
                    <input value={audioTitle} onChange={(e) => setAudioTitle(e.target.value)} required className="mt-[10px] w-[60%] p-[10px] border-2 border-neutral-800 bg-transparent outline-none sm:w-[90%] md:w-[80%] lg:w-[60%]" type="text" />
                    <p className="text-white text-[20px] tracking-widest mt-[30px]">Description</p>
                    <input  value={audioDescription} onChange={(e) => setAudioDescription(e.target.value)} required className="mt-[10px] w-[60%] p-[10px] border-2 border-neutral-800 bg-transparent outline-none sm:w-[90%] md:w-[80%] lg:w-[60%]" type="text" />
                </div>
                <div className="flex mt-[30px] relative justify-left items-center">
                    <p className="text-white mr-[30px] py-[20px] px-[30px] border-2 border-neutral-800 bg-transparent">Upload Ablum</p>
                    <input
                        className="flex py-[10px] px-[10px] rounded-md text-[15px] font-medium shadow-md text-white hover:bg-[#ff014f] hover:text-white bg-[#DE0808] sm:hidden md:hidden lg:flex"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setAudioImage(e.target.files[0])}
                    />
                </div>
                <a href="/connect" rel="noopener noreferrer"><button  className="flex py-[10px] px-[70px] mt-[20px] rounded-md text-[15px] font-medium shadow-md text-white hover:bg-[#ff015f] hover:text-white bg-[#DE0808] sm:hidden md:hidden lg:flex" type="button">Upload Image</button></a>
                <div className="mt-[20px]">
                    <label className="text-white text-[22px]" htmlFor="">Category</label>
                    <div className="flex justify-left items-center">
                        <select className="outline-none w-[20%] mr-[10px] mt-[20px] bg-transparent border-2 border-neutral-800 py-[9px] px-[10px] cursor-pointer text-[20px] sm:w-[30%] md:w-[30%] lg:w-[20%]" name="" id="">
                            <option value="">Pop</option>
                            <option value="">Rock</option>
                            <option value="">Jazz</option>
                        </select>
                        <div className="flex mt-[10px]">
                            <input className="mr-[10px]" type="checkbox" name="" id="" />
                            <h2 className="text-white">Short reels</h2>
                        </div>
                    </div>
                </div>
                <a href="/connect" rel="noopener noreferrer"><button  className="flex justify-center  py-[10px] px-[70px] mt-[30px] rounded-md text-[15px] font-medium shadow-md text-white hover:bg-[#ff014f] hover:text-white bg-[#DE0808] w-[50%] sm:hidden md:hidden lg:flex" type="submit">Upload & Publish</button></a>
            </section>
        </>
    )
}
export default Uploads