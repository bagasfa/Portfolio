import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import styles from './BodyPorto.module.css'
import { getImageUrl } from '../../../helpers/utils'
import { PreviewImage } from '../../PreviewImg/ModalImg'
import parseHTML from 'html-react-parser'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'swiper/css'
import 'swiper/css/pagination'

export const BodyPorto = ({data}) => {
  useEffect(() => {AOS.init()}, [])

  let [getImgUrl, setImgUrl] = useState(''),
      [getImgAlt, setImgAlt] = useState('')

  const actPreview = (url, name) => {
    setImgUrl(url)
    setImgAlt(name)
  }

  return (
    <>
      <section className={`container ${styles.portfolioSection}`}>
        <div data-aos='fade-down' className={styles.projectName}>
          {data.name}
        </div>
        <div data-aos='fade-up' className={styles.imagesContainer}>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            freeMode={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              el: '.customPagination',
              type: 'bullets',
              bulletClass: 'swiper-custom-bullet',
              bulletActiveClass: 'swiper-custom-bullet-active',
              dynamicBullets: true,
              clickable: true
            }}
            navigation={{
              prevEl: '.swiperPrev',
              nextEl: '.swiperNext',
            }}
            className={styles.portfolioSwiper}
          >
            {data.images.map((item) => (
              <SwiperSlide key={item.url}>
                <button type='button' className={styles.btnImage} onClick={() => actPreview(item.url, 'Preview')} data-bs-toggle='modal' data-bs-target='#modalPreview'>
                  <img src={getImageUrl(item.url)} className={styles.swiperImage} alt='Images'/>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='row justify-content-between mx-0 mt-4'>
              <div className='col-auto align-self-center px-0'>
                <button data-aos='fade-right' type='button' className={`swiperPrev ${styles.navSwiperPrev}`}>
                    <i className='bi bi-chevron-left' />
                </button>
              </div>
              <div data-aos='fade-down' className='col-auto align-self-center px-0'>
                <div className='customPagination' />
              </div>
              <div className='col-auto align-self-center px-0'>
                <button data-aos='fade-left' type='button' className={`swiperNext ${styles.navSwiperNext}`}>
                    <i className='bi bi-chevron-right' />
                </button>
              </div>
          </div>
        </div>
      </section>

      <section data-aos='fade-up' className={`container ${styles.portfolioSection}`}>
          <div className={styles.projectDesc}>
              {parseHTML(data.desc)}
          </div>
      </section>
      
      <PreviewImage imgUrl={getImgUrl} imgAlt={getImgAlt}/>
    </>
  )
}