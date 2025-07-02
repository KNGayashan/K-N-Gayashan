import React from 'react'

import { logoIconsList } from '../constants'

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex items-center justify-center min-w-[200px] h-20">
      <img 
        src={icon.imgPath} 
        alt={icon.name}
        className="max-h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  )
}

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative overflow-hidden bg-white">

      {/* Marquee container */}
      <div className="h-52 flex items-center overflow-hidden whitespace-nowrap group">
        <div className="flex items-center md:gap-12 gap-8 animate-marquee group-hover:pause-animation w-max">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`${icon.name}-1-${index}`} icon={icon} />
          ))}
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`${icon.name}-2-${index}`} icon={icon} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .pause-animation:hover .animate-marquee {
          animation-play-state: paused;
        }

        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default LogoSection