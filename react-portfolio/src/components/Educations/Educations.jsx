import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from './Educations.module.css'

export const Educations = () => {
    useEffect(() => {AOS.init()}, [])
    return (
        <section id='educations' className={`container ${styles.sectionContainer}`}>
            <div data-aos='fade-down' className={styles.eduTitle}>
                Educations
            </div>
            <div className='row mx-0'>
                <div className='col-md-5 px-0 pb-3 pb-md-5'>
                    <div data-aos='fade-right' className={styles.eduName}>
                        SMK Negeri 3 Tuban
                    </div>
                    <div data-aos='fade-right' data-aos-delay='50' className={styles.eduNameTranslation}>
                        (Vocational High School)
                    </div>
                    <div data-aos='fade-right' data-aos-delay='100' className={styles.eduYears}>
                        2015 - 2018
                    </div>
                </div>
                <div data-aos='fade' data-aos-delay='250' className={`col-md-7 pb-3 pb-md-5 ${styles.eduList}`}>
                    <div data-aos='fade-left' className={styles.eduMajor}>
                        Rekayasa Perangkat Lunak
                    </div>
                    <div data-aos='fade-left' data-aos-delay='50' className={styles.eduMajorTranslation}>
                        (Software Engineering)
                    </div>
                    <div data-aos='fade-left' data-aos-delay='100' className={styles.eduDesc}>
                        Learn to code in Java and C++, understand how software is made with a lot of developing methods, and create efficient programs. Dive into databases, build websites with HTML, CSS and JavaScript, and explore computer systems and networks.
                    </div>
                </div>

                <div className='col-md-5 px-0 pt-5 pt-md-0 pb-3 pb-md-5'>
                    <div data-aos='fade-right' className={styles.eduName}>
                        Universitas Brawijaya
                    </div>
                    <div data-aos='fade-right' data-aos-delay='50' className={styles.eduNameTranslation}>
                        (Brawijaya University)
                    </div>
                    <div data-aos='fade-right' data-aos-delay='100' className={styles.eduYears}>
                        2018 - 2021
                    </div>
                </div>
                <div data-aos='fade' data-aos-delay='250' className={`col-md-7 pb-0 pb-md-5 ${styles.eduList}`}>
                    <div data-aos='fade-left' className={styles.eduMajor}>
                        D3 - Teknologi Informasi
                    </div>
                    <div data-aos='fade-left' data-aos-delay='50' className={styles.eduMajorTranslation}>
                        (Diploma 3 in Information Technology)
                    </div>
                    <div data-aos='fade-left' data-aos-delay='100' className={styles.eduDesc}>
                        <div className='text-dark my-2'>
                            GPA : 3.80
                        </div>
                        Pursued a Diploma 3 in Information Technology, gaining a solid foundation in web programming, mobile programming, network systems, and database management. Developed practical skills in software development, system administration, and IT project management. Ready to leverage this comprehensive education for a dynamic and successful career in the field of Information Technology.
                        <div className='my-2'>
                            Final Project : Design And Development Of a Web-Based Haircut Service Booking System
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}