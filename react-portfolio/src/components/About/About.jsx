import React, {useEffect} from 'react'
import { logEvent } from 'firebase/analytics'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './About.module.css'
import {getImageUrl} from '../../helpers/utils.js'

export const About = ({analytics}) => {
  useEffect(() => {AOS.init()}, [])

  let downloadCV = () => {
    logEvent(analytics, 'Download CV')
    window.open('https://drive.google.com/file/d/1vvNaK5dnoRTKN-NOcxQYN51mwALhav9m/view?usp=sharing','_blank')
  }

  return (
    <section id='about' className={`container ${styles.sectionContainer}`}>
        <img data-aos='fade-down' className={`rounded-circle ${styles.profilePic}`} src={getImageUrl('avatar/avatar.png')} alt='Profile' />
        <div data-aos='fade-down' className={styles.profileName}></div>
        <div data-aos='zoom-in-down' data-aos-delay='50' className={styles.profileHeadline}>
          Experienced
          <br/>
          Web Developer
        </div>
        <div data-aos='zoom-out-up' data-aos-duration='550' className={styles.aboutProfile}>
          "With 3 years of web development experience, I've become skilled in Svelte, Embedded JavaScript, and Bootstrap. At my last job with Susi Air, I further developed my expertise in Vue.js and NestJS. I see myself as a creator of engaging user experiences, treating each line of code like a stroke in a work of art. Let's build a web experience that works perfectly and also captivates and inspires."
        </div>
        <div className='row justify-content-center mx-0'>
          <div className='col-auto px-3 mt-3 mt-md-0'>
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