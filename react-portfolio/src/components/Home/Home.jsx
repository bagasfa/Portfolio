import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { About } from '../About/About'
import { Experiences } from '../Experiences/Experiences'
import { Educations } from '../Educations/Educations'
import { Portfolio } from '../Portfolio/Portfolio'
import { Contact } from '../Contact/Contact'
import { logEvent } from 'firebase/analytics'

export const Home = ({analytics}) => {
    logEvent(analytics, 'Just Visiting')
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