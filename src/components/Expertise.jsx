import React from 'react'
import SpotlightCard from './animated/SpotlightCard'
const Expertise = () => {
    return (
        <div className='h-full text-white flex flex-col items-center'>
            <h2 className="text-4xl md:text-5xl font-bold mb-10" >My Expertise</h2>
            <div className='flex h-[55vh] w-[150vh]  justify-between'>
                <SpotlightCard
                    className="custom-spotlight-card p-6 flex flex-col gap-4 w-[40vh]"
                    spotlightColor="rgba(224, 46, 6, 0.2)"
                >
                    <h3 className="text-2xl font-bold leading-tight">
                        <span className="text-red-400">Software</span><br />
                        Development
                    </h3>

                    <p className="text-white/80 text-sm leading-relaxed ">
                        Skilled in several programming languages with solid knowledge of DSA, OOP, and core CS fundamentals.
                    </p>
                </SpotlightCard>
                <SpotlightCard
                    className="custom-spotlight-card p-6 flex flex-col gap-4 w-[40vh]"
                    spotlightColor="rgba(224, 46, 6, 0.2)"
                >
                    <h3 className="text-2xl font-bold leading-tight">
                        <span className="text-red-400">Fullstack</span> <br />
                        Dev
                    </h3>

                    <p className="text-white/80 text-sm leading-relaxed">
                      Building end-to-end applications using React on the frontend and Node.js on the backend, with a focus on performance and scalability.
                    </p>
                </SpotlightCard>
                <SpotlightCard
                    className="custom-spotlight-card p-6 flex flex-col gap-4 w-[40vh]"
                    spotlightColor="rgba(224, 46, 6, 0.2)"
                >
                    <h3 className="text-2xl font-bold leading-tight">
                        <span className="text-red-400">Mobile</span> <br />
                        Development
                    </h3>

                    <p className="text-white/80 text-sm leading-relaxed">
                       Building cross-platform mobile applications using React Native with a focus on performance and clean UI.
                    </p>
                </SpotlightCard>

            </div>
        </div>
    )
}

export default Expertise
