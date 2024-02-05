import React, {useCallback} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import '../../assets/styles/embla.css';
import Feature from './Feature';
import {NavLink} from 'react-router-dom';


//poster and title will be dynamic based on the information that feature pulls in
const poster = '';
const title = '';

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <NavLink to="/details" className="w-24 embla__slide">
            <Feature poster={poster} title={title}/>
          </NavLink>
          <NavLink to="/details" className="w-24 embla__slide">
            <Feature poster={poster} title={title} />
          </NavLink>
          <NavLink to="/details" className="w-24 embla__slide">
            <Feature poster={poster} title={title} />
          </NavLink>
          <NavLink to="/details" className="w-24 embla__slide">
            <Feature poster={poster} title={title} />
          </NavLink>
          <NavLink to="/details" className="w-24 embla__slide">
            <Feature poster={poster} title={title} />
          </NavLink>
          <NavLink to="/details" className="w-24 embla__slide">
            <Feature poster={poster} title={title} />
          </NavLink>
          <NavLink to="/details" className="w-24 embla__slide">
            <Feature poster={poster} title={title} />
          </NavLink>
          <NavLink to="/details" className="w-24 embla__slide">
            <Feature poster={poster} title={title} />
          </NavLink>
          <NavLink to="/details" className="w-24 embla__slide">
            <Feature poster={poster} title={title} />
          </NavLink>
          <NavLink to="/details" className="w-24 embla__slide">
            <Feature poster={poster} title={title} />
          </NavLink>
        </div>
      </div>
      {/* <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button> */}
    </div>
  );
};

export default Carousel;
