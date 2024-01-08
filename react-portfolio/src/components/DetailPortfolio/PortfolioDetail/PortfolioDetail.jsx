import React, {useEffect} from 'react'
import { Navbar } from '../NavbarPorto/NavbarPorto'
import { Contact } from '../../Contact/Contact'
import { BodyPorto } from '../BodyPorto/BodyPorto'
import { BlankPage } from '../../BlankPage/BlankPage'
import { getPathName } from '../../../helpers/utils'
import AOS from 'aos'
import 'aos/dist/aos.css'

import dataPorto from '../../../data/dataPortofolio.json'

export const PortfolioDetail = () => {
  useEffect(() => {AOS.init()}, [])
  let data = {}

  if(
    getPathName() == 'almakkiyah' || 
    getPathName() == 'merchant-id' || 
    getPathName() == 'merchant-builder' || 
    getPathName() == 'merchant-apps' || 
    getPathName() == 'trueve-id' || 
    getPathName() == 'dizaglow'
  ){
    data = dataPorto[getPathName()]
  }else{
    data = null
  }

  return (
    <>
      <Navbar/>
      { data != null ? <BodyPorto data={data} /> : <BlankPage blankText='404: Masterpiece Missing! <br/> <div className="font-18 text-muted">The Digital Artistry You Seek Has Vanished into the Abyss</div>' /> }
      <Contact />
    </>
  )
}