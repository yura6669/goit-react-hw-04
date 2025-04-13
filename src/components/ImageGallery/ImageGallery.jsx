import React from 'react'

import ImageCard from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css'

const ImageGallery = ({items, onOpenModal}) => {
  return (
      <>
          <ul className={css.list}>
              {items.map((item) => {
                  return (
                      <li key={item.id}>
                            <ImageCard item={item} onOpenModal={onOpenModal} />
                      </li>
                        )
                    }
                )}
      </ul>
      </>
  )
}

export default ImageGallery