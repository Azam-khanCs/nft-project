const Footer = () => {
  return (
    <>
      <div className=" py-6  " style={{ background: " #0F172A" }}>

        <div className="space-y-6 text-white flex flex-wrap md:justify-center md:justify-between md:px-5 px-10 w-[100%]" >

          <div className="w-[100%] md:w-auto space-y-2">
            <p className="font-medium text-[20px]" >Company</p>
            <p className=""  >About</p>
            <p className=""  >Features</p>
            <p className=""  >Works</p>
            <p className=""  >Carears</p>

          </div>

          <div className="w-[100%] md:w-auto space-y-2">
            <p className="font-medium text-[20px]"  >Help</p>
            <p className=""  >Customer Support</p>
            <p className=""  >Delivery Details</p>
            <p className=""  >Terms & Conditions</p>
            <p className=""  >Privacy Policy</p>

          </div>

          <div className="w-[100%] md:w-auto space-y-2">
            <p className="font-medium text-[20px]"  >Resources</p>
            <p className=""  >Free eBooks</p>
            <p className=""  >Development Tutorial</p>
            <p className=""  >How to - Blog</p>
            <p className=""  >CareaYoutube Playlistrs</p>

          </div>

          <div className="w-[100%] md:w-auto space-y-2">
            <p className="font-medium text-[20px]"  >Install App</p>
            <img className="" src='../appstore.svg' />
            <img className="" src='../appstore.svg' />

          </div>
        </div>





        <div className="pt-12 ">
          <hr style={{ border: "0.9px solid #1E293B" }} />

        </div>
        <div className="flex justify-between md:px-5 w-100 flex-wrap md:flex-row  flex-col-reverse" >
          <div className="pt-10 pb-12" >
            <p className="text-[12.6px] text-[#A1A1AA] pr-5 mx-5 md:mx-0 ">
              © Copyright 2023, Made with 💖 by Airdokan and Powered by Webflow
            </p>
          </div>
          <div className="pt-10 pb-12 flex gap-2 mx-5 md:mx-0" >
          <img className=" hover:border hover:border-white-500 hover:rounded-full " src='../twit.svg' />
          <img className=" hover:border hover:border-white-500 hover:rounded-full px-[9.5px] " src='../face.svg' style={{backgroundColor:"#1E293B" , borderRadius:"100%"}}/>
          <img className=" hover:border hover:border-white-500 hover:rounded-full " src='../insta.png' />
          <img className=" hover:border hover:border-white-500 hover:rounded-full " src='../git.svg' />
 
          </div>


        </div>
      </div>

    </>
  )
}

export default Footer