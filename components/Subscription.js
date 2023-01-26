const Subscription = () => {
    return (
        <>

            <div className="bg-[#007AFF] py-12 md:px-0 px-6">
                {/* <div> */}
                <div className="text-center pt-6">
                    <p className="font-bold text-5xl text-center text-white">Download our app for free </p>
                    <div className=" flex justify-center">
                        <p className=" w-[550px] text-center text-white py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare</p>
                    </div>

                </div>

                <div className="flex justify-center flex-wrap ">
                    <div className="py-6 ">
                        <input type="email" placeholder="Enter your email" className=" rounded  mr-6 px-3 py-3 md:w-[500px] w-full mb-3 md:mb-0" />
                        <button type="button" className="bg-black md:w-auto w-full text-white px-5 py-3 rounded w-100">Download App</button>
                        <p className="text-white py-3">By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Subscription