import React, {useEffect} from 'react'
import styles from './Portfolio.module.css'
import {getImageUrl} from '../../helpers/utils.js'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import AOS from 'aos'
import 'swiper/css'
import 'swiper/css/pagination'
import 'aos/dist/aos.css'

// import required modules

export const Portfolio = () => {
    useEffect(() => {AOS.init()}, [])

    let portfolio = [
        {
            img_url:'media/almakkiyah.png',
            link_url:'https://al-makkiyah.com',
            icon:'bi-globe-asia-australia',
            name:'Al-Makkiyah',
            desc:'"The skincare storefront built using the tech stack SvelteKit, JavaScript, and Bootstrap"'
        },
        {
            img_url:'media/merchant.jpeg',
            link_url:'https://merchant.id',
            icon:'bi-globe-asia-australia',
            name:'Merchant.id',
            desc:'"Merchant.id landingpage was built only using HTML, CSS, and JavaScript"'
        },
        {
            img_url:'media/merchant-builder.jpeg',
            link_url:'https://side.link/elementor-optimized',
            icon:'bi-globe-asia-australia',
            name:'Landingpage Merchant Builder',
            desc:'"Landingpage Merchant Builder was built only using HTML, Bootstrap, and jQuery"'
        },
        {
            img_url:'media/merchant-apps.png',
            link_url:'https://app.merchant.id',
            icon:'bi-globe-asia-australia',
            name:'Merchant Apps',
            desc:'"Merchant.id Apps is a Dashboard App and built using Embedded JavaScript, Bootstrap, and Custom PHP Framework"'
        },
        {
            img_url:'media/trueve.jpg',
            link_url:'https://store.trueve.id',
            icon:'bi-globe-asia-australia',
            name:'Trueve',
            desc:'"Trueve storefront was built using Embedded JavaScript, Bootstrap, and jQuery"'
        },
        {
            img_url:'media/dizaglow.png',
            link_url:'https://dizaglow.com',
            icon:'bi-globe-asia-australia',
            name:'Dizaglow',
            desc:'"Dizaglow storefront was built using Svelte Kit, JavaScript, and Bootstrap"'
        },
        {
            img_url:'media/iblu.jpeg',
            link_url:'#',
            icon:'bi-github',
            name:'iBLU',
            desc:'"iBlu is a certification website built using the tech stack HTML, CSS, jQuery, and Native PHP"'
        },
    ]
    return (
        <section id='portfolio' className={`container ${styles.sectionContainer}`}>
            <div data-aos='fade-right' className={styles.portTitle}>
                Portfolio
            </div>
            <div data-aos='fade-right' data-aos-delay='50' className={styles.portCaption}>
                Let's have a look at
                <br/>
                my portfolio
            </div>
            <div data-aos='fade-up' className={styles.swiperContainer}>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    grabCursor={true}
                    freeMode={true}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className={styles.portfolioSwiper}
                >
                    {portfolio.map((item) => (
                        <SwiperSlide key={item.name}>
                            <img src={getImageUrl(item.img_url)} className={styles.swiperImage} alt={item.name}/>
                            <a href={item.link_url} target='_blank' className={styles.portName}>
                                <i className={`bi ${item.icon} align-middle`} />
                                <span className='align-middle ms-3'>
                                    {item.name}
                                </span>
                                <div>
                                    {item.desc}
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}