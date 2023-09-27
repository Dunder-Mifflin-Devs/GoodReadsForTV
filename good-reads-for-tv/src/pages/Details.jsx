import React from 'react';
import Feature from './../components/common/Feature';
import ReviewHolder from '../components/ui/ReviewHolder'
import MovieInfo from './ShowInfo';

const Details = () => {
  return (
    <div className="container my-20 mx-auto md:px-15 grid grid-cols-2">
      <section className="mb-32">
        <div className="w-96 h-96">
          <Feature poster={{ img: '', alt: '' }} />
        </div>
      </section>
      <section className="flex flex-col justify-between">
        <div>
          <ShowInfo />          
        </div>
        <div className="my-auto text-left">
          <ReviewHolder />          
        </div>
      </section>
    </div>
  );
};

export default Details;