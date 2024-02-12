import React, {useState} from 'react'

import LightButton from '../assets/website/light-mode-button.png'
import DarkButton from '../assets/website/dark-mode-button.png'

const Darkmode = () => {
  const [theme, settheme] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  console.log(theme);

  return (
    <div className='relative'>
      <img onClick={() => settheme(theme === 'dark' ? 'light' : 'dark')} src={LightButton} alt="" className={`w-12 cursor-pointer absolute right-0 z-10 transition-all duration-300 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}/>
      <img onClick={() => settheme(theme === 'dark' ? 'light' : 'dark')} src={DarkButton} alt="" className={`w-12 cursor-pointer ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}/>
    </div>
  )
}

export default Darkmode