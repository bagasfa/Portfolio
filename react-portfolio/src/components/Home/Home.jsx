import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { About } from '../About/About'
import { Experiences } from '../Experiences/Experiences'
import { Educations } from '../Educations/Educations'
import { Portfolio } from '../Portfolio/Portfolio'
import { Contact } from '../Contact/Contact'

export const Home = ({analytics}) => {
    return (
        <>
            <Navbar />
            <About analytics={analytics} />
            <Experiences />
            <Educations />
            <Portfolio analytics={analytics} />
            <Contact analytics={analytics} />
        </>
    )
}