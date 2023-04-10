import { Link } from 'react-router-dom';
import ImageCard from './ImageCard';

function ImageGrid({ images }) {
  return (
    <div className="image-grid">
      {images.map((image) => (
        <Link to={`/nft/${image.token_id}`} key={image.token_id}>
          <ImageCard image={image} />
        </Link>
      ))}
    </div>
  );
}

export default ImageGrid;
