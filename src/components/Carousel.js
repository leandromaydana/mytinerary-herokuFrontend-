import React from 'react';
import Carousel, {} from 'react-grid-carousel';

const Carousel1 = (props) => {
  return ( <div className='carousel-on' >
    <Carousel  className='carousel-in' cols={2} rows={2} gap={10} loop
    autoplay={3000} 
    mobileBreakpoint={300}
    responsiveLayout={[
        {
            breakpoint: 1024,
            cols: 2,
            rows: 2,
            gap: 10,
            loop: true,
            autoplay:1000 
          },
        {
          breakpoint: 768,
          cols: 2,
          rows: 2,
          gap: 10,
          loop: true,
          autoplay: 1000
        },
        {
            breakpoint: 480,
            cols: 1,
            rows: 4,
            gap: 10,
            loop: true,
            autoplay: 1000 
          },
      ]}
      >
      {props.dataciudades && props.dataciudades.map( (item, index)=>
      <Carousel.Item  key={index}>
        <h2 className='textcarousel'>{item.name}</h2>
        <img className='imgcarousel' src={item.image} alt='img' />
      </Carousel.Item>
      ) }

      
    </Carousel>
  </div>
  )
}

export default Carousel1