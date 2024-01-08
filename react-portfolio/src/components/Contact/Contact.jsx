import React, {useEffect} from 'react'
import { logEvent } from 'firebase/analytics'
import styles from './Contact.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Contact = ({analytics}) => {
    useEffect(() => {AOS.init()}, [])

    let setAnalytics = (pageName) => {
        logEvent(analytics, 'Check My '+pageName)
    }

    return (
        <section id='contact' className={`${styles.sectionContainer}`}>
            <div className='container'>
                <div className={styles.footerTitle}>
                    <div data-aos='fade-right'>Have an idea?</div>
                    <a data-aos='fade' data-aos-delay='100' href="mailto:bagasmgs@gmail.com">
                        Let's talk about it
                    </a>
                </div>
                <div className='row mx-0'>
                    <div data-aos='fade-up' className={`col-md-3 align-self-end text-center text-md-start px-0 order-2 order-md-1 ${styles.footerAddress}`}>
                        <div>
                            Merakurak, 62355
                        </div>
                        <div>
                            Tuban, East Java. Indonesia
                        </div>
                    </div>
                    <div className={`col-md-9 align-self-end text-center text-md-end px-0 mb-4 mb-md-0 order-1 order-md-2 ${styles.footerSocials}`}>
                        <a data-aos='fade-left' data-aos-delay='200' onClick={() => setAnalytics('Linkedin')} href='https://linkedin.com/in/bagasfaf' target='_blank' className='align-middle'>
                            <i className='bi bi-linkedin align-middle' />
                        </a>
                        <a data-aos='fade-left' data-aos-delay='100' onClick={() => setAnalytics('Github')} href='https://github.com/bagasfa' target='_blank' className='align-middle'>
                            <i className='bi bi-github align-middle' />
                        </a>
                        <a data-aos='fade-left' onClick={() => setAnalytics('Whatsapp')} href='https://wa.link/6tl7ij' target='_blank' className='align-middle'>
                            <i className='bi bi-whatsapp align-middle' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}