
import Navbar from '../components/Navbar.js'
import Header from '../components/Header'
import User from '../components/User'
import Cart1 from '../components/Cart1'
import Cart2 from '../components/Cart2';
import Carousel from '../components/Carousel.js';
import Media from '../components/Media';
import Subscription from '../components/Subscription.js'
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';
import Media2 from '../components/Media2'
import Media1 from '../components/Media1'
const index = () => {
  return (
    <>
     <div className='bg-[#F8F9FF] '>
      <Navbar  />
      <Header />
    </div>
    <User />
    <Cart1 />
    <Cart2 />
  <Media1 />
    <Blogs />
     <Media2 />
    <Subscription />
     <Footer />
     
      
{/* <Media1 /> */}

    </>
  )
}

export default index