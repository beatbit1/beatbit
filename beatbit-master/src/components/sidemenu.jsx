function Sidemenu () {
    return (
        <>
            <div className="fixed pt-[90px] bg-[#2E2F2F] w-[20%] h-[100vh] sm:hidden md:hidden lg:block" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                <aside className="text-white">
                    <ul className="space-y-2 text-[20px]">
                        <li className="hover:bg-gray-800 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]"><a href="/dashboard">Reels</a></li>
                        <li className="hover:bg-gray-800 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]"><a href="/uploads">Upload</a></li>
                        <li className="hover:bg-gray-800 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]"><a href="/subchart">Chart</a></li>
                        <li className="hover:bg-gray-800 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]"><a href="/pools">Pools</a></li>
                        <li className="hover:bg-gray-800 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]"><a href="/bounty">Bounty</a></li>
                        <li className="hover:bg-gray-800 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]"><a href="/ai">Ai</a></li>
                    </ul>
                </aside>
            </div>
    
        </>
    )
}
export default Sidemenu