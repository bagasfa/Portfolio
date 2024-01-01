import React from 'react'
import { Link } from "react-router-dom";
import styles from './NavbarPorto.module.css'

export const Navbar = () => {
    return (
        <nav className={`py-4 ${ styles.navbar}`}>
            <div className='row container mx-auto'>
                <div className='col-auto align-self-center px-0'>
                    <Link to={`/`} className={styles.backHome}>
                        <i className='bi bi-arrow-left-short align-middle'></i>
                        <span className='align-middle'>
                            Back to Home
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}