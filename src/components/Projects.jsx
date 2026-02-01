import React from 'react'
import ElectricBorder from './animated/ElectricBorder'
import { motion } from 'motion/react';

// import motion from "motion/react"
const Projects = () => {
  return (
    <div className='h-full py-4 text-white'>
      <h1 className='text-5xl font-bold text-center'>
        Projects
      </h1>
      <div className=' h-full flex'>
        <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.12}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <motion.div
          whileHover={{scale:2}}
          >
            <p style={{ margin: '6px 0 0', opacity: 0.8 }}>
              glow
            </p>
          </motion.div>
        </ElectricBorder>
      </div>
    </div>
  )
}

export default Projects
