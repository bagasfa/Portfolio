import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { About } from '../About/About'
import { Experiences } from '../Experiences/Experiences'
import { Educations } from '../Educations/Educations'
import { Portfolio } from '../Portfolio/Portfolio'
import { Contact } from '../Contact/Contact'

export const Home = () => {
    return (
        <>
            <Navbar />
            <About />
            <Experiences />
            <Educations />
            <Portfolio />
            <Contact />
        </>
    )
}
