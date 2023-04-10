import { useEffect, useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import axios from 'axios';

function HomePage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get(
        'https://api.opensea.io/api/v1/assets?format=json'
      );
      setImages(response.data.assets);
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>OpenSea NFT Gallery</h1>
      <div style={{ display: "flex" , margin: "20px 40px" , width: "100%"}}>
        <ImageGrid images={images} />
      </div>
    </div>
  );
}

export default HomePage;
