import React from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={`py-4 ${ styles.navbar}`}>
            <div className='row justify-content-between container mx-auto'>
                <a href='mailto:bagasmgs@gmail.com' className={`col-auto px-0 ${styles.sendMail}`}>
                    <i className='bi bi-envelope align-middle'></i>
                    <span className='align-middle ms-2'>
                        bagasmgs@gmail.com
                    </span>
                </a>
                <div className='col-auto text-right px-0'>
                    <div className='row justify-content-end mx-0'>
                        <a href='#about' className={`col-auto ${styles.menuItems}`}>
                            About
                        </a>
                        <a href='#experiences' className={`col-auto ${styles.menuItems}`}>
                            Experiences
                        </a>
                        <a href='#educations' className={`col-auto ${styles.menuItems}`}>
                            Educations
                        </a>
                        <a href='#portfolio' className={`col-auto ${styles.menuItems}`}>
                            Portfolio
                        </a>
                        <a href='#contact' className={`col-auto ${styles.menuItems}`}>
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}