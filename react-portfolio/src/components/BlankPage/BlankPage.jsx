import React from 'react'
import { Link } from 'react-router-dom'
import styles from './BlankPage.module.css'
import { getImageUrl } from '../../helpers/utils'
import parseHTML from 'html-react-parser'

export const BlankPage = ({blankText}) => {
    return (
        <section className={`container ${styles.blankContainer}`}>
            <img src={getImageUrl('media/illustration/blank.svg')} alt='Portfolio Not Found' className={styles.imgBlank} />
            <div className={styles.blankText}>
                {parseHTML(blankText)}
            </div>
            <Link to='/' className={styles.btnReturn}>
                Back to Home
            </Link>
        </section>
    )
}