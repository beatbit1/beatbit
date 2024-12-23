function Footer() {
    return (
        <>
            <div className="flex justify-start pl-10 pb-6 items-center self-center sm:flex-col md:flex-col lg:flex-row sm:pl-4 md:pl-4 lg:pl-10">
                <div className="flex justify-start items-center sm:mb-[20px] md:mb-[20px] lg:mb-0">
                    <img className="w-[25%] sm:w-[16%] md:w-[20%] lg:w-[25%]" src="/Images/logo.png" alt="" />
                    <a className="text-[25px] text-white font-medium sm:text-[20px] md:text-[23px] lg:text-[25px]" href="/">BEATBIT</a>
                </div>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols3">
                    <div className="flex flex-col text-white mr-[90px] sm:mr-[20px] md:mr-[20px] lg:mr-[90px] sm:flex-row md:flex-row lg:flex-col">
                        <a className="text-[20px] pb-[10px] sm:text-[17px] md:text-[18px] lg:text-[20px] sm:mr-[20px] md:mr-[20px] lg:mr-0" href="">About</a>
                        <a className="text-[20px] pb-[10px] sm:text-[17px] md:text-[18px] lg:text-[20px] sm:mr-[20px] md:mr-[20px] lg:mr-0"  href="">Media</a>
                        <a className="text-[20px] pb-[10px] sm:text-[17px] md:text-[18px] lg:text-[20px]" href="">Company</a>
                    </div>
                    <div className=" flex flex-col text-white mr-[90px] sm:mr-[20px] md:mr-[20px] lg:mr-[90px] sm:flex-row md:flex-row lg:flex-col">
                        <a className="text-[20px] pb-[10px] sm:text-[17px] md:text-[18px] lg:text-[20px] sm:mr-[20px] md:mr-[20px] lg:mr-0" href="">Artist</a>
                        <a className="text-[20px] pb-[10px] sm:text-[17px] md:text-[18px] lg:text-[20px] sm:mr-[20px] md:mr-[20px] lg:mr-0" href="">Webplayer</a>
                        <a className="text-[20px] pb-[10px] sm:text-[17px] md:text-[18px] lg:text-[20px]" href="">Whitepaper</a>
                    </div>
                    <div className="flex flex-col text-white  sm:flex-row md:flex-row lg:flex-col">
                        <a className="text-[20px] pb-[10px] sm:text-[17px] md:text-[18px] lg:text-[20px] sm:mr-[20px] md:mr-[20px] lg:mr-0" href="">Discord</a>
                        <a className="text-[20px] pb-[10px] sm:text-[17px] md:text-[18px] lg:text-[20px] sm:mr-[20px] md:mr-[20px] lg:mr-0" href="">Instagram</a>
                        <a className="text-[20px] pb-[10px] sm:text-[17px] md:text-[18px] lg:text-[20px]" href="">Twitter</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer