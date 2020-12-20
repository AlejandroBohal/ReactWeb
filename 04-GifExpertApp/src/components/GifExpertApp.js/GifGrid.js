import React, { useState,useEffect } from 'react'
import { getGifs } from '../../services/gifAPIClient'
import GifGridItem from '../GifGridItem';

const GifGrid = ({category}) => {
    const [images, setImages] = useState([]);
    useEffect( () =>{
      getGifs('Marvel').then( res => setImages(res));
    },[]);

    return (
        <>
          <h3>{category}</h3>
          <div className="card-grid">
                {
                  images.map( (image) => (
                    <GifGridItem key={image.id} {...image} />
                  ))
                }
          </div>
        </>
    )
}

export default GifGrid
