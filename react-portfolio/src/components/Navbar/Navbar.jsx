import React, {useState} from 'react'
import $ from 'jquery';
import styles from './Navbar.module.css'

export const Navbar = () => {
    let [getIcon, setIcon] = useState('bi-list-nested')

    let closeMenu = () => {
        setIcon('bi-list-nested')
        $('#menuContainer').attr('data-shown', false)
    }

    let openMenu = () => {
        setIcon('bi-x-lg')
        $('#menuContainer').attr('data-shown', true)
    }

    let toggleMobileMenu = (e) => {
        if(getIcon == 'bi-list-nested'){
            openMenu()
        }else{
            closeMenu()
        }
    }

    let dismissMenu = () => {
        closeMenu()
    }

    return (
        <nav className={`py-4 ${ styles.navbar}`}>
            <div className='row justify-content-between container mx-auto'>
                <a href='mailto:bagasmgs@gmail.com' className={`col-auto align-self-center px-0 ${styles.sendMail}`}>
                    <i className='bi bi-envelope align-middle'></i>
                    <span className='align-middle ms-2'>
                        bagasmgs@gmail.com
                    </span>
                </a>
                <div className='col-auto align-self-center text-right px-0'>
                    <button type='button' className={styles.mobileToggle} onClick={toggleMobileMenu}>
                        <i className={`bi ${getIcon}`}  />
                    </button>
                    <div id='menuContainer' data-shown='false' className={`row justify-content-end mx-0 ${styles.mobileMenuContainer}`}>
                        <a href='#about' onClick={dismissMenu} className={`col-md-auto ${styles.menuItems}`}>
                            About
                        </a>
                        <a href='#experiences' onClick={dismissMenu} className={`col-md-auto ${styles.menuItems}`}>
                            Experiences
                        </a>
                        <a href='#educations' onClick={dismissMenu} className={`col-md-auto ${styles.menuItems}`}>
                            Educations
                        </a>
                        <a href='#portfolio' onClick={dismissMenu} className={`col-md-auto ${styles.menuItems}`}>
                            Portfolio
                        </a>
                        <a href='#contact' onClick={dismissMenu} className={`col-md-auto ${styles.menuItems}`}>
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}