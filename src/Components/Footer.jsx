import React from 'react'
import image4 from '../assets/images/instagram-new.png'
import image5 from '../assets/images/youtube-play.png'
import image6 from '../assets/images/twitter--v1.png'
import image7 from '../assets/images/linkedin.png'
import image12 from '../assets/images/logo.png'

const Footer = () => {
  return (
    /* Footer */
    <footer className="bg-gray-900">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
            {/* Logo and social links container */}

           <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">

            <div className="mx-auto my-6 text-center text-white md:hidden">
                Copyright &copy; 2022, All Rights Reserved
            </div>
              {/* Logo */}

              <div>
                <img src={image12} className="h-8" alt="" />
              </div>
              {/* Social links Container */}
            <div className="flex justify-center space-x-4">
                {/* link 1 */}
                <a href="#">
                    <img src={image4} alt="" className="h-8" />
                </a>
                  {/* link 2 */}
                  <a href="#">
                    <img src={image5} alt="" className="h-8" />
                </a>
                  {/* link 3 */}
                  <a href="#">
                    <img src={image6} alt="" className="h-8" />
                </a>
                  {/* link 4 */}
                  <a href="#">
                    <img src={image7} alt="" className="h-8" />
                </a>
            </div>
           </div>
           {/* List container */}
           <div className="flex justify-around space-x-32">
             <div className="flex flex-col space-y-3 text-white">
                <a href="#" className="hover:text-red-300">Home</a>
                <a href="#" className="hover:text-red-300">Pricing</a>
                <a href="#" className="hover:text-red-300">Products</a>
                <a href="#" className="hover:text-red-300">About</a>
             </div>
             <div className="flex flex-col space-y-3 text-white">
                <a href="#" className="hover:text-red-300">Careers</a>
                <a href="#" className="hover:text-red-300">Community</a>
                <a href="#" className="hover:text-red-300">Privacy Policy</a>
             </div>
           </div>
           {/* Input Container */}

           <div className="flex flex-col justify-between">
             <form>
                <div className="flex space-x-3">
                    <input type="text" className="flex-1 px-4 rounded-full focus:outline-none" placeholder="Apdated in your inbox" />
                    <button className="px-6 py-2 text-white rounded-full bg-red-500 hover:bg-blue-400 focus:outline-none">
                        Go
                    </button>
                </div>
             </form>
             <div className="hidden text-white md:block">
                Copyright &copy; 2022, All Rights Reserved
             </div>
           </div>
        </div>

    </footer>
  )
}

export default Footer