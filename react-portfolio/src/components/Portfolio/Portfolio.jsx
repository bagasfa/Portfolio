import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import { getImageUrl } from '../../helpers/utils.js'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { PreviewImage } from '../PreviewImg/ModalImg'
import AOS from 'aos'
import styles from './Portfolio.module.css'
import 'aos/dist/aos.css'
import 'swiper/css'
import 'swiper/css/pagination'

import dataPorto from '../../data/dataListPorto.json'

export const Portfolio = () => {
    useEffect(() => {AOS.init()}, [])
    
    let [getImgUrl, setImgUrl] = useState(''),
        [getImgAlt, setImgAlt] = useState('')

    let portfolio = dataPorto

    const actPreview = (url, name) => {
        setImgUrl(url)
        setImgAlt(name)
    }

    return (
        <section id='portfolio' className={`container ${styles.sectionContainer}`}>
            <div data-aos='fade-right' className={styles.portTitle}>
                Portfolio
            </div>
            <div className='row justify-content-between mx-0'>
                <div className='col-md-auto align-self-end px-0'>
                    <div data-aos='fade-right' data-aos-delay='50' className={styles.portCaption}>
                        Let's have a look at
                        <br/>
                        my portfolio
                    </div>
                </div>
                <div className='col-md-auto align-self-end px-0 mt-4 mt-md-0'>
                    <button type='button' className={`swiperPrev ${styles.navSwiperPrev}`}>
                        <i className='bi bi-chevron-left' />
                    </button>
                    <button type='button' className={`swiperNext ${styles.navSwiperNext} ms-2`}>
                        <i className='bi bi-chevron-right' />
                    </button>
                </div>
            </div>
            <div data-aos='fade-up' className={styles.swiperContainer}>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={30}
                    grabCursor={true}
                    freeMode={true}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    navigation={{
                      prevEl: '.swiperPrev',
                      nextEl: '.swiperNext',
                    }}
                    breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        992:{
                          slidesPerView:3
                        }
                    }}
                    className={styles.portfolioSwiper}
                >
                    {portfolio.map((item) => (
                        <SwiperSlide key={item.id}>
                            <button type='button' className={styles.btnImage} onClick={() => actPreview(item.img_url, item.name)} data-bs-toggle='modal' data-bs-target='#modalPreview'>
                                <img src={getImageUrl(item.img_url)} className={styles.swiperImage} alt={item.name}/>
                            </button>
                            <Link to={`/portfolio/${item.link_url}`} className={styles.portName}>
                                <i className={`bi ${item.icon} align-middle`} />
                                <span className='align-middle ms-3 me-2'>
                                    {item.name}
                                </span>
                                <i className={`bi bi-box-arrow-up-right align-middle ${styles.iconOpen}`} />
                                <div>
                                    {item.desc}
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <PreviewImage imgUrl={getImgUrl} imgAlt={getImgAlt}/>
        </section>
    )
}