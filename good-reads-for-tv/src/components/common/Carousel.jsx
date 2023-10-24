import React, {useCallback, useEffect, useState} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {flushSync} from 'react-dom';
import imageByIndex from '../../assets/javascript/imageByIndex';
import '../../assets/styles/embla.css';
import Feature from './Feature';
import { NavLink } from 'react-router-dom';

const TWEEN_FACTOR = 4.2;

const numberWithinRange = (number, min, max) => Math.min(Math.max(number, min), max);

const Carousel = props => {
  const {slides, options} = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [tweenValues, setTweenValues] = useState([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach(loopItem => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll());
    });
    emblaApi.on('reInit', onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map(index => (
            <div
              className="embla__slide"
              key={index}
              style={{
                ...(tweenValues.length && {opacity: tweenValues[index]}),
              }}
            >
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <NavLink to="/details" className="w-24">
                <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 3'} />
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
