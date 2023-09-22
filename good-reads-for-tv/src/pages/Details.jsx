import React from 'react';
import Feature from './../components/common/Feature';
import ReviewHolder from '../components/ui/ReviewHolder'
const Details = () => {
  return (
    <>
      <div className="flex flex-grow flex-row flex-wrap">
        <div className="w-96">
          <ReviewHolder/>
          <Feature poster="{{ img: '', alt: '' }}" /> 




      
        </div>
      </div>
    </>
  );
};

export default Details;
