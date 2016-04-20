import React from 'react';

function Img(img) {
  let data = img.data
  console.log(data)
  return (
    <div className='img'>
      <img src={data.url} />
      <div className='imgWord'>{data.word}</div>
      <div className='imgInfo'>
        <a className='imgInfoPin'>
          <em className='imgInfoPinIcon'></em>
          <em className='imgInfoPinNum'>{data.pin}</em>
        </a>
        <a className='imgInfoLike'>
          <em className='imgInfolikeIcon'></em>
          <em className='imgInfolikeNum'>{data.like}</em>
        </a>
      </div>
      <div className='imgTag'>{data.tag}</div>
    </div>
  )
}

export default Img;
