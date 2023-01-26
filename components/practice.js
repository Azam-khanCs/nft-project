
const Practice = () => {
  return (
    <>

<div class="relative w-full h-64 overflow-hidden">
  <div class="absolute inset-0 flex">
    <div class="w-full h-full overflow-hidden">
      <div class="relative">
        <div class="absolute inset-0 flex">
          <div class="w-1/2 h-full">
            <img src="frame2.svg" alt="image1" class="object-cover w-full h-full"/>
          </div>
          <div class="w-1/2 h-full">
            <img src="frame1.svg" alt="image2" class="object-cover w-full h-full"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="absolute top-0 right-0 mt-2 mr-2">
    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
    </svg>
  </button>
</div>
    </>
  )
}

export default Practice