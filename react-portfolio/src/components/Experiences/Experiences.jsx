import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Experiences.module.css'

export const Experiences = () => {
    useEffect(() => {AOS.init()}, [])

    let roles = [
        {
            icon:'bi-code',
            title:'Fullstack Developer',
            desc:'Code with VueJs, NuxtJs, and NestJs. Also handling GCP Server and Maintain a Local Server',
            aos:50
        },
        {
            icon:'bi-braces-asterisk',
            title:'Front-End Developer',
            desc:'Code with Svelte, ReactJs, Bootstrap CSS, jQuery',
            aos:100
        },
        {
            icon:'bi-code-slash',
            title:'Back-End Developer',
            desc:'Code with back-end PHP Laravel',
            aos:150
        },
        {
            icon:'bi-pc-display',
            title:'IT Support Infrastructure',
            desc:'Install, Clone, Maintenance OS & Install or Maintenance Network things',
            aos:200
        }
    ]

    return (
        <section id='experiences' className={`container ${styles.sectionContainer}`}>
            <div className='row mx-0'>
                <div className='col-md-6 ps-0 pe-0 pe-md-4'>
                    {roles.map((item) => (
                        <div key={item.aos} data-aos='fade-right' data-aos-delay={item.aos} className={`row mx-0 ${styles.listRoles}`}>
                            <div className='col-auto align-self-center px-0'>
                                <div className={styles.iconRoles}>
                                    <i className={`bi ${item.icon} align-middle`}></i>
                                </div>
                            </div>
                            <div className='col-9 col-md-10 align-self-center ps-4 pe-0'>
                                <div className={styles.rolesTitle}>
                                    {item.title}
                                </div>
                                <div className={styles.rolesDesc}>
                                    {item.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='row pt-3 mx-0 mt-5'>
                        <div data-aos='fade-right' data-aos-delay='100' className='col-6 col-md-4 text-center text-md-start'>
                            <div className={styles.expNumber}>
                                12+
                            </div>
                            <div className={styles.expType}>
                                Projects Completed
                            </div>
                        </div>
                        <div data-aos='fade-left' data-aos-delay='200' className='col-6 col-md-4 text-center text-md-start'>
                            <div className={styles.expNumber}>
                                3+
                            </div>
                            <div className={styles.expType}>
                                Years Experience
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 ps-0 ps-md-4 pe-0 mt-5 mt-md-0'>
                    <div data-aos='fade-down' className={styles.expTitle}>
                        Experiences
                    </div>
                    <div className={styles.expList}>
                        <div data-aos='fade-right' data-aos-delay='50' className={styles.companyTitle}>
                            PT. ASI Pudjiastuti Aviation
                            <span className='ms-2'>
                                (Susi Air)
                            </span>
                        </div>
                        <div data-aos='fade-right' data-aos-delay='100' className={styles.workExp}>
                            <span className='align-middle'>
                              Fullstack Developer
                            </span>
                            <i className='bi-dot align-middle mx-2'></i>
                            <span className='align-middle'>
                                Jan 2024 - Present
                            </span>
                        </div>
                        <div data-aos='fade' data-aos-delay='350' className={styles.companyJobdesk}>
                            <ul>
                                <li data-aos='fade-right' data-aos-delay='150'>
                                    Designing and developing App using NuxtJs, VueJs, and NestJs Framework
                                </li>
                                <li data-aos='fade-right' data-aos-delay='200'>
                                    Work collaboratively with business and operation to determine user journey
                                </li>
                                <li data-aos='fade-right' data-aos-delay='250'>
                                    Writing efficient database queries and optimizing database performance
                                </li>
                                <li data-aos='fade-right' data-aos-delay='300'>
                                    Translating the Managing Director's vision into the development of a pilot application and internal company systems
                                </li>
                                <li data-aos='fade-right' data-aos-delay='350'>
                                    Overseeing and driving the ongoing development of the pilot application
                                </li>
                                <li data-aos='fade-right' data-aos-delay='400'>
                                    Leading the migration of a large-scale database, encompassing hundreds of thousands of records, into a new ecosystem
                                </li>
                                <li data-aos='fade-right' data-aos-delay='450'>
                                    Utilizing Google Cloud Platform, to ensure the Susi Group Server is scalable, secure, and optimized
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.expList}>
                        <div data-aos='fade-right' data-aos-delay='50' className={styles.companyTitle}>
                            PT. Codelaris Inti Sinergi
                        </div>
                        <div data-aos='fade-right' data-aos-delay='100' className={styles.workExp}>
                            <span className='align-middle'>
                              Front-End Developer
                            </span>
                            <i className='bi-dot align-middle mx-2'></i>
                            <span className='align-middle'>
                                Des 2021 - Des 2023
                            </span>
                        </div>
                        <div data-aos='fade' data-aos-delay='350' className={styles.companyJobdesk}>
                            Create and manage the interface of the websites :
                            <ul>
                                <li data-aos='fade-right' data-aos-delay='150'>
                                    <a href="https://merchant.id" target='_blank'>
                                        merchant.id
                                    </a>
                                </li>
                                <li data-aos='fade-right' data-aos-delay='200'>
                                    <a href="https://store.trueve.id" target='_blank'>
                                        store.trueve.id
                                    </a>
                                </li>
                                <li data-aos='fade-right' data-aos-delay='250'>
                                    <a href="https://dizaglow.com" target='_blank'>
                                        dizaglow.com
                                    </a>
                                </li>
                                <li data-aos='fade-right' data-aos-delay='300'>
                                    <a href="https://dizanaga.com" target='_blank'>
                                        dizanaga.com
                                    </a>
                                </li>
                                <li data-aos='fade-right' data-aos-delay='350'>
                                    <a href="https://bgskin.shop" target='_blank'>
                                        bgskin.shop
                                    </a>
                                </li>
                                <li data-aos='fade-right' data-aos-delay='400'>
                                    <a href="https://al-makkiyah.com" target='_blank'>
                                        al-makkiyah.com
                                    </a>
                                </li>
                            </ul>
                            as well as marketplace product websites made by merchant.id, including :
                            <ul>
                                <li data-aos='fade-right' data-aos-delay='150'>
                                    <a href="https://app.merchant.id" target='_blank'>
                                        app.merchant.id
                                    </a>
                                </li>
                                <li data-aos='fade-right' data-aos-delay='200'>
                                    <a href="https://account.merchant.id" target='_blank'>
                                        account.merchant.id
                                    </a>
                                </li>
                                <li data-aos='fade-right' data-aos-delay='250'>
                                    <a href="https://builder.merchant.id" target='_blank'>
                                        builder.merchant.id
                                    </a>
                                </li>
                                <li data-aos='fade-right' data-aos-delay='300'>
                                    <a href="https://omni.merchant.id" target='_blank'>
                                        omni.merchant.id
                                    </a>
                                </li>
                                <li data-aos='fade-right' data-aos-delay='350'>
                                    <a href="https://domain.merchant.id" target='_blank'>
                                        domain.merchant.id
                                    </a>
                                </li>
                                <li data-aos='fade-right' data-aos-delay='400'>
                                    <a href="https://form.merchant.id" target='_blank'>
                                        form.merchant.id
                                    </a>
                                </li>
                                <li data-aos='fade-right' data-aos-delay='450'>
                                    <a href="https://cod.merchant.id" target='_blank'>
                                        cod.merchant.id
                                    </a>
                                </li>
                                <li data-aos='fade-right' data-aos-delay='500'>
                                    <a href="https://crm.merchant.id" target='_blank'>
                                        crm.merchant.id
                                    </a>
                                </li>
                                <li data-aos='fade-right' data-aos-delay='550'>
                                    <a href="https://rotator.merchant.id" target='_blank'>
                                        rotator.merchant.id
                                    </a>
                                </li>
                            </ul>
                            By using HTML, Native CSS or Framework CSS like Bootstrap, EJS, JavaScript, and Svelte Kit in the developing process. And also using the API to integrate data from the server into the UI with the help of Backend Developer team.
                        </div>
                    </div>
                    <div className={styles.expList}>
                        <div data-aos='fade-left' data-aos-delay='50' className={styles.companyTitle}>
                            PT. Suryaraya Rubberindo Industries
                        </div>
                        <div data-aos='fade-left' data-aos-delay='100' className={styles.workExp}>
                            <span className='align-middle'>
                              IT Support
                            </span>
                            <i className='bi-dot align-middle mx-2'></i>
                            <span className='align-middle'>
                                Jan 2017 - Mar 2017
                            </span>
                            <span className='badge rounded-pill bg-dark align-middle font-16 fw-normal px-3 ms-3'>
                                Internship
                            </span>
                        </div>
                        <div className={styles.companyJobdesk}>
                            <ul>
                                <li data-aos='fade-left' data-aos-delay='150'>
                                    Responsible for maintenance of 300+ Client Computers and Virtual Computer
                                </li>
                                <li data-aos='fade-left' data-aos-delay='200'>
                                    Responsible for hardware, network maintenance, documentation, and data of IT goods in the warehouse and installed on the user
                                </li>
                                <li data-aos='fade-left' data-aos-delay='250'>
                                    Performing network installation between buildings and Configuring user network routing
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}