import React, { FC } from 'react'
import { Slide } from 'react-slideshow-image'


interface Props {
    images:string[]
}



const Slider:FC<Props> = ({images}) => {
    return (
      <Slide
      easing='ease'
      duration={700}
      indicators
      >
          {images.map(image => {
              const url = `/products/${image}`
              return(
                  <div className='each-slide' key={image}>
                      <div style={{
                          backgroundImage:`url(${url})`,
                          backgroundSize: "cover"
                      }}>
                      </div>
                  </div>
              )
          })}
      </Slide>
    )
  }
  
  export default Slider