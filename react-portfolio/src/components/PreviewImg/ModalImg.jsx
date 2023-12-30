import React from 'react'
import {getImageUrl} from '../../helpers/utils.js'
import styles from './ModalImg.module.css'

const ModalImg = ({modalId, imgUrl, imgAlt}) => {
    return (
        <div className='modal fade' id='testModal' tabIndex='-1' aria-hidden='true'>
            <div className='modal-dialog modal-fullscreen modal-dialog-scrollable'>
                <div className='modal-content'>
                    <div className='modal-header border-0'>
                        <h5 className='modal-title'>Image Preview</h5>
                        <button type='button' className={`btn-close ${styles.btnClose}`} data-bs-dismiss='modal' aria-label='Close'></button>
                    </div>
                    <div className='modal-body p-0'>
                        <img src={getImageUrl(imgUrl)} alt={imgAlt} className={styles.imgPreview} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalImg