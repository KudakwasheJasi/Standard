import React from 'react'

const Features = () => {
  return (
    
    <div id="features">
          <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">

            {/* Whats Different */}
            <div className="flex flex-col space-y-12 md:w-1/2">
               <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                What's different about Manage?
               </h2>
               <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product team.
               </p>
            </div>

         {/* Numbered Lists */}
            <div className="flex flex-col space-y-8 md:w-1/2">
              {/* List item 1 */}
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Heading */}
                <div className="rounded-l-full bg-brightRed md:bg-transparent">
                    <div className="flex-items-center space-x-2">
                        <div className="px-4 py-2 text-white text-bg rounded-full md:py-1 bg-red-500 w-12">
                            01
                        </div>
                        <h3 className="text base font-bold md: md:hidden mt-4 bg-yellow-500 mx-auto ">
                            Track Company-wide progress
                        </h3>
                    </div>
                </div>
                <div>
                    <h3 className="hidden  text-lg font-bold md:block">
                    Track Company-wide progress
                    </h3>
                    <p className="text-darkGrayishBlue">
                        See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestones level all the way done to the smallest of the details. Never lose sight of the bigger picture again.
                    </p>
                </div>
              </div>

               {/* List item 2 */}
               <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Heading */}
                <div className="rounded-l-full bg-brightRed md:bg-transparent">
                    <div className="flex-items-center space-x-2">
                        <div className="px-4 py-2 text-white text-bg rounded-full md:py-1 bg-red-500 w-12">
                            02
                        </div>
                        <h3 className="text base font-bold md: md:hidden mt-4 bg-yellow-500 mx-auto ">
                          Advanced built-in reports
                        </h3>
                    </div>
                </div>
                <div>
                    <h3 className="hidden  text-lg font-bold md:block">
                      Advanced built-in reports
                    </h3>
                    <p className="text-darkGrayishBlue">
                       Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
                    </p>
                </div>
              </div>
               {/* List item 3 */}
               <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Heading */}
                <div className="rounded-l-full bg-brightRed md:bg-transparent">
                    <div className="flex-items-center space-x-2">
                        <div className="px-4 py-2 text-white text-bg rounded-full md:py-1 bg-red-500 w-12">
                            03
                        </div>
                        <h3 className="text base font-bold md: md:hidden mt-4 bg-yellow-500 mx-auto ">
                         Everything you need in one place
                        </h3>
                    </div>
                </div>
                <div>
                    <h3 className="hidden  text-lg font-bold md:block">
                    Everything you need in one place
                    </h3>
                    <p className="text-darkGrayishBlue">
                      Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.
                    </p>
                </div>
              </div>
            </div>
          </div>
    </div>

  )
}

export default Features