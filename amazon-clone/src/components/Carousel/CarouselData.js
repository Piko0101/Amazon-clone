import React from 'react'

function CarouselData({children, width, background}) {
    return (
        <div className="carousel-item" style={{width: width, backgroundImage: `url(${background})`}}>
            {children}
        </div>
    )
}

export default CarouselData
