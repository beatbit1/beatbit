import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
function SubTrade () {
    return  (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <div className="flex justify-center items-center pt-[100px]">
                <input className="border-2 py-[5px] px-[30px] w-[30%] outline-none rounded-md bg-transparent text-white text-[18px] text-center" type="text" placeholder="Search" />
            </div>
            <section className="pl-[300px] pt-[10px] mt-[10px]">
                <div className="trade px-[50px] pt-[50px] pb-[90px]">
                    <div className="flex justify-left items-center">
                        <button className="text-white py-[15px] px-[30px] mr-[90px] text-[20px] bg-transparent border-2 w-[27%] outline-none">TOP 13 Trap</button>
                    </div>
                        <div className="flex justify-left items-center ml-[20px] mt-[70px]">
                            <img className="w-[2.5%] mr-[20px]" src="/Images/Play (1).png" alt="" />
                            <p className="text-white text-[20px]">The Wizard</p>
                        </div>
                </div>
                <div className="text-white grid grid-cols-4 gap-4 text-[19px] mt-[30px]">
                    <h2>Price</h2>
                    <h2>Active Listeners</h2>
                    <h2>Market Caps</h2>
                    <h2>Total Rol</h2>
                </div>
                <div className="text-white grid grid-cols-4 gap-4 text-[19px] mt-[30px]">
                    <h2>0.3450btb<span className="text-[#02DF18]">+12%</span></h2>
                    <h2>3K</h2>
                    <h2>$983k</h2>
                    <h2 className="text-[#02DF18]">+28.9%</h2>
                </div>
                <div className="text-white mt-[30px]">
                    <h2>Market Trade</h2>
                    <a href="/"><button className='text-white bg-transparent mt-[20px] border-2 border-white py-[5px] px-[30px] rounded-md text-[20px]' type='button'>no of aud</button></a>
                </div>
                <div className="text-white mt-[20px]">
                    <a href="/"><button className='text-white bg-[#02DF18] mr-[20px] py-[5px] px-[30px] rounded-md text-[20px]' type='button'>Long</button></a>
                    <a href="/"><button className='text-white bg-[#DE0808]  py-[5px] px-[30px] rounded-md text-[20px]' type='button'>Short</button></a>
                </div>
                <div className="text-white mt-[20px]">
                    <a href="/"><button className='text-white bg-transparent border-2 border-white mr-[20px] py-[5px] px-[30px] rounded-md text-[20px]' type='button'>Token Amount</button></a>
                    <a href="/"><button className='text-white bg-[#DE0808]  py-[5px] px-[30px] rounded-md text-[20px]' type='button'>Stake</button></a>
                </div>
                <div className="text-white mt-[30px]">
                    <h1 className="border-b-4 border-b-w border-b-[#DE0808] pb-[10px] w-[18%] text-center">Open Market Trade pool</h1>
                </div>
                <div className="text-white grid grid-cols-5 gap-5 text-[19px] mt-[30px]">
                    <h2>Invested song</h2>
                    <h2>Artist</h2>
                    <h2>Prediction Long</h2>
                    <h2>Trade</h2>
                    <h2>ROI</h2>
                </div>
                <div className="text-white grid grid-cols-5 gap-4 text-[19px] mt-[30px]">
                    <h2>The wizard</h2>
                    <h2>Kevin</h2>
                    <h2>30k audience</h2>
                    <h2>0.3450btb</h2>
                    <h2 className="text-[#02DF18]">0.09 +4%</h2>
                </div>
            </section>
        </>
    )
}
export default SubTrade