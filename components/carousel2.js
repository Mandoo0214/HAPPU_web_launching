import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import imageByIndex from '../components/imgIdxCarousel'
import Image from 'next/image'

const EmblaCarousel2 = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <div className="embla2">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <Image
                className = "embla__slide__img2"
                src = {imageByIndex(index)}
                alt = "travel item"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel2