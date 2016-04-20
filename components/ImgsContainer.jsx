import React from 'react'
import Img from './Img.jsx'

function ImgsContainer(props) {
  return (
    <div>
      {
        props.imgs.map(img =>
          <Img data= {img} />
        )
      }
    </div>
  )
}

export default ImgsContainer;
