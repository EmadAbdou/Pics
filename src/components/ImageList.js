import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    // console.log(props);
    // const images = props.images.map((image) => {
    //     return <img src = {
    //         image.urls.regular
    //     }
    //     alt = {
    //         image.description
    //     }
    //     key = { image.id }
    //     />;
    // });

    // Other type
    // const images = props.images.map(({ description, id, urls }) => {
    //     return <img src = {
    //         urls.regular
    //     }
    //     alt = {
    //         description
    //     }
    //     key = { id }
    //     />;
    // });

    //use Image Card
    const images = props.images.map( (image) => {
        return <ImageCard key= {image.id}  image= {image} />
    });
    return <div className="image-list"> {images} </div>;
};

export default ImageList;