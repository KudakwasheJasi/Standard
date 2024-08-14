import React from "react";
import image3 from "../assets/images/testimonial-4.jpg";
import image4 from "../assets/images/testimonial-3.jpg";
import image5 from "../assets/images/testimonial-2.jpg";


const Testimonials = () => {
  return (
    <div id="testimonials">
      {/* Container to heading and testimonials Block */}

      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          What's different About Manage?
        </h2>
        {/* Testimonials Container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-300 md:w-1/3">
            <img src={image3} className="w-16 -mt-14 rounded-full" alt="" />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p className="text-sm text-gray-600">
              "Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className=" hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-300 md:flex md:w-1/3">
            <img src={image4} className="w-16 -mt-14 rounded-full" alt="" />
            <h5 className="text-lg font-bold">Ali Bravo</h5>
            <p className="text-sm text-gray-600">
             "We have been able to cancel so many other subscription since using Manage. There is no more cross-channel confusion and everyone is much more focused"
            </p>
          </div>
                {/* Testimonial 3 */}
                <div className=" hidden  flex-col items-center p-6 space-y-6 rounded-lg bg-gray-300 md:flex md:w-1/3">

                <img src={image5} className="w-16 -mt-14 rounded-full" alt="" />
                <h5 className="text-lg font-bold">Memory Watts</h5>
                <p className="text-sm text-gray-600">
                    "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
                </p>
            </div>
        </div>
          {/* Button */}
        <div className="my-16">
        <a href='#' className="p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-gray-900">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
