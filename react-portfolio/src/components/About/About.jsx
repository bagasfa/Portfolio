import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './About.module.css'
import {getImageUrl} from '../../helpers/utils.js'

export const About = () => {
  useEffect(() => {AOS.init()}, [])

  let hireMe = () => {
    window.open('https://wa.link/y6i1u4','_blank')
  }

  let downloadCV = () => {
    window.open('/assets/cv/my_cv.pdf')
  }

  return (
    <section id='about' className={`container ${styles.sectionContainer}`}>
        <img data-aos='fade-down' className={`rounded-circle ${styles.profilePic}`} src={getImageUrl('avatar/avatar.png')} alt='Profile' />
        <div data-aos='fade-down' className={styles.profileName}>
            Hi! I'm Bagas FA ✌🏻
        </div>
        <div data-aos='zoom-in-down' data-aos-delay='50' className={styles.profileHeadline}>
          Experienced
          <br/>
          Frontend Developer
        </div>
        <div data-aos='zoom-out-up' data-aos-duration='550' className={styles.aboutProfile}>
          'Unlocking the digital realm with 2 years of frontend developing finesse, I specialize in Svelte, Embedded JavaScript, and Bootstrap sorcery. Picture me as the architect of captivating user experiences, where every line of code is a brushstroke in a masterpiece of innovation. Let's craft a web narrative that not only functions flawlessly but also captivates and inspires.'
        </div>
        <div className='row justify-content-center mx-0'>
          <div className='col-auto px-3'>
            <button data-aos='fade-up-right' data-aos-duration='450' onClick={hireMe} className={styles.btnHire} type='button'>
              Hire Me
            </button>
          </div>
          <div className='col-auto px-3'>
            <button data-aos='fade-up-left' data-aos-duration='450' onClick={downloadCV} className={styles.btnCV} type='button'>
              <span className='align-middle me-3'>
                Download CV
              </span>
              <i className='bi bi-download align-middle'></i>
            </button>
          </div>
        </div>
    </section>
  )
}