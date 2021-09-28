import React from 'react'

function CarouselData({width, image}) {
    return (
        <div className="carousel-item home__image" style={{width: width }}>
            <img src={image}/>
        </div>
    )
}

export default CarouselData
