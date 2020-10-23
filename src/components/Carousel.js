import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectFetchedProduct} from '../slices/product';
import {setLoading} from '../slices/loading';


const Carousel = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(selectFetchedProduct);
  const images = data ? data['carouselImages'] : [];
  const [activeImage, setActiveImage] = useState(0);
  const setHighlightedImage = (index) => setActiveImage(index);
  const [imagesLoaded, setImagesLoaded] = useState(new Array(images.length).fill(false, 0, images.length));

  useEffect(() => {
    imagesLoaded.find(imgLoaded => imgLoaded === false) === undefined ? dispatch(setLoading(false)) : dispatch(setLoading(true));

    // eslint-disable-next-line
  }, [imagesLoaded])

  return (
    <div
      className="carousel"
    >
      {
        images.length > 0 && (
          <div className="main">
            <img
              src={images[activeImage].url}
              alt={images[activeImage].altText}
              title={images[activeImage].altText}
            />
          </div>
        )
      }
      <div className="thumbnails">
        {
          images.map((img, i) => <div
            className="thumbnails-item"
            key={img.url}
            onClick={() => setHighlightedImage(i)}
          >
            <img
              src={img.url}
              alt={img.altText}
              title={img.altText}
              onLoad={() => {
                let imagesTemp = [...imagesLoaded];
                imagesTemp[i] = true;
                setImagesLoaded(imagesTemp);
              }}
            />
          </div>)
        }
      </div>
    </div>
  );
}

export default Carousel;