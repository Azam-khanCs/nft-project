const Blogs = () => {
    return (
        <>
                <div className="py-12 px-12">
                    <p className="font-bold md:text-5xl text-4xl ">Our Latest News</p>
                </div>

            <div className="flex justify-evenly px-10 pb-12 w-100 flex-wrap md:flex-row flex-column">

                
                <div className=" w-32.5 px-2 md-w-100  hover:shadow rounded ">
                    <img className="rounded" src='../m1.svg' alt="" />
                    <div className="px-7">
                        <p className="text-[#505056] pt-6 ">UIUX</p>
                        <p className=" font-bold text-[24px] w-[258px] py-6"> Our iOS app has a new design...</p>
                        <p className="font-[18px] text-[#505056]">January 1, 2022</p>
                    </div>
                </div>
                <div className=" w-32.5 px-2 md-w-100  hover:shadow rounded ">
                    <img className="rounded" src='../m2.svg' alt="" />
                    <div className="px-7">
                        <p className="text-[#505056] pt-6 ">UIUX</p>
                        <p className=" font-bold text-[24px] w-[258px] py-6"> Our iOS app has a new design...</p>
                        <p className="font-[18px] text-[#505056]">January 1, 2022</p>
                    </div>
                </div>
                <div className=" w-32.5 px-2 md-w-100  hover:shadow rounded ">
                    <img className="rounded" src='../m3.svg' alt="" />
                    <div className="px-7">
                        <p className="text-[#505056] pt-6 ">UIUX</p>
                        <p className=" font-bold text-[24px] w-[258px] py-6"> Our iOS app has a new design...</p>
                        <p className="font-[18px] text-[#505056]">January 1, 2022</p>
                    </div>
                </div>

             

            </div>

        </>
    )
}

export default Blogs