import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ImageDetails from '../components/ImageDetails';

function ImagePage() {
  const { id } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const response = await axios.get(
        `https://api.opensea.io/api/v1/asset/0x06012c8cf97bead5deae237070f9587f8e7a266d/${id}`
      );
      setImage(response.data);
    };

    fetchImage();
  }, [id]);

  if (!image) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{image.name}</h1>
      <ImageDetails image={image} />
    </div>
  );
}

export default ImagePage;
