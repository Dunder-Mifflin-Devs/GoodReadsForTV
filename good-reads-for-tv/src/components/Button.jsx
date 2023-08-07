import React from 'react';
import PropTypes from 'prop-types';

const Button = ({text,color,onClick, fontFamily,borderColor}) => {
    
  const test = (e) =>{
    e.preventDefault();
    console.log('clicked, test complete')
  }

  return (
    <div>
      <button
      className='dft-Btn'
      onClick={test}
      style={{backgroundColor: color, fontFamily: fontFamily, borderColor:color}}
      
      >
        {text}

      </button>
    </div>
  )
};

//setting the default color to 'Black'
Button.defaultProps={
  color:'#ffa629'
  // fontFamily:''
}

Button.propTypes ={
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}


export default Button
