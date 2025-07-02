import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className="footer">
     <div className="footer-container">
          <div className="flex flex-col justify-center md:items-start items-center">
               <a href="https://drive.google.com/uc?export=download&id=1PtM3m7Tgssdx4nHiNrRo8Wl9sYe7LfAT">Download CV</a>
          </div>
          <div className="socials">
               {socialImgs.map((img) => (
                    <a href={img.url} className="icon" target='_blank'>
                         <img src={img.imgPath} alt="" />
                    </a>
               )
               )}
          </div>
          <div className="flex flex-col justify">
               <p className="text-center md:text-end">
               © {new Date().getFullYear()} K N GAYASHAN | All Rights Reserved.
               </p>
          </div>
     </div>
    </footer>
  )
}

export default Footer
