import {useState} from 'react';
import logo from '../../assets/images/logo.svg';
import {RiCloseCircleFill} from 'react-icons/ri';
import {BsFacebook} from 'react-icons/bs';
import {RiTwitterXFill} from 'react-icons/ri';
import {BsLink45Deg} from 'react-icons/bs';
// import axios from 'axios'

const ShareModal = ({setShowShare}) => {

    function handleClose(e) {
        if (e.target.id === 'share') {
          setShowShare(false);
        }
      }

      return (
        <div
          id="share"
          onClick={handleClose}
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col items-center justify-center"
        >
          <div className='flex items-center justify-end w-72 p-2'>
            <RiCloseCircleFill 
              onClick={() => setShowShare(false)}
              className='text-[--orange] text-2xl cursor-pointer'
            />
          </div>
          <section className="flex flex-col items-start justify-around bg-[--white] gap-4 p-8 rounded-lg w-72">
            <div className="flex items-center justify-around">
              <img className="mx-2 mb-2 h-14 bg-[--orange] rounded-lg" src={logo} />
              <h1 className="font-semibold text-center text-xl text-gray-700">Worth a Watch</h1>
            </div>
            <button className='flex items-center justify-start gap-2'>
                <BsFacebook 
                className='text-[--orange] text-2xl cursor-pointer'
                />FaceBook
            </button>
            <button className='flex items-center justify-start gap-2'>
                <RiTwitterXFill 
                className='text-[--orange] text-2xl cursor-pointer'
                />Twitter
            </button>
            <button className='flex items-center justify-start gap-2'>
                <BsLink45Deg 
                className='text-[--orange] text-2xl cursor-pointer'
                />Copy URL
            </button>
          </section>
        </div>
      );
    };

export default ShareModal;
