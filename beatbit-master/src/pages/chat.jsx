import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
function Ai () {
    return (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <section className="pl-[300px] pt-[20px] sm:pl-[20px] md:pl-[30px] lg:pl-[300px]">
                <div className="flex justify-center items-center flex-col mt-[200px]">
                    <h2 className="text-[#ECECEC] text-center text-[30px] tracking-[5px] mb-[40px]">What can I help with?</h2>
                    <input className="bg-[#2E2F2F] font-normal outline-none border-grey-500 text-white shadow-md rounded-[20px] text-[20px] w-[60%] px-[40px] py-[20px] sm:w-[90%] md:w-[90%] lg:w-[60%]" type="text" placeholder="Message ChatAi" />
                </div>
                {/* <div className="flex justify-center items-center mt-[120px]">
                    <img className="w-[5%] mr-[10px]" src="/Images/Smiling Face With Hearts.png" alt="" />
                    <input className=" w-[50%] px-[20px]  py-[10px] border-2 border-gray-500 rounded-md bg-[#434242] mr-[30px] outline-none text-white" type="text" />
                    <a href="/"><button className='text-white bg-[#DE0808] py-[5px] px-[30px] rounded-md text-[20px]' type='button'>Send</button></a>
                </div> */}
            </section>
        </>
    )
}
export default Ai