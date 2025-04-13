import React from 'react'

import css from './ImageCard.module.css'

const ImageCard = ({ item, onOpenModal }) => {
    return (
        <div className={css.img} onClick={() => onOpenModal(item)}>
		  <img src={item.urls.small} alt={item.slug} width="400" height="300" />
		</div>
  )
}

export default ImageCard