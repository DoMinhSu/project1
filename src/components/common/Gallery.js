import React, { useState, useEffect } from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import "./Gallery.css";
export default function Gallery({ items }) {

  console.log(items);

  return (
    <div>

      {
        items && (
          <ImageGallery
            items={items}
            lazyLoad={true}

          // showFullscreenButton={false}
          // showPlayButton={false}
          />
        )
      }
    </div>

  )
}
