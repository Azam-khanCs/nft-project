import React from 'react'
import { Carousel } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Media = () => {
  return (
    <>


  <div className=" md:flex   relative justify-end mt-20  items-center md:mb-20 md:mx-5">

<div className=' md:absolute md:left-0  md:h-auto md:w-auto w-[50%] h-[50%] mx-auto'>
    <img src="../boy.png" />


  </div>

  <div className='md:w-[76%] w-[100%] bg-[#F5F9FF] py-16 rounded-lg mb-2  flex  justify-center '>
    <div className='w-[80%] '>

      <div className='pb-10'>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div className='flex md:block justify-center  '>

        <div className=''>

          <p className='text-[20px] font-medium py-2 	'>John Doe, UX Designer</p>
          <img src="../facebook.svg" />

        </div>



      </div>
    </div>
  </div>
  <div className='flex gap-4 absolute md:top-[100%] md:right-[5%] top-[-4%] right-4'>
    <img src="../right.svg" className=" w-10 h-10" />
    <img src="../right.svg" className=" w-10 h-10" />
  </div>
</div>
 
      

    </>
  )
}

export default Media;




















