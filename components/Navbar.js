import React, { useState } from 'react'

const Navbar = () => {
  const[dis,setDis]=useState('hidden');
  function show(){
    if(dis =='hidden'){
      setDis('block');
    }else{
      setDis('hidden');
    }
  }
  return (
    <>
    

     <nav class="flex items-center justify-between flex-wrap  p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
   <img src='../logo1.svg'/>
  </div>
  <div class="block lg:hidden">
    <button onClick={show} class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class={`w-full ${dis} flex-grow lg:flex lg:items-center lg:w-auto`}>
    <div class="text-sm lg:flex-grow md:space-x-12 md:ml-12">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0  hover:text-[#0066FF] mr-4">
        Home
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0  hover:text-[#0066FF] mr-4">
        Fetaures
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0  hover:text-[#0066FF] mr-4">
        Testimonial
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0  hover:text-[#0066FF] mr-4">
        Blogs
      </a>
    </div>
    <div>
      <a href="#" class=" md:w-auto w-full inline-block text-sm md:px-4 px-[140px] py-3 leading-none border rounded text-white bg-blue-600 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 ">Download</a>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar