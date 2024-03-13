import React, { useLayoutEffect, useState } from 'react'
import { agencyData } from '../../../Global/Data/Homepage'
import { NavLink } from 'react-router-dom';
const Hero = () => {
  const [agencyNum, setAgencyNum] = useState(10);

  const updateAgencyNum = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 767) {
      setAgencyNum(10)
    }
    else if (screenWidth <= 1023) {
      setAgencyNum(6)
    }
    else if (screenWidth <= 1279) {
      setAgencyNum(8)
    } else {
      setAgencyNum(10)
    }
  }
  useLayoutEffect(() => {
    updateAgencyNum();
    window.addEventListener('resize', updateAgencyNum);
    return () => {
      window.removeEventListener('resize', updateAgencyNum);
    }
  }, [])

  return (
    <section className='hero-wrapper bg-waves section-break'>
      <div className="container mx-auto">
        <div className="heading-wrapper mb-6">
          <h1 className='heading'>Agency Directory</h1>
        </div>
        <div className="hero-content text-center max-w-[1140px] mx-auto relative py-6">
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-center gap-6">
            {agencyData
              .filter(item => item.rating >= 1)
              .sort((a, b) => b.rating - a.rating)
              .slice(0, agencyNum)
              .map((item, index) => (
                <div className='xl:col-auto col-span-1' key={index}>
                  <div className="hero-box">
                    <NavLink to={'/'}>
                      <figure>
                        <img src={item.logo} alt={item.name} />
                      </figure>
                      <h3>{item.name}</h3>
                    </NavLink>
                  </div>
                </div>
              ))}
          </div>
          <div className='absolute -top-[15%] -left-[18%] xl:block hidden'>
            <img src="./assets/images/hero.png" alt="" />
          </div>
          <div className='absolute bottom-0 -right-[18%] xl:block hidden'>
            <img src="./assets/images/hero1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )

}

export default Hero