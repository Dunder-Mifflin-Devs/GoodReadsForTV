import featurePlaceholder from '../../assets/images/featurePlaceholder.jpg';
import {NavLink} from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Feature({poster, title}) {

  //Need to import the microservices and call the API to grab the TV Shows. Have poster be the the link to OMDB and the image as well.

  const tvShow = () =>{
    const [tvShowData, setTvShowData] = useState(null);
    const [error, setError] = useState(null);
  }

  useEffect(()=>{

    axios.get('OMDB Microservice, whatever mike has set up for me')
      .then(response => setTvShowData(response.data))
      .catch(error => {
        if(error.response){
          setError('Something went wrong httpcode')
        }else{
          setError('Could not get request')
        }
      })

  },[])



  return (


    <div className="text-white flex flex-col">
      <div>
        <img
          src={tvShowData.img || featurePlaceholder}
          alt={tvShowData.alt || title || 'Placeholder'}
          className="sharp object-cover"
        ></img>
      </div>
      {title && (
        <h2 className="font-lisu truncate text-ellipsis overflow-hidden hover:text-[--orange] hover:underline pt-4">
          {title}
        </h2>
      )}
    </div>
  );
}
