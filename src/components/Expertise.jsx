import React from 'react'
import SpotlightCard from './animated/SpotlightCard'
const Expertise = () => {
    return (
        <section className='pt-8 pb-24 text-white flex flex-col items-center bg-transparent' id="experience">
            <h2 className="text-5xl md:text-7xl font-bold mb-20 tracking-tighter" >My <span className="text-yellow-400">Expertise</span></h2>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl px-6 w-full'>
                <SpotlightCard
                    className="p-8 flex flex-col gap-6 h-full"
                    spotlightColor="rgba(250, 204, 21, 0.1)"
                >
                    <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 flex items-center justify-center border border-yellow-400/20">
                        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    
                    <h3 className="text-3xl font-bold tracking-tight">
                        Software<br />
                        Development
                    </h3>

                    <p className="text-white/50 text-lg leading-relaxed">
                        Skilled in several programming languages with solid knowledge of DSA, OOP, and core computer science fundamentals.
                    </p>
                </SpotlightCard>

                <SpotlightCard
                    className="p-8 flex flex-col gap-6 h-full"
                    spotlightColor="rgba(250, 204, 21, 0.1)"
                >
                    <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 flex items-center justify-center border border-yellow-400/20">
                        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                    </div>

                    <h3 className="text-3xl font-bold tracking-tight">
                        Fullstack<br />
                        Engineering
                    </h3>

                    <p className="text-white/50 text-lg leading-relaxed">
                        Building end-to-end applications using React on the frontend and Node.js on the backend, with a focus on performance.
                    </p>
                </SpotlightCard>

                <SpotlightCard
                    className="p-8 flex flex-col gap-6 h-full"
                    spotlightColor="rgba(250, 204, 21, 0.1)"
                >
                    <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 flex items-center justify-center border border-yellow-400/20">
                        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>

                    <h3 className="text-3xl font-bold tracking-tight">
                        Mobile<br />
                        Solutions
                    </h3>

                    <p className="text-white/50 text-lg leading-relaxed">
                        Building cross-platform mobile applications using React Native with a focus on clean modular UI and performance.
                    </p>
                </SpotlightCard>
            </div>
        </section>
    )
}


export default Expertise
