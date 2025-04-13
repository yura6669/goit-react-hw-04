import React from 'react'
import ReactModal from 'react-modal'
import { useEffect, useState } from 'react'

const ImageModal = ({ item, onCloseModal }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => setIsOpen(true), []);

    const style = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'transparent',
            border: 'none',  
        },
    }

  return (
      <>
          <ReactModal
              isOpen={isOpen}
              ariaHideApp={false}
              onRequestClose={onCloseModal}
              shouldCloseOnOverlayClick={true}
              shouldCloseOnEsc={true}
                style={style}
              >
              <div>
                    <img src={item.urls.regular} alt={item.slug} width="800" height="600" />
              </div>
        </ReactModal>
      </>
  )
}

export default ImageModal